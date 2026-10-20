/* Spring Rush 2027: hash-routed single page. All user data stays in this browser (localStorage). */
(function () {
  "use strict";
  var R = window.RUSH;
  var KEY = "spring-rush-2027";
  var S = load();

  function load() {
    var base = { checks: {}, drill: {}, cases: [], draft: null, contacts: [], market: [], deals: [{}, {}, {}] };
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || "null");
      if (raw && typeof raw === "object") for (var k in base) if (raw[k] !== undefined) base[k] = raw[k];
    } catch (e) {}
    while (base.deals.length < 3) base.deals.push({});
    return base;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function day(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function today() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function nice(s) { if (!s) return ""; var d = day(s); return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }); }
  function words(s) { s = (s || "").trim(); return s ? s.split(/\s+/).length : 0; }
  function uid() { return Math.random().toString(36).slice(2, 10); }
  function toast(msg) {
    var t = document.createElement("div"); t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2200);
  }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0"); }

  /* ---------- plan math ---------- */
  var T = today();
  var allTasks = []; R.weeks.forEach(function (w) { w.tasks.forEach(function (t) { allTasks.push(t[0]); }); });
  function weekIndex() {
    for (var i = 0; i < R.weeks.length; i++) if (T >= day(R.weeks[i].start) && T <= day(R.weeks[i].end)) return i;
    if (T < day(R.weeks[0].start)) return 0;
    for (var j = 0; j < R.weeks.length - 1; j++) if (T > day(R.weeks[j].end) && T < day(R.weeks[j + 1].start)) return j + 1;
    return -1;
  }
  var WI = weekIndex();
  function doneCount(ids) { return ids.filter(function (k) { return S.checks[k]; }).length; }
  function daysTo(s) { return Math.round((day(s) - T) / 86400000); }

  /* ---------- checklists (shared state by data-k) ---------- */
  function checklist(items, prefix) {
    return '<ul class="check">' + items.map(function (it) {
      var k = it[0], on = !!S.checks[k];
      return '<li class="' + (on ? "done" : "") + '"><input type="checkbox" id="' + prefix + k + '" data-k="' + k + '"' + (on ? " checked" : "") + '><label for="' + prefix + k + '">' + it[1] + "</label></li>";
    }).join("") + "</ul>";
  }
  document.addEventListener("change", function (e) {
    var k = e.target.getAttribute && e.target.getAttribute("data-k");
    if (!k) return;
    S.checks[k] = e.target.checked; save();
    $$('input[data-k="' + k + '"]').forEach(function (b) { b.checked = e.target.checked; b.closest("li").classList.toggle("done", e.target.checked); });
    refreshCounts();
  });
  function progressBar(done, total, label) {
    return '<div class="progress"><span>' + done + " of " + total + " " + (label || "done") + '</span><div class="bar"><i style="width:' + (total ? done / total * 100 : 0) + '%"></i></div></div>';
  }
  function refreshCounts() {
    var b = $("#navBar"); if (b) b.textContent = doneCount(R.bar.map(function (x) { return x[0]; })) + "/" + R.bar.length;
    var p = $("#navPlan"); if (p) p.textContent = Math.round(doneCount(allTasks) / allTasks.length * 100) + "%";
    var c = $("#navChats"); if (c) c.textContent = S.contacts.filter(function (x) { return x.status === "Chatted" || x.status === "Thanked"; }).length;
    var cur = location.hash.replace("#", "") || "today";
    if (cur === "today") renderToday();
    if (cur === "plan") { $("#planBarProg").innerHTML = progressBar(doneCount(R.bar.map(function (x) { return x[0]; })), R.bar.length); $("#planProg").innerHTML = progressBar(doneCount(allTasks), allTasks.length, "tasks done"); R.weeks.forEach(function (w, i) { var el = $("#wp" + i); if (el) { var ids = w.tasks.map(function (t) { return t[0]; }); el.textContent = doneCount(ids) + "/" + ids.length; } }); }
  }

  /* ---------- pages ---------- */
  function chatsDone() { return S.contacts.filter(function (x) { return x.status === "Chatted" || x.status === "Thanked"; }); }
  function streak() {
    var have = {}; S.market.forEach(function (m) { have[m.date] = 1; });
    var d = new Date(T), n = 0;
    if (!have[iso(d)]) d.setDate(d.getDate() - 1);
    while (have[iso(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function latestMarket() { var m = S.market.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }); return m[0]; }
  function dueContacts() {
    return S.contacts.filter(function (c) { return c.next && day(c.next) <= T && c.status !== "Thanked"; });
  }

  var MILESTONES = [
    ["2026-11-17", "MATH 16A midterm 2", "c"],
    ["2026-12-15", "ECON 2 final", "c"],
    ["2026-12-17", "MATH 16A final", "c"],
    ["2027-01-11", "BNY Freshman Jumpstart registration opens", "c"],
    ["2027-01-19", "Spring classes start; BIG and BFC chats likely open", "p"],
    ["2027-01-26", "UBG Meet the Org (projected)", "p"],
    ["2027-01-28", "UFA|UMCG chats likely open", "p"],
    ["2027-02-01", "Goldman Possibilities Series likely opens", "p"],
    ["2027-02-13", "UFA|UMCG interviews (projected)", "p"],
    ["2027-03-05", "Citadel Discover deadline (unverified)", "u"]
  ];

  function renderToday() {
    var el = $("#p-today");
    var w = WI >= 0 ? R.weeks[WI] : null;
    var barIds = R.bar.map(function (x) { return x[0]; });
    var lm = latestMarket(), due = dueContacts();
    var upcoming = MILESTONES.filter(function (m) { return daysTo(m[0]) >= 0; }).slice(0, 5);
    var mastered = R.questions.filter(function (q) { var d = S.drill[q.id]; return d && d.last === "got"; }).length;
    el.innerHTML =
      '<div class="hero"><div class="tab" style="color:var(--navy-dim)"><span style="background:var(--navy-ink);color:var(--navy)">1</span>Today</div>' +
      "<h1>" + (daysTo(R.classesStart) > 0 ? daysTo(R.classesStart) + " days to rush" : "Rush is here") + "</h1>" +
      "<p>" + T.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) + (w ? ". Plan week " + (WI + 1) + " of " + R.weeks.length + ": " + w.title + "." : ".") + "</p>" +
      '<div class="kpis">' +
      '<div class="kpi"><b>' + doneCount(barIds) + "/" + barIds.length + "</b><span>rush-ready bar</span></div>" +
      '<div class="kpi"><b>' + Math.round(doneCount(allTasks) / allTasks.length * 100) + "%</b><span>of the plan done</span></div>" +
      '<div class="kpi"><b>' + chatsDone().length + "</b><span>coffee chats done</span></div>" +
      '<div class="kpi"><b>' + mastered + "/" + R.questions.length + "</b><span>drill questions nailed</span></div>" +
      '<div class="kpi"><b>' + streak() + "</b><span>day market-log streak</span></div>" +
      "</div></div>" +
      '<div class="grid2">' +
      '<div class="card"><h3>This week <a href="#plan">full plan</a></h3>' +
      (w ? '<p class="small">' + w.label + " · about " + w.hrs + " hours</p>" + checklist(w.tasks, "t-") : '<p class="small">The plan ran Oct 19 to Feb 14. Use the drill and tracker to stay sharp.</p>') + "</div>" +
      '<div class="card"><h3>Morning numbers <a href="#markets">log</a></h3>' +
      (lm && lm.date === iso(T) ? '<p>Logged today: S&amp;P 500 <b>' + esc(lm.spx) + "</b>, 10-year <b>" + esc(lm.ten) + "%</b>" + (lm.fed ? ", Fed funds " + esc(lm.fed) : "") + ".</p>" + (lm.deal ? '<p class="small">' + esc(lm.deal) + "</p>" : "")
        : '<p>Not logged yet today.' + (lm ? ' Last entry ' + nice(lm.date) + ": S&amp;P " + esc(lm.spx) + ", 10-year " + esc(lm.ten) + "%." : "") + '</p><div class="row-btns"><a class="btn primary" href="#markets">Log today\'s numbers</a></div>') +
      "</div>" +
      '<div class="card"><h3>Follow-ups due <a href="#tracker">tracker</a></h3>' +
      (due.length ? '<div class="list">' + due.slice(0, 5).map(function (c) { return '<div class="item"><span>' + esc(c.name) + ' <span class="meta">' + esc(c.org === "Bank or firm" || c.org === "Other" ? c.where || c.org : c.org) + "</span></span><span class=\"due\">" + (c.next === iso(T) ? "today" : "since " + nice(c.next)) + "</span></div>"; }).join("") + "</div>"
        : '<p class="small">' + (S.contacts.length ? "Nothing due. Set a next-touch date on each contact so this list works for you." : "No contacts yet. Add the first five members and alumni you want to talk to.") + "</p>") + "</div>" +
      '<div class="card"><h3>Coming up</h3><div class="list">' + upcoming.map(function (m) {
        return '<div class="item"><span>' + m[1] + ' <span class="pill ' + m[2] + '">' + { c: "confirmed", p: "projected", u: "unverified" }[m[2]] + '</span></span><span class="meta">' + nice(m[0]) + " · " + daysTo(m[0]) + "d</span></div>";
      }).join("") + "</div></div>" +
      "</div>" +
      '<div class="card"><h3>Five-minute drill</h3><p class="small">Three random questions, 90 seconds each, answered out loud. Do this every day you open the site.</p><div class="row-btns"><a class="btn primary" href="#drill" data-quick="1">Start</a></div></div>';
  }

  function renderPlan() {
    var el = $("#p-plan");
    var barIds = R.bar.map(function (x) { return x[0]; });
    el.innerHTML =
      '<div class="tab"><span>2</span>The plan</div><h1 class="ph">What "best IB kid at rush" means by January 19</h1>' +
      '<p class="lead">Club interviewers test freshmen on accounting, how the statements link, valuation, a DCF and the news. Nobody expects merger math or an LBO from a freshman, so knowing them cold is what puts you above the sophomores in the same room.</p>' +
      '<div id="planBarProg">' + progressBar(doneCount(barIds), barIds.length) + "</div>" + checklist(R.bar, "b-") +
      '<p class="src"><b>Source:</b> freshman interview depth from BFC\'s join page ("follow the news," difficulty adjusted to your year) and a UVA career guide noting most bulge brackets skip merger and LBO questions. The two-chats-per-club target is this plan\'s number, not a club\'s.</p>' +
      '<h2 style="margin-top:12px">Oct 19 to Feb 14, one block a week</h2>' +
      '<p>About 30 hours a week, 25 of them technical. Exact lessons are linked. Finals drop to 20 minutes of flashcards a day, and the week of Nov 17 (MATH midterm 2) gets its own room.</p>' +
      '<div id="planProg">' + progressBar(doneCount(allTasks), allTasks.length, "tasks done") + "</div>" +
      '<div class="weeks">' + R.weeks.map(function (w, i) {
        var ids = w.tasks.map(function (t) { return t[0]; });
        var cls = i === WI ? "now" : (T > day(w.end) ? "past" : "");
        return '<div class="week ' + cls + '" id="week' + i + '"><div class="week-h"><span class="when">' + w.label + "</span><h3>" + w.title + "</h3>" + (i === WI ? '<span class="nowtag">This week</span>' : "") + '<span class="wp" id="wp' + i + '">' + doneCount(ids) + "/" + ids.length + '</span><span class="hrs">' + w.hrs + " h</span></div>" + checklist(w.tasks, "w-") + "</div>";
      }).join("") + "</div>" +
      '<div class="row-btns"><button class="btn ghost" id="clearChecks" type="button">Clear all checkmarks</button></div>' +
      '<p class="src"><b>Source:</b> syllabus order and hours are this plan\'s synthesis from the resources linked in each week. Club dates projected from spring 2025 and 2026 cycles.</p>';
    $("#clearChecks").addEventListener("click", function () {
      var b = this; if (b.dataset.armed) { S.checks = {}; save(); renderPlan(); refreshCounts(); toast("Checkmarks cleared"); return; }
      b.dataset.armed = 1; b.textContent = "Click again to clear everything"; setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = "Clear all checkmarks"; } }, 3000);
    });
    if (WI >= 0 && !renderPlan.scrolled) { renderPlan.scrolled = true; }
  }

  function clubChats(name) { return S.contacts.filter(function (c) { return c.org === name; }); }
  function renderClubs() {
    $("#p-clubs").innerHTML =
      '<div class="tab"><span>3</span>Clubs</div><h1 class="ph">Four clubs, one three-week window</h1>' +
      '<p class="lead">Spring classes start Tuesday, January 19. Going by last year\'s dates, all four main clubs run chats, applications and interviews inside the first three weeks, and chats open on or before day one. Your relationships have to exist before January. No club has posted spring 2027 dates yet, so every window here is projected.</p>' +
      '<div class="tombs">' + R.clubs.map(function (c) {
        var cs = clubChats(c.name), done = cs.filter(function (x) { return x.status === "Chatted" || x.status === "Thanked"; }).length;
        return '<div class="tomb"><div class="name">' + c.name + '</div><div class="full">' + c.full + '</div><div class="when">' + c.window + ' <span class="pill ' + c.status + '">' + (c.status === "p" ? "projected" : "not posted") + "</span></div>" +
          "<dl><dt>Format</dt><dd>" + esc(c.format) + "</dd><dt>IB evidence</dt><dd>" + esc(c.evidence) + "</dd><dt>Your move</dt><dd>" + esc(c.move) + "</dd></dl>" +
          '<div class="chats">Your chats: <b>' + done + "</b> done, " + (cs.length - done) + ' in progress · <a href="' + c.link + '">club site</a></div></div>';
      }).join("") + "</div>" +
      '<div class="callout"><h3>Write your own applications. Every word.</h3><p>BIG\'s application says using AI is grounds for disqualification and for being blacklisted "from other clubs you may be applying to," which tells you the clubs talk to each other. Use AI to quiz you and run mock interviews. Never use it to write anything you submit.</p></div>' +
      '<p class="small">A Berkeley alum now in NYC M&amp;A, who was in two top-tier clubs, wrote on WSO in August 2026 that the club matters less than it used to, and a strong GPA plus technicals lets you recruit from anywhere. Rush matters, but your grades matter more.</p>' +
      '<p class="src"><b>Source:</b> club sites (BIG FAQ, careers and intern program; UBG careers and recruitment timeline; BFC join page; UFA|UMCG recruit page, archived spring 2025; BAP rush page); BIG fall 2026 application; Berkeley registrar 2026-27 calendar; WSO "Best Finance Clubs at UC Berkeley for IB/PE?" (Aug 2026).</p>';
  }

  /* ---------- drill ---------- */
  var D = { topic: "All", level: "all", queue: [], i: 0, t0: 0, timer: null, revealed: false, quick: false };
  var TOPICS = ["All", "Accounting", "Valuation", "DCF", "M&A", "LBO", "Markets", "Fit"];
  function pool() {
    return R.questions.filter(function (q) { return (D.topic === "All" || q.topic === D.topic) && (D.level === "all" || q.level === D.level); });
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function weakFirst(a) {
    var rank = { miss: 0, shaky: 1, undefined: 2, got: 3 };
    return shuffle(a).sort(function (x, y) { return rank[(S.drill[x.id] || {}).last] - rank[(S.drill[y.id] || {}).last]; });
  }
  function startDrill(quick) {
    D.quick = !!quick; D.queue = quick ? shuffle(R.questions.filter(function (q) { return q.topic !== "Fit"; })).slice(0, 3) : weakFirst(pool()); D.i = 0; showQ();
  }
  function dynamicAnswer(q) {
    if (q.dynamic === "market") { var m = latestMarket(); return m ? '<p class="live">From your log (' + nice(m.date) + "): S&amp;P 500 " + esc(m.spx) + ", 10-year " + esc(m.ten) + "%" + (m.fed ? ", Fed funds " + esc(m.fed) : "") + ".</p>" : '<p class="live">Nothing logged yet. Add today\'s numbers on the Markets page.</p>'; }
    if (q.dynamic === "deal") { var ds = S.deals.filter(function (d) { return d.target; }); return ds.length ? '<p class="live">Your deals: ' + ds.map(function (d) { return esc(d.buyer || "?") + " / " + esc(d.target); }).join("; ") + ".</p>" : '<p class="live">No deals written up yet. Add them on the Markets page.</p>'; }
    return "";
  }
  function showQ() {
    clearInterval(D.timer); D.revealed = false;
    var box = $("#qbox");
    if (!D.queue.length) { box.innerHTML = '<div class="empty">No questions match these filters.</div>'; return; }
    if (D.i >= D.queue.length) {
      box.innerHTML = '<div class="qcard"><div class="qbody"><div class="qtext">Round done.</div><p>' + D.queue.length + ' questions. Your weakest ones come first next round.</p><div class="row-btns"><button class="btn primary" id="again" type="button">Another round</button></div></div></div>';
      $("#again").addEventListener("click", function () { startDrill(false); }); renderMastery(); return;
    }
    var q = D.queue[D.i], rec = S.drill[q.id] || {};
    box.innerHTML = '<div class="qcard"><div class="qhead"><span>' + q.topic + ' · <span class="pill ' + q.level + '">' + (q.level === "club" ? "club level" : "your edge") + "</span></span><span>" + (D.i + 1) + " of " + D.queue.length + (rec.n ? " · seen " + rec.n + "x, last: " + rec.last : "") + "</span></div>" +
      '<div class="qbody"><div class="qtext">' + esc(q.q) + '</div><div class="timer" id="qt" aria-live="off">0:00</div><p class="small">Answer out loud before you reveal. Aim for under 90 seconds (2 minutes for walk-throughs).</p><div id="ans" hidden><div class="answer"><p>' + esc(q.a) + "</p>" + dynamicAnswer(q) + "</div></div></div>" +
      '<div class="qfoot" id="qfoot"><button class="btn primary" id="reveal" type="button">Reveal answer</button><button class="btn ghost" id="skip" type="button">Skip</button></div></div>';
    D.t0 = Date.now();
    var limit = /walk me through/i.test(q.q) ? 120 : 90;
    D.timer = setInterval(function () { var s = (Date.now() - D.t0) / 1000, t = $("#qt"); if (!t) return clearInterval(D.timer); t.textContent = mmss(s); t.classList.toggle("over", s > limit); }, 250);
    $("#reveal").addEventListener("click", function () {
      clearInterval(D.timer); $("#ans").hidden = false;
      $("#qfoot").innerHTML = '<span class="small" style="align-self:center">How did you do?</span><button class="btn" data-grade="got" type="button">Nailed it</button><button class="btn" data-grade="shaky" type="button">Shaky</button><button class="btn danger" data-grade="miss" type="button">Missed</button>';
      $$("[data-grade]").forEach(function (b) { b.addEventListener("click", function () { grade(q, b.dataset.grade); }); });
    });
    $("#skip").addEventListener("click", function () { D.i++; showQ(); });
  }
  function grade(q, g) {
    var r = S.drill[q.id] || { n: 0 }; r.n++; r.last = g; r.when = iso(T); S.drill[q.id] = r; save();
    D.i++; showQ(); renderMastery();
  }
  function renderMastery() {
    var el = $("#mastery"); if (!el) return;
    el.innerHTML = TOPICS.slice(1).map(function (t) {
      var qs = R.questions.filter(function (q) { return q.topic === t; }), got = qs.filter(function (q) { return (S.drill[q.id] || {}).last === "got"; }).length;
      return '<div class="m"><span>' + t + "</span>" + progressBar(got, qs.length, "nailed").replace('class="progress"', 'class="progress" style="font-size:11.5px"') + "</div>";
    }).join("");
  }
  function renderDrill(quick) {
    $("#p-drill").innerHTML =
      '<div class="tab"><span>4</span>Drill</div><h1 class="ph">Technical drill</h1>' +
      '<p class="lead">' + R.questions.length + ' questions that come up in club and early bank interviews, with model answers checked against M&amp;I and Wall Street Prep conventions. Answer out loud, then grade yourself honestly. Questions you miss come back first.</p>' +
      '<div class="filters" role="group" aria-label="Topic">' + TOPICS.map(function (t) { return '<button class="chip" type="button" data-topic="' + t + '" aria-pressed="' + (D.topic === t) + '">' + t + "</button>"; }).join("") + "</div>" +
      '<div class="filters" role="group" aria-label="Level"><button class="chip" type="button" data-level="all" aria-pressed="' + (D.level === "all") + '">Both levels</button><button class="chip" type="button" data-level="club" aria-pressed="' + (D.level === "club") + '">Club level</button><button class="chip" type="button" data-level="edge" aria-pressed="' + (D.level === "edge") + '">Your edge (sophomore level)</button></div>' +
      '<div id="qbox"></div><h2>Where you stand</h2><div class="mastery" id="mastery"></div>' +
      '<div class="row-btns"><button class="btn ghost" id="resetDrill" type="button">Reset drill history</button></div>' +
      '<p class="src"><b>Source:</b> question set drawn from the M&amp;I 400 guide, Wall Street Prep\'s interview guides and Glassdoor spring intern reports; answers written for this site and reviewed for accuracy. The "your edge" questions are sophomore and superday level.</p>';
    $$("[data-topic]").forEach(function (b) { b.addEventListener("click", function () { D.topic = b.dataset.topic; renderDrill(); }); });
    $$("[data-level]").forEach(function (b) { b.addEventListener("click", function () { D.level = b.dataset.level; renderDrill(); }); });
    $("#resetDrill").addEventListener("click", function () {
      var b = this; if (b.dataset.armed) { S.drill = {}; save(); renderDrill(); toast("Drill history cleared"); return; }
      b.dataset.armed = 1; b.textContent = "Click again to reset"; setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = "Reset drill history"; } }, 3000);
    });
    renderMastery(); startDrill(quick);
  }

  /* ---------- case writer ---------- */
  var PARTS = [["model", "Business model", 150], ["comp", "Competitors", 100], ["stock", "What drove the stock price", 100], ["call", "Long or short, with risks", 300], ["dd", "Further diligence", 50]];
  var CT = null;
  function blankCase() { return { id: uid(), company: "", parts: {}, secs: 0, running: false, started: null }; }
  function caseSecs(c) { return c.secs + (c.running && c.started ? (Date.now() - c.started) / 1000 : 0); }
  function renderCase() {
    if (!S.draft) S.draft = blankCase();
    var c = S.draft;
    $("#p-case").innerHTML =
      '<div class="tab"><span>5</span>Case writer</div><h1 class="ph">BIG-format practice case</h1>' +
      '<p class="lead">BIG\'s fall 2026 application was a name-blind, 700-word long/short case on one company, in these five parts. Write three before January. Pick a company, start the clock, and write it yourself.</p>' +
      '<div class="callout"><h3>No AI in here</h3><p>BIG disqualifies AI-written applications and says it may blacklist you from other clubs. The point of practicing is that the real one takes you one evening.</p></div>' +
      '<div class="card"><div class="casehead"><label class="f" style="flex:1 1 240px">Company<input id="caseCo" value="' + esc(c.company) + '" placeholder="e.g. a company you know well" autocomplete="off"></label>' +
      '<div class="row-btns"><span class="timer" id="caseT" style="font-size:24px">' + mmss(caseSecs(c)) + '</span><button class="btn" id="caseTimer" type="button">' + (c.running ? "Pause" : "Start clock") + "</button></div></div>" +
      PARTS.map(function (p) {
        var v = c.parts[p[0]] || "", n = words(v);
        return '<div class="casepart"><div class="lbl"><label for="cp-' + p[0] + '">' + p[1] + "</label><span>" + p[2] + ' words max</span></div><textarea id="cp-' + p[0] + '" data-part="' + p[0] + '" data-max="' + p[2] + '">' + esc(v) + '</textarea><div class="counter' + (n > p[2] ? " over" : "") + '" id="cc-' + p[0] + '">' + n + " / " + p[2] + "</div></div>";
      }).join("") +
      '<div class="row-btns" style="justify-content:space-between"><span class="total" id="caseTotal"></span><span class="row-btns"><button class="btn ghost" id="caseNew" type="button">Start over</button><button class="btn primary" id="caseSave" type="button">Save to my cases</button></span></div></div>' +
      "<h2>My cases</h2><div class=\"list\" id=\"caseList\"></div>" +
      '<p class="src"><b>Source:</b> BIG fall 2026 application document (five questions and word limits; the long/short section weighted most). Drafts save in this browser as you type.</p>';
    updateTotal();
    $("#caseCo").addEventListener("input", function () { c.company = this.value; save(); });
    $$("[data-part]").forEach(function (ta) {
      ta.addEventListener("input", function () {
        c.parts[ta.dataset.part] = ta.value; save();
        var n = words(ta.value), mx = +ta.dataset.max, cc = $("#cc-" + ta.dataset.part);
        cc.textContent = n + " / " + mx; cc.classList.toggle("over", n > mx); updateTotal();
      });
    });
    $("#caseTimer").addEventListener("click", function () {
      if (c.running) { c.secs = caseSecs(c); c.running = false; c.started = null; } else { c.running = true; c.started = Date.now(); }
      save(); this.textContent = c.running ? "Pause" : "Start clock";
    });
    clearInterval(CT); CT = setInterval(function () { var t = $("#caseT"); if (!t) return clearInterval(CT); t.textContent = mmss(caseSecs(S.draft)); }, 500);
    $("#caseNew").addEventListener("click", function () {
      var b = this; if (b.dataset.armed || !totalWords()) { S.draft = blankCase(); save(); renderCase(); return; }
      b.dataset.armed = 1; b.textContent = "Click again to discard this draft"; setTimeout(function () { if (b.isConnected) { delete b.dataset.armed; b.textContent = "Start over"; } }, 3000);
    });
    $("#caseSave").addEventListener("click", function () {
      if (!c.company.trim()) { toast("Add the company name first"); $("#caseCo").focus(); return; }
      if (!totalWords()) { toast("Write something first"); return; }
      c.secs = caseSecs(c); c.running = false; c.started = null;
      var copy = JSON.parse(JSON.stringify(c)); copy.saved = iso(T); copy.words = totalWords();
      var ix = S.cases.findIndex(function (x) { return x.id === copy.id; });
      if (ix >= 0) S.cases[ix] = copy; else S.cases.unshift(copy);
      S.draft = blankCase(); save(); renderCase(); toast("Saved to My cases");
    });
    renderCaseList();
  }
  function totalWords() { return PARTS.reduce(function (s, p) { return s + words(S.draft.parts[p[0]]); }, 0); }
  function updateTotal() { var n = totalWords(), el = $("#caseTotal"); if (el) { el.textContent = n + " / 700 words total"; el.style.color = n > 700 ? "var(--bad)" : ""; } }
  function renderCaseList() {
    var el = $("#caseList");
    el.innerHTML = S.cases.length ? S.cases.map(function (c) {
      return '<div class="item"><span><b>' + esc(c.company) + '</b> <span class="meta">' + nice(c.saved) + " · " + c.words + " words · " + mmss(c.secs) + '</span></span><span class="row-btns"><button class="btn" data-open="' + c.id + '" type="button">Open</button><button class="btn danger" data-del="' + c.id + '" type="button">Delete</button></span></div>';
    }).join("") : '<div class="empty">No saved cases yet. Three before January is the target.</div>';
    $$("[data-open]", el).forEach(function (b) { b.addEventListener("click", function () { var c = S.cases.find(function (x) { return x.id === b.dataset.open; }); S.draft = JSON.parse(JSON.stringify(c)); S.draft.running = false; save(); renderCase(); window.scrollTo(0, 0); }); });
    $$("[data-del]", el).forEach(function (b) { b.addEventListener("click", function () {
      if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Confirm delete"; return; }
      S.cases = S.cases.filter(function (x) { return x.id !== b.dataset.del; }); save(); renderCaseList();
    }); });
  }

  /* ---------- tracker ---------- */
  var ORGS = ["BIG", "UBG", "BFC", "UFA|UMCG", "Beta Alpha Psi", "Bank or firm", "Other"];
  var STATUSES = ["To contact", "Emailed", "Followed up", "Chatted", "Thanked"];
  var STATUS_STYLE = { "To contact": "u", "Emailed": "p", "Followed up": "p", "Chatted": "c", "Thanked": "c" };
  var TF = "All";
  function renderTracker() {
    $("#p-tracker").innerHTML =
      '<div class="tab"><span>6</span>Chat tracker</div><h1 class="ph">Coffee chats are part of the interview</h1>' +
      '<p class="lead">The target is at least two chats with members of each club before rush week, plus Berkeley alumni at banks. Log everyone here and set a next-touch date so follow-ups surface on the Today page.</p>' +
      '<div class="tombs" id="clubCounts"></div>' +
      '<form class="card form" id="addContact" autocomplete="off"><h3>Add a person</h3><div class="fields">' +
      '<label class="f">Name<input id="cName" required></label>' +
      '<label class="f">Club or firm<select id="cOrg">' + ORGS.map(function (o) { return "<option>" + o + "</option>"; }).join("") + "</select></label>" +
      '<label class="f">Firm or role<input id="cWhere" placeholder="e.g. Evercore SF, BIG analyst"></label>' +
      '<label class="f">Status<select id="cStatus">' + STATUSES.map(function (o) { return "<option>" + o + "</option>"; }).join("") + "</select></label>" +
      '<label class="f">Next touch<input type="date" id="cNext"></label></div>' +
      '<label class="f">Notes (what they said, what to follow up on)<textarea id="cNotes" style="min-height:60px"></textarea></label>' +
      '<div class="row-btns"><button class="btn primary" type="submit">Add</button><span class="small">Stays in this browser. Use Export on the left to back it up.</span></div></form>' +
      '<div class="filters" role="group" aria-label="Filter by status">' + ["All"].concat(STATUSES).map(function (s) { return '<button class="chip" type="button" data-tf="' + s + '" aria-pressed="' + (TF === s) + '">' + s + "</button>"; }).join("") + "</div>" +
      '<div id="contacts"></div>' +
      "<h2>Run each chat like this</h2>" +
      '<ol class="script"><li>Spend 15 to 20 minutes on their LinkedIn and the club\'s site first. Know their major, their internship and what the club did last semester.</li><li>Show up early. Plan for about 20 minutes.</li><li>Ask about them: why they joined, what the training is actually like, what they\'d do differently as a freshman. Generic questions ("what\'s the club about?") are the most common mistake.</li><li>Let your knowledge show through your questions instead of a speech. "I\'ve been building DCFs over break. Does the analyst program go into LBOs?" works. Reciting your prep doesn\'t.</li><li>Near the end, ask one small thing: who else they\'d suggest you talk to.</li><li>Send a thank-you within 24 hours that mentions something specific they said. Log it here.</li></ol>' +
      '<div class="grid2"><div class="card"><h3>Have these ready, word for word</h3><p class="small">Why banking (60 seconds). Why this club, different for each one. Walk me through your resume (2 minutes). A success, a failure and a time you led (30 seconds each), built on your strongest real finance or business experience.</p></div>' +
      '<div class="card"><h3>Cold emails to alumni</h3><p class="small">Find names on LinkedIn, then email. Five sentences or fewer: who you are, the Berkeley tie, why them, a soft ask for a short call, no proposed times. A 5 to 10% reply rate is normal per M&amp;I. Follow up after a week, two or three times, then move on.</p></div></div>' +
      '<p class="src"><b>Source:</b> Daily Cal, "A field guide to Berkeley\'s coffee chat habitat" (Aug 27, 2026); UFA|UMCG ("we take coffee chats seriously"); M&amp;I networking guide and email template; r/berkeley "How to ace coffee chats/social rounds."</p>';
    $("#addContact").addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cName").value.trim(); if (!name) return;
      S.contacts.unshift({ id: uid(), name: name, org: $("#cOrg").value, where: $("#cWhere").value.trim(), status: $("#cStatus").value, next: $("#cNext").value, notes: $("#cNotes").value.trim(), added: iso(T) });
      save(); this.reset(); renderContacts(); refreshCounts(); toast("Added " + name); $("#cName").focus();
    });
    $$("[data-tf]").forEach(function (b) { b.addEventListener("click", function () { TF = b.dataset.tf; $$("[data-tf]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); renderContacts(); }); });
    renderContacts();
  }
  function renderContacts() {
    $("#clubCounts").innerHTML = ["BIG", "UBG", "BFC", "UFA|UMCG"].map(function (o) {
      var cs = clubChats(o), d = cs.filter(function (x) { return x.status === "Chatted" || x.status === "Thanked"; }).length;
      return '<div class="tomb" style="gap:6px"><div class="name" style="font-size:19px">' + o + "</div>" + progressBar(Math.min(d, 2), 2, "chats toward 2") + '<span class="small">' + cs.length + " people logged</span></div>";
    }).join("");
    var list = S.contacts.filter(function (c) { return TF === "All" || c.status === TF; });
    var el = $("#contacts");
    if (!list.length) { el.innerHTML = '<div class="empty">' + (S.contacts.length ? "Nobody with this status." : "Nobody logged yet. Start with one member from each club.") + "</div>"; return; }
    el.innerHTML = '<div class="tablebox"><table class="trk"><thead><tr><th>Name</th><th>Club or firm</th><th>Status</th><th>Next touch</th><th>Notes</th><th></th></tr></thead><tbody>' +
      list.map(function (c) {
        var due = c.next && day(c.next) <= T && c.status !== "Thanked";
        return "<tr><td><b>" + esc(c.name) + "</b></td><td>" + esc(c.org) + (c.where ? '<br><span class="small">' + esc(c.where) + "</span>" : "") + '</td><td><select data-st="' + c.id + '" aria-label="Status for ' + esc(c.name) + '">' + STATUSES.map(function (s) { return "<option" + (s === c.status ? " selected" : "") + ">" + s + "</option>"; }).join("") + "</select></td>" +
          '<td><input type="date" data-nx="' + c.id + '" value="' + esc(c.next || "") + '" aria-label="Next touch for ' + esc(c.name) + '" style="font:inherit;font-size:13px;border:1px solid var(--rule);background:var(--paper);color:var(--ink);padding:3px 4px;border-radius:3px">' + (due ? '<br><span class="due">due</span>' : "") + "</td>" +
          '<td style="min-width:200px">' + esc(c.notes) + '</td><td><button class="btn danger" data-rm="' + c.id + '" type="button">Remove</button></td></tr>';
      }).join("") + "</tbody></table></div>";
    $$("[data-st]", el).forEach(function (s) { s.addEventListener("change", function () { var c = S.contacts.find(function (x) { return x.id === s.dataset.st; }); c.status = s.value; save(); renderContacts(); refreshCounts(); }); });
    $$("[data-nx]", el).forEach(function (s) { s.addEventListener("change", function () { var c = S.contacts.find(function (x) { return x.id === s.dataset.nx; }); c.next = s.value; save(); renderContacts(); }); });
    $$("[data-rm]", el).forEach(function (b) { b.addEventListener("click", function () {
      if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Confirm"; return; }
      S.contacts = S.contacts.filter(function (x) { return x.id !== b.dataset.rm; }); save(); renderContacts(); refreshCounts();
    }); });
  }

  /* ---------- markets ---------- */
  function sparkline(key, label, unit) {
    var pts = S.market.filter(function (m) { return m[key] !== "" && !isNaN(parseFloat(m[key])); }).sort(function (a, b) { return a.date < b.date ? -1 : 1; }).slice(-30);
    if (pts.length < 2) return '<div class="card"><h3>' + label + '</h3><p class="small">Log two or more days to see the trend.</p></div>';
    var vals = pts.map(function (p) { return parseFloat(p[key]); }), lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
    if (hi === lo) { hi += 1; lo -= 1; }
    var W = 320, H = 120, pl = 6, pr = 6, pt = 14, pb = 18;
    var x = function (i) { return pl + i * (W - pl - pr) / (pts.length - 1); }, y = function (v) { return pt + (hi - v) * (H - pt - pb) / (hi - lo); };
    var line = vals.map(function (v, i) { return (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1); }).join(" ");
    var area = line + " L" + x(vals.length - 1).toFixed(1) + " " + (H - pb) + " L" + x(0).toFixed(1) + " " + (H - pb) + " Z";
    var last = vals[vals.length - 1];
    return '<div class="card"><h3>' + label + ' <span class="small" style="font-family:var(--mono)">' + last + unit + '</span></h3><svg class="spark" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + label + " over the last " + pts.length + ' logged days"><path class="area" d="' + area + '"/><line class="axis" x1="' + pl + '" x2="' + (W - pr) + '" y1="' + (H - pb) + '" y2="' + (H - pb) + '"/><path class="line" d="' + line + '"/><circle cx="' + x(vals.length - 1).toFixed(1) + '" cy="' + y(last).toFixed(1) + '" r="3.5" fill="var(--input)"/>' +
      '<text x="' + pl + '" y="10">high ' + hi.toFixed(2).replace(/\.00$/, "") + '</text><text x="' + pl + '" y="' + (H - 4) + '">' + nice(pts[0].date) + '</text><text x="' + (W - pr) + '" y="' + (H - 4) + '" text-anchor="end">' + nice(pts[pts.length - 1].date) + "</text></svg></div>";
  }
  function renderMarkets() {
    var todayRec = S.market.find(function (m) { return m.date === iso(T); }) || {};
    var rows = S.market.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 14);
    $("#p-markets").innerHTML =
      '<div class="tab"><span>7</span>Markets and deals</div><h1 class="ph">Morning numbers and three deals</h1>' +
      '<p class="lead">Club interviewers ask where the S&amp;P 500 and the 10-year are, and for a deal you\'ve followed. Log the numbers every morning from <a href="https://execsum.co">Exec Sum</a> or <a href="https://www.axios.com/newsletters/axios-pro-rata">Axios Pro Rata</a>, and build three deals you can explain in 60 seconds.</p>' +
      '<form class="card form" id="mForm"><h3>Log a day <span class="streak small">streak: ' + streak() + " days</span></h3><div class=\"fields\">" +
      '<label class="f">Date<input type="date" id="mDate" value="' + iso(T) + '" required></label>' +
      '<label class="f">S&amp;P 500<input id="mSpx" inputmode="decimal" value="' + esc(todayRec.spx || "") + '" placeholder="index level"></label>' +
      '<label class="f">10-year yield (%)<input id="mTen" inputmode="decimal" value="' + esc(todayRec.ten || "") + '" placeholder="e.g. 4.1"></label>' +
      '<label class="f">Fed funds range<input id="mFed" value="' + esc(todayRec.fed || "") + '" placeholder="e.g. 3.50 to 3.75%"></label></div>' +
      '<label class="f">One deal or headline, one line<input id="mDeal" value="' + esc(todayRec.deal || "") + '" placeholder="Who bought whom, for how much, why"></label>' +
      '<div class="row-btns"><button class="btn primary" type="submit">Save day</button></div></form>' +
      '<div class="grid2">' + sparkline("spx", "S&amp;P 500", "") + sparkline("ten", "10-year yield", "%") + "</div>" +
      (rows.length ? '<div class="tablebox"><table style="min-width:520px"><thead><tr><th>Date</th><th>S&amp;P</th><th>10Y</th><th>Fed funds</th><th>Deal</th><th></th></tr></thead><tbody>' + rows.map(function (m) { return '<tr><td class="num">' + nice(m.date) + '</td><td class="num">' + esc(m.spx) + '</td><td class="num">' + esc(m.ten) + '</td><td class="num">' + esc(m.fed) + "</td><td>" + esc(m.deal) + '</td><td><button class="btn danger" data-mrm="' + m.date + '" type="button">Delete</button></td></tr>'; }).join("") + "</tbody></table></div>" : "") +
      "<h2>Your three deals</h2><p>Pick deals that closed in the past year with public filings. A guide on discussing deals argues one deal studied closely beats several headlines.</p>" +
      '<div class="grid2">' + S.deals.map(function (d, i) {
        var f = function (k, lab, ph, ta) { return '<label class="f">' + lab + (ta ? "<textarea data-deal=\"" + i + '" data-dk="' + k + '" placeholder="' + ph + '" style="min-height:64px">' + esc(d[k] || "") + "</textarea>" : '<input data-deal="' + i + '" data-dk="' + k + '" value="' + esc(d[k] || "") + '" placeholder="' + ph + '">') + "</label>"; };
        return '<div class="card form"><h3>Deal ' + (i + 1) + "</h3>" + '<div class="fields">' + f("buyer", "Buyer", "") + f("target", "Target", "") + f("price", "Price", "$ and premium") + f("multiple", "EV/EBITDA", "e.g. 14x") + f("how", "Cash or stock", "") + "</div>" + f("why", "Why they did it", "The strategic logic in two sentences", 1) + f("risks", "What could go wrong", "Regulators, integration, overpaying", 1) + f("view", "Your view", "Would you have done it?", 1) + "</div>";
      }).join("") + "</div>" +
      '<p class="src"><b>Source:</b> market questions from Glassdoor spring intern interview reports and a reported Morgan Stanley summer analyst question on the 10-year; deal format from M&amp;I and ibinterviewquestions.com. Saved in this browser.</p>';
    $("#mForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var rec = { date: $("#mDate").value, spx: $("#mSpx").value.trim().replace(/,/g, ""), ten: $("#mTen").value.trim().replace(/%/g, ""), fed: $("#mFed").value.trim(), deal: $("#mDeal").value.trim() };
      if (!rec.date) return;
      if (!rec.spx && !rec.ten) { toast("Add at least the S&P or the 10-year"); return; }
      S.market = S.market.filter(function (m) { return m.date !== rec.date; }); S.market.push(rec); save(); renderMarkets(); toast("Saved " + nice(rec.date));
    });
    $$("[data-mrm]").forEach(function (b) { b.addEventListener("click", function () {
      if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Confirm"; return; }
      S.market = S.market.filter(function (m) { return m.date !== b.dataset.mrm; }); save(); renderMarkets();
    }); });
    $$("[data-deal]").forEach(function (inp) { inp.addEventListener("input", function () { S.deals[+inp.dataset.deal][inp.dataset.dk] = inp.value; save(); }); });
  }

  function renderResources() {
    $("#p-resources").innerHTML =
      '<div class="tab"><span>8</span>Resources</div><h1 class="ph">What to use, and who vouches for it</h1>' +
      '<p class="lead">Required spend is $173: the Wall Street Prep accounting and Excel crash courses ($39 each) and Rosenbaum &amp; Pearl ($95). Everything else is free or optional.</p>' +
      '<div class="tablebox"><table><thead><tr><th>For</th><th>Pick</th><th>Cost</th><th>Who backs it</th><th>Catch</th></tr></thead><tbody>' +
      R.resources.map(function (r) { return '<tr><td class="cat">' + r[0] + "</td><td>" + r[1] + '</td><td class="num">' + r[2] + "</td><td>" + esc(r[3]) + "</td><td>" + esc(r[4]) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      '<p class="small">Skipped on purpose: CFI\'s FMVA (about $497 a year), WSP Premium ($499) and Peak Frameworks ($297, called "surface level" on WSO). None of them are graded at club rush.</p>' +
      "<h2>Where Reddit and WSO break from the usual advice</h2>" +
      '<div class="vs"><div class="hd"><p>The usual advice</p><p>What forum posters say</p></div>' + R.vs.map(function (v) { return "<div><p>" + v[0] + "</p><p>" + v[1] + "</p></div>"; }).join("") + "</div>" +
      '<p class="src"><b>Source:</b> vendor pricing pages checked Oct 19, 2026. Reddit evidence comes from search snippets of the linked threads (Reddit blocked direct reading, so vote counts are missing); WSO threads were read in full.</p>' +
      '<h2 id="sources">All sources</h2><div class="sources">' + R.sources.map(function (s) { return '<a href="' + s[0] + '">' + s[1] + "</a>"; }).join("") + "</div>";
  }

  function renderAfter() {
    $("#p-after").innerHTML =
      '<div class="tab"><span>9</span>After rush</div><h1 class="ph">Bank programs open to freshmen, Jan to Apr 2027</h1>' +
      '<div class="tablebox"><table style="min-width:560px"><thead><tr><th>Program</th><th>Timing</th><th>What it is</th><th>Status</th></tr></thead><tbody>' +
      R.programs.map(function (p) { return "<tr><td>" + (p[0] ? '<a href="' + p[0] + '">' + p[1] + "</a>" : p[1]) + '</td><td class="num">' + p[2] + "</td><td>" + esc(p[3]) + '</td><td><span class="pill ' + p[4] + '">' + { c: "confirmed", p: "projected", u: "unverified" }[p[4]] + "</span></td></tr>"; }).join("") + "</tbody></table></div>" +
      "<p>JPMorgan, BofA, Morgan Stanley, Moelis, UBS, Barclays and RBC run their early programs for sophomores, so those are fall 2027 targets. For a summer 2027 internship, the realistic options are search funds, corporate development and three-to-four-banker boutiques, all reached by cold email. M&amp;I puts boutique volume at a few dozen to 50+ emails, five sentences each. Start in January, after rush.</p>" +
      "<p>Looking further out: the class of 2029 is recruiting for summer 2028 in its sophomore fall, with elite boutique portals opening in September and October. If that holds for the class of 2030, you need to be interview-ready for banks by about August 2027.</p>" +
      '<p class="src"><b>Source:</b> bank program pages linked above; Prospect Rock early insight list for 2027; Adventis class of 2029 timeline; M&amp;I "How to cold email for an internship"; Fortune (June 2026) and Revelio (Oct 2026) on junior hiring, which show cuts are discussed but none confirmed.</p>';
  }

  /* ---------- routing ---------- */
  var PAGES = { today: renderToday, plan: renderPlan, clubs: renderClubs, drill: renderDrill, "case": renderCase, tracker: renderTracker, markets: renderMarkets, resources: renderResources, after: renderAfter };
  function route() {
    var h = location.hash.replace("#", "") || "today";
    if (h === "sources") h = "resources";
    if (!PAGES[h]) h = "today";
    clearInterval(D.timer);
    $$(".page").forEach(function (p) { p.hidden = p.id !== "p-" + h; });
    $$("nav a[href^='#']").forEach(function (a) { if (a.getAttribute("href") === "#" + h) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    PAGES[h](route.quick);
    route.quick = false;
    if (h === "plan" && WI >= 0 && route.scrollWeek) { var w = $("#week" + WI); if (w) w.scrollIntoView({ block: "start" }); route.scrollWeek = false; }
    else if (location.hash.replace("#", "") === "sources") { var s = $("#sources"); if (s) s.scrollIntoView(); }
    else window.scrollTo(0, 0);
    var tb = $(".topbar nav a[aria-current]"); if (tb) tb.scrollIntoView({ inline: "center", block: "nearest" });
    document.title = (h === "today" ? "" : $("nav a[href='#" + h + "'] .l").textContent + " · ") + "Spring Rush 2027";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-quick]"); if (a) route.quick = true;
    var w = e.target.closest && e.target.closest("a[data-week]"); if (w) route.scrollWeek = true;
  });
  window.addEventListener("hashchange", route);

  /* ---------- backup ---------- */
  $("#exportBtn").addEventListener("click", function () {
    var blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "spring-rush-backup-" + iso(T) + ".json"; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  });
  $("#importBtn").addEventListener("click", function () { $("#importFile").click(); });
  $("#importFile").addEventListener("change", function () {
    var f = this.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      try { var data = JSON.parse(r.result); if (!data || typeof data !== "object" || !data.checks) throw 0; localStorage.setItem(KEY, JSON.stringify(data)); S = load(); route(); refreshCounts(); toast("Backup restored"); }
      catch (e) { toast("That file isn't a Spring Rush backup"); }
    };
    r.readAsText(f); this.value = "";
  });

  $("#topDays").textContent = daysTo(R.classesStart) > 0 ? daysTo(R.classesStart) + " days to rush" : "Rush season";
  route(); refreshCounts();
})();
