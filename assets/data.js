/* Content for Spring Rush 2027. Everything the pages render comes from here. */
window.RUSH = {
  classesStart: "2027-01-19",

  bar: [
    ["b1", "Walk through the three financial statements in under 2 minutes, and run any single change (say depreciation up $10) through all three without stopping."],
    ["b2", "Bridge equity value to enterprise value (cash, debt, preferred stock, noncontrolling interest) and say which multiples go with which."],
    ["b3", "Walk through a DCF in under 3 minutes, including the unlevered free cash flow formula and why WACC is the discount rate."],
    ["b4", "Say whether an all-stock deal is accretive or dilutive from the two P/E ratios, then do the EPS math by hand."],
    ["b5", "Finish a paper LBO with an IRR estimate in about 10 minutes."],
    ["b6", "Know that morning's S&amp;P 500 level, 10-year Treasury yield and Fed funds range, and explain why higher rates push valuations down."],
    ["b7", "Three deals from the past year, 60 seconds each: buyer, target, price and multiple, cash or stock, why they did it, and what could go wrong."],
    ["b8", "One stock pitch with a 2-minute and a 5-minute version."],
    ["b9", "Three practice cases written in BIG's exact format (700 words, timed, written by you with no AI)."],
    ["b10", "A 60-second \"why banking,\" a 2-minute resume walk-through, and 30-second success, failure and leadership stories."],
    ["b11", "At least two coffee chats with members of each target club before rush week, logged in your tracker."],
    ["b12", "One-page banking-format resume, with LinkedIn matching it line for line."]
  ],

  weeks: [
    { start: "2026-10-19", end: "2026-10-25", label: "Oct 19 to 25", title: "Accounting, day one", hrs: 30, tasks: [
      ["w1a", `Buy the <a href="https://www.wallstreetprep.com/self-study-programs/accounting-crash-course/">Wall Street Prep Accounting Crash Course</a> ($39, 7 chapters, about 7 hours). Do chapters 1 to 3.`],
      ["w1b", `Watch the first sessions of <a href="https://www.youtube.com/playlist?list=PLUkh9m2BorqmKaLrNBjKtFDhpdFdi8f7C">Damodaran's accounting playlist</a> for the intuition behind each statement.`],
      ["w1c", `Excel: unplug your mouse. Every time you reach for it, look up the shortcut on <a href="https://exceljet.net/shortcuts">ExcelJet</a>. That is the r/excel method.`],
      ["w1d", `Subscribe to <a href="https://execsum.co">Exec Sum</a>, <a href="https://www.bloomberg.com/account/newsletters/money-stuff">Money Stuff</a> and <a href="https://www.axios.com/newsletters/axios-pro-rata">Axios Pro Rata</a>. Start logging the S&amp;P 500, 10-year yield and one deal every morning on the <a href="#markets">Markets page</a>.`],
      ["w1e", `Add your first five people to the <a href="#tracker">Chat tracker</a>: upperclassmen in each club and Berkeley alumni at banks.`]
    ]},
    { start: "2026-10-26", end: "2026-11-01", label: "Oct 26 to Nov 1", title: "Finish accounting, start talking", hrs: 30, tasks: [
      ["w2a", "Accounting Crash Course chapters 4 to 7."],
      ["w2b", `Get the free <a href="https://mergersandinquisitions.com/400-questions-investment-banking/">M&amp;I 400 Questions guide</a>. Answer only the accounting section, out loud, recording yourself. Cut filler on replay.`],
      ["w2c", `Start your own flashcard deck. Import a <a href="https://quizlet.com/607256825">Quizlet 400-question deck</a> for speed, then add every question you miss. WSO's tip: put related concepts on one card instead of one-line answers.`],
      ["w2d", "Book your first two member chats (one BIG, one BFC). Fall is quiet, so members have time."]
    ]},
    { start: "2026-11-02", end: "2026-11-08", label: "Nov 2 to 8", title: "Link the three statements", hrs: 30, tasks: [
      ["w3a", `Watch Wall Street Prep's free <a href="https://www.youtube.com/watch?v=Rmi9fwkJjHw">94-minute three-statement model build</a> once, following along in Excel.`],
      ["w3b", "Rebuild it from a blank sheet with the video closed. A top WSO answer says the statements only clicked for people once they linked them in a model themselves."],
      ["w3c", `Run the accounting set in the <a href="#drill">Drill</a> until every answer is under 90 seconds.`],
      ["w3d", `Learn the <a href="https://www.wallstreetprep.com/knowledge/please-walk-me-through-the-three-financial-statements/">"walk me through the statements" answer</a> and get it under 2 minutes.`]
    ]},
    { start: "2026-11-09", end: "2026-11-15", label: "Nov 9 to 15", title: "Enterprise value and the DCF", hrs: 30, tasks: [
      ["w4a", `Read M&amp;I's <a href="https://mergersandinquisitions.com/enterprise-value-vs-equity-value/">enterprise value vs equity value</a>, then answer the EV section of the 400 guide out loud.`],
      ["w4b", `Get <a href="https://www.wiley.com/en-us/Investment+Banking%3A+Valuation%2C+LBOs%2C+M%26A%2C+and+IPOs%2C+3rd+Edition-p-9781119867876">Rosenbaum &amp; Pearl, 3rd edition</a> ($95, or check the library). Read the DCF chapter first. That is the order a bulge-bracket analyst gave in WSO's best-voted answer: DCF, comps, precedents, LBO, then M&amp;A.`],
      ["w4c", `Read M&amp;I's <a href="https://mergersandinquisitions.com/wacc-formula/">WACC guide</a>.`]
    ]},
    { start: "2026-11-16", end: "2026-11-22", label: "Nov 16 to 22", title: "Midterm week, light build", hrs: 15, tasks: [
      ["w5a", "MATH 16A midterm 2 is Tue Nov 17. Study first."],
      ["w5b", "After Tuesday: build your first DCF from a blank sheet for a company you actually use. Practice the \"walk me through a DCF\" answer to under 3 minutes."],
      ["w5c", "Flashcards daily, 20 minutes."]
    ]},
    { start: "2026-11-23", end: "2026-11-29", label: "Nov 23 to 29", title: "Comps, precedents, first mock", hrs: 25, tasks: [
      ["w6a", "Rosenbaum &amp; Pearl: the comparable companies and precedent transactions chapters. Build a five-company comps table for the company from your DCF."],
      ["w6b", `First mock interview, using the free <a href="https://www.reddit.com/r/FinancialCareers/comments/1atfzl3/">"IB Superday Interviewer" custom GPT</a> posted on r/FinancialCareers, or the <a href="#drill">Drill</a> in mock mode. Accounting, EV and DCF only.`],
      ["w6c", "Two more member chats (one UBG, one UFA|UMCG). Thanksgiving week is slow, so book them before."]
    ]},
    { start: "2026-11-30", end: "2026-12-06", label: "Nov 30 to Dec 6", title: "Markets, deal one, case one", hrs: 30, tasks: [
      ["w7a", `Watch Ray Dalio's <a href="https://www.youtube.com/watch?v=PHe0bXAIuk0">How the Economic Machine Works</a> (31 minutes). Then answer: what happens to a DCF when the 10-year yield rises?`],
      ["w7b", `Deal #1 on the <a href="#markets">Markets page</a>: a deal that closed in the past year with public filings. Price, EV/EBITDA, premium, cash or stock, the reason, and your opinion.`],
      ["w7c", `Practice case #1 in the <a href="#case">Case writer</a>. Timed, no AI.`]
    ]},
    { start: "2026-12-07", end: "2026-12-18", label: "Dec 7 to 18", title: "RRR and finals", hrs: 5, tasks: [
      ["w8a", "ECON 2 final Tue Dec 15, MATH 16A final Thu Dec 17. Grades first."],
      ["w8b", "Flashcards 20 minutes a day and the morning market log. Nothing else."]
    ]},
    { start: "2026-12-19", end: "2026-12-25", label: "Dec 19 to 25", title: "Merger math", hrs: 30, tasks: [
      ["w9a", `Watch M&amp;I's <a href="https://www.youtube.com/watch?v=4jmyDxVHrGE">merger model interview questions</a>, then read the Rosenbaum &amp; Pearl buy-side M&amp;A chapter.`],
      ["w9b", "Do accretion/dilution by hand on paper for three made-up deals: all stock, all cash, half and half."],
      ["w9c", "Send each member you've chatted with a short holiday update on what you've learned since. This is the touch that makes them remember you in January."]
    ]},
    { start: "2026-12-26", end: "2027-01-01", label: "Dec 26 to Jan 1", title: "The LBO", hrs: 30, tasks: [
      ["w10a", `Rosenbaum &amp; Pearl LBO chapters, then M&amp;I's <a href="https://www.youtube.com/watch?v=8BgVtn7Lo9U">LBO interview questions</a>.`],
      ["w10b", `Wall Street Prep's <a href="https://www.wallstreetprep.com/knowledge/paper-lbo/">JoeCo paper LBO</a> by hand.`],
      ["w10c", "Practice case #2 in the Case writer, on a different industry."]
    ]},
    { start: "2027-01-02", end: "2027-01-08", label: "Jan 2 to 8", title: "Speed and breadth", hrs: 30, tasks: [
      ["w11a", `Paper LBOs to 10 minutes using <a href="https://10xebitda.com/private-equity-paper-lbo/">10X EBITDA's three free examples</a> (easy to hard).`],
      ["w11b", `Work the free tier of <a href="https://ibvine.io">IB Vine</a> (283 questions). A WSO incoming analyst rates its off-guide questions because they make you apply concepts instead of reciting.`],
      ["w11c", "Deal #2. Finalize your one-page resume and match LinkedIn to it."],
      ["w11d", "Check every club's Instagram and site for spring dates and put them on your calendar the day they post."]
    ]},
    { start: "2027-01-09", end: "2027-01-15", label: "Jan 9 to 15", title: "Stock pitch and a real mock", hrs: 30, tasks: [
      ["w12a", `Read five write-ups on <a href="https://valueinvestorsclub.com">Value Investors Club</a> (free guest access, 45-day delay) to see how professionals frame a thesis. Then build yours with M&amp;I's <a href="https://mergersandinquisitions.com/stock-pitch-guide/">stock pitch guide</a>: thesis, catalysts, valuation, risks.`],
      ["w12b", "Rebuild the three-statement model from blank in under 60 minutes."],
      ["w12c", "Ask one upperclassman from your chats for a 20-minute mock interview."],
      ["w12d", `Mon Jan 11: <a href="https://www.bny.com/corporate/global/en/careers/students/pre-internship.html">BNY Freshman Jumpstart</a> registration opens. Register that day.`]
    ]},
    { start: "2027-01-16", end: "2027-01-24", label: "Jan 16 to 24", title: "Rush opens", hrs: 30, tasks: [
      ["w13a", "Classes start Tue Jan 19. Hit every table on Sproul and every info session. Sign every attendance sheet."],
      ["w13b", "Book chats with every club the hour they open (UBG uses Calendly; slots go fast)."],
      ["w13c", "BIG application: write it fresh, in its format, with no AI. Your two practice cases are why this takes one evening."],
      ["w13d", `Deal #3. If your mocks showed gaps, this is the week to buy the <a href="https://breakingintowallstreet.com/interview-guide-sign-up-options/">BIWS Interview Guide</a> ($197). Skip it if you're solid.`]
    ]},
    { start: "2027-01-25", end: "2027-01-31", label: "Jan 25 to 31", title: "Applications and first interviews", hrs: 30, tasks: [
      ["w14a", "UBG Meet the Org and themed nights, then its application. Interviews likely around Jan 31 to Feb 2."],
      ["w14b", "BFC short answers and interviews. Bring that morning's market numbers."],
      ["w14c", "Two mock interviews this week, mixing technical and market questions."],
      ["w14d", "Thank-you note within 24 hours of every chat and interview."]
    ]},
    { start: "2027-02-01", end: "2027-02-14", label: "Feb 1 to 14", title: "UFA|UMCG and the close", hrs: 25, tasks: [
      ["w15a", "UFA|UMCG chats, info session, the technical workshop and the application. Interviews likely around Feb 13."],
      ["w15b", `<a href="https://www.goldmansachs.com/careers/students/programs-and-internships/americas/possibilities-series">Goldman Possibilities Series</a> likely opens around Feb 1 (last cycle did). Apply the first day.`],
      ["w15c", "Social rounds: you're being judged on whether members want to spend 10 hours a week with you. Ask them about themselves."],
      ["w15d", "Final rehearsal: your story, three deals, the pitch, and 50 random questions out loud."]
    ]}
  ],

  clubs: [
    { name: "BIG", full: "Berkeley Investment Group", window: "~Jan 19 to Feb 1", status: "p",
      format: "Name-blind written case, then invite-only social and final rounds. Fall 2026 was a 700-word long/short on Best Buy in five parts, with the long/short call and risks (300 words) weighted most.",
      evidence: "12 Evercore, 6 Morgan Stanley, 4 JPMorgan, 4 Moelis, 3 Lazard and 1 Centerview banking placements on its careers page. Leans hedge fund overall.",
      move: "First- and second-years only, so you get three tries. Write three practice cases before January. The intern program asks 10 to 15 hours a week.",
      link: "https://www.berkeleyinvestment.group/faq" },
    { name: "UBG", full: "Undergraduate Business Group", window: "~Jan 26 to Feb 1", status: "p",
      format: "Meet the Org, themed nights, an application, then business-professional interviews at Chou Hall. Spring 2026 ran Jan 27 to Feb 2. Chats book through Calendly.",
      evidence: "The longest bank list on campus: Goldman, Morgan Stanley, Evercore, Centerview, Lazard and more every year since 2020. Summer 2027 so far: 3 Goldman, 2 Evercore.",
      move: "The top WSO answer on Berkeley clubs ranks the business frats (UBG among them) highest for banking. The same thread raises hazing claims about UBG that another poster disputed. Ask members directly.",
      link: "https://www.berkeleyubg.org/recruitment-timeline" },
    { name: "BFC", full: "Berkeley Finance Club", window: "Weeks 1 to 3 of classes", status: "p",
      format: "Short-answer application, then an interview with a behavioral half and a technical half. Fall 2026: chats Aug 26 to Sep 4, app Sep 5, interviews Sep 7 to 10.",
      evidence: "10 to 12 new analysts a semester, about 40 members. No firm list published. A WSO commenter says it \"places very well for IB\" (unverified).",
      move: "This is where your technicals show. Expect news questions too. 8 to 10 hours a week once you're in.",
      link: "https://www.berkeleyfinanceclub.org/join" },
    { name: "UFA|UMCG", full: "Undergraduate Finance Association", window: "~Jan 28 to Feb 14", status: "p",
      format: "Spring 2025: chats Jan 31 to Feb 12, info session Feb 11, technical workshop Feb 12 (same night the app was due), interviews Feb 13, social Feb 15. Open to all years.",
      evidence: "Runs the campus Investment Banking Forum with the Career Center (20+ firms). Says \"we take coffee chats seriously.\"",
      move: "WSO posters call it mostly a networking club, so pair it with one that teaches (unverified). Latest deadline of the four, so it's your backstop.",
      link: "https://ufaumcg.github.io/recruit" },
    { name: "Beta Alpha Psi", full: "Business fraternity", window: "Spring cycle not posted", status: "u",
      format: "Fall 2026: Meet the Chapter, a mixer, individual and group interviews, then a 10-week pledge program.",
      evidence: "Lists banking among its strengths. WSO's top answer groups it with the frats that place well.",
      move: "Second-tier option. Worth a chat if one of the four slips.",
      link: "https://www.berkeleybap.org/rushbap" }
  ],

  resources: [
    ["Accounting", `<a href="https://www.wallstreetprep.com/self-study-programs/accounting-crash-course/">WSP Accounting Crash Course</a>`, "$39", "The WSO alternative (an intro textbook for about 10 days, then build a model) takes longer", "Not included in WSP Premium, so don't buy Premium for it"],
    ["Intuition", `<a href="https://www.youtube.com/playlist?list=PLUkh9m2BorqmKaLrNBjKtFDhpdFdi8f7C">Damodaran, NYU (YouTube)</a>`, "Free", "r/CFA, r/ValueInvesting", "An r/FinancialCareers commenter calls it \"far too removed from practice\" for IB interviews. Use it for understanding and your stock pitch"],
    ["Valuation, M&amp;A, LBO", `<a href="https://www.wiley.com/en-us/Investment+Banking%3A+Valuation%2C+LBOs%2C+M%26A%2C+and+IPOs%2C+3rd+Edition-p-9781119867876">Rosenbaum &amp; Pearl, 3rd ed.</a>`, "$95", "WSO: the best way to learn nearly everything without paying for BIWS", "Another WSO post calls it \"far too in the weeds.\" Read DCF, comps, precedents, LBO; skim the rest"],
    ["Excel", `<a href="https://www.wallstreetprep.com/self-study-programs/excel-crash-course/">WSP Excel Crash Course</a>, <a href="https://exceljet.net">ExcelJet</a>, <a href="https://www.youtube.com/@LeilaGharani">Leila Gharani</a>`, "$39 / free", "r/FinancialCareers \"How did you learn Excel?\" names ExcelJet and Leila Gharani", "Macabacus is no longer free ($200/yr). On a Mac, forums split on whether Windows Excel in Parallels is worth it"],
    ["Question bank", `<a href="https://mergersandinquisitions.com/400-questions-investment-banking/">M&amp;I 400</a> plus <a href="https://ibvine.io">IB Vine</a>`, "Free / $30 mo", "WSO incoming analyst on IB Vine's off-guide questions", "A UCLA freshman on r/ucla found the full guides far beyond club level. Use the basic sections"],
    ["Flashcards", `Your own deck, seeded from <a href="https://quizlet.com/607256825">Quizlet</a>`, "Free", "WSO \"Anki deck for interview prep\": shared decks are \"just okay\"", "No well-reviewed shared IB deck exists. Build yours"],
    ["Paper LBO", `<a href="https://www.wallstreetprep.com/knowledge/paper-lbo/">WSP JoeCo</a>, <a href="https://10xebitda.com/private-equity-paper-lbo/">10X EBITDA</a>`, "Free", "Compiled in r/FinancialCareers practice-test threads", "A sophomore skill. It's your edge here, not a requirement"],
    ["Recruiting advice", `<a href="https://www.youtube.com/@rareliquid">Rareliquid (YouTube)</a>`, "Free", "r/FinancialCareers \"best finance YouTube channels\"; he was a JPM recruiting captain", "A Berkeley grad, so a good opener with Cal bankers. Skip his paid mentorship pitch"],
    ["News", `<a href="https://execsum.co">Exec Sum</a>, <a href="https://www.bloomberg.com/account/newsletters/money-stuff">Money Stuff</a>, <a href="https://www.axios.com/newsletters/axios-pro-rata">Axios Pro Rata</a>`, "Free", "r/FinancialCareers: Exec Sum is \"a quick read\"; Levine is \"one of the best writers on the street\"", "Check the library for a free WSJ pass before paying"],
    ["Podcasts", `<a href="https://www.acquired.fm">Acquired</a>, <a href="https://www.capitalallocators.com">Capital Allocators</a>, Invest Like the Best`, "Free", "A WSO PE intern says technicals clicked after these", "Commute only. Never instead of the build"],
    ["Stock pitch", `<a href="https://valueinvestorsclub.com">Value Investors Club</a> plus <a href="https://mergersandinquisitions.com/stock-pitch-guide/">M&amp;I guide</a>`, "Free", "r/ValueInvesting reads VIC to learn thesis framing", "Pitches matter more for BIG than for banking interviews"],
    ["If stuck", `<a href="https://breakingintowallstreet.com/interview-guide-sign-up-options/">BIWS Interview Guide</a> or <a href="https://www.adventiscg.com">Adventis</a>`, "$197 / ?", "WSO: BIWS is closest to real questions; an IB intern calls Adventis \"fantastic\" on a budget", "Adventis price unverified. Only buy in January if mocks show gaps"]
  ],

  vs: [
    ["Memorize all 400 questions.", "Club rounds are far below that level. Interviewers reword questions to catch memorizers, so answer in your own words and practice out loud."],
    ["Get a modeling certificate for your resume.", "FMVA or WSP certificates on a resume read as gimmicky and invite harder technicals. Learn from the course, then leave it off."],
    ["Download a shared Anki deck.", "No shared IB deck is any good. Build your own and put connected ideas on one card."],
    ["Get into the best club and you're set.", "A Berkeley alum in NYC M&amp;A says GPA and technicals now matter more than which club. UFA alone is networking, so pair it with one that trains you."],
    ["Start technicals sophomore year.", "A Harvard freshman on WSO was told a guide takes about a week and a modeling course about two, then to network early so the interest reads as real."],
    ["Read Rosenbaum front to back.", "Read DCF, comps, precedents and LBO first, M&amp;A last, and use the rest as reference."]
  ],

  programs: [
    ["https://www.bny.com/corporate/global/en/careers/students/pre-internship.html", "BNY Freshman Jumpstart", "Opens Jan 11", "Two virtual half-days in July, for May 2030 grads", "c"],
    ["https://www.goldmansachs.com/careers/students/programs-and-internships/americas/possibilities-series", "Goldman Possibilities Series", "~Feb 1 to Mar", "Spring workshops and divisional sessions for first-years", "p"],
    ["", "Citadel Discover", "Due ~Mar 5", "Two days in NYC. Trading-focused but a strong name", "u"],
    ["https://jobs.citi.com/earlycareers-programs-preinternships", "Citi Freshman Discovery", "Late Mar to Apr", "Three virtual days in May, any major", "p"],
    ["https://career.seo-usa.org/", "SEO Career", "Rolling, mid-Apr", "Training plus placement at partner firms. The listing now says \"all are welcome to apply\"", "p"]
  ],

  /* Drill bank. level: "club" = expect it at club rush; "edge" = sophomore level, your advantage. */
  questions: [
    { id:"q1", topic:"Accounting", level:"club", q:"Walk me through the three financial statements.",
      a:"The income statement shows revenue, expenses and net income over a period. The balance sheet is a snapshot of assets, liabilities and equity at one point in time, and assets always equal liabilities plus equity. The cash flow statement starts with net income, adjusts for non-cash items like depreciation and for changes in working capital (cash from operations), then shows investing activity like CapEx, which reduces cash, and financing activity like issuing or repaying debt and paying dividends, ending with the net change in cash. Net income flows to retained earnings on the balance sheet, and the ending cash on the cash flow statement becomes the cash line on the balance sheet." },
    { id:"q2", topic:"Accounting", level:"club", q:"How are the three statements linked?",
      a:"Net income from the income statement is the first line of the cash flow statement and also increases retained earnings in shareholders' equity. Non-cash expenses like depreciation are added back on the cash flow statement and reduce PP&E on the balance sheet. Changes in balance sheet working capital accounts show up in cash from operations. CapEx increases PP&E, debt issued or repaid changes the debt balance, and the cash flow statement's ending cash is the balance sheet's cash." },
    { id:"q3", topic:"Accounting", level:"club", q:"Depreciation goes up by $10. Walk me through the three statements. (Assume a 25% tax rate.)",
      a:"Income statement: operating income falls by $10, so pre-tax income falls by $10, taxes fall by $2.50, and net income falls by $7.50. Cash flow statement: net income is down $7.50, but you add back the extra $10 of depreciation because it's non-cash, so cash from operations and total cash are up $2.50. Balance sheet: cash up $2.50 and PP&E down $10, so assets are down $7.50. On the other side, retained earnings are down $7.50 from the lower net income, so it balances." },
    { id:"q4", topic:"Accounting", level:"club", q:"A company buys $10 of inventory with cash. What happens?",
      a:"Nothing on the income statement, because no sale or expense has happened yet. On the cash flow statement, the increase in inventory is an increase in working capital, so cash from operations falls by $10. On the balance sheet, inventory is up $10 and cash is down $10, so total assets don't change and it balances." },
    { id:"q5", topic:"Accounting", level:"club", q:"A company buys $100 of PP&E funded entirely with new debt. What happens at the moment of purchase?",
      a:"Income statement: nothing yet. Cash flow statement: CapEx is -$100 in investing activities and debt issuance is +$100 in financing, so net cash change is zero. Balance sheet: PP&E is up $100 and debt is up $100, so both sides rise by $100. Later periods would show depreciation and interest expense on the income statement." },
    { id:"q6", topic:"Accounting", level:"club", q:"If you could only look at one statement to judge a company's health, which would you pick?",
      a:"The cash flow statement, because it shows how much cash the business actually generates and where it goes, and it is harder to dress up with accounting choices than net income. If you could pick two, take the income statement and the beginning and ending balance sheets, because you can rebuild the cash flow statement from those." },
    { id:"q7", topic:"Accounting", level:"club", q:"What is working capital, and why does an increase reduce cash?",
      a:"Operating working capital is current operating assets (like accounts receivable and inventory) minus current operating liabilities (like accounts payable and deferred revenue). If it increases, the company has tied up more cash, for example by selling on credit and not yet collecting, or buying inventory it hasn't sold. That cash isn't available, so an increase in working capital is a use of cash on the cash flow statement." },
    { id:"q8", topic:"Accounting", level:"club", q:"What's the difference between accounts receivable and deferred revenue?",
      a:"Accounts receivable is revenue you've earned and recorded but haven't collected in cash yet, so it's an asset. Deferred revenue is cash you've collected before you've delivered the product or service, so it's a liability until you earn it. Subscription businesses usually carry a lot of deferred revenue." },
    { id:"q9", topic:"Valuation", level:"club", q:"What's the difference between enterprise value and equity value?",
      a:"Equity value is the value of the company that belongs to common shareholders; for a public company it's share price times diluted shares. Enterprise value is the value of the core operating business to all capital providers, including lenders and preferred holders. Two companies with identical operations but different debt levels should have similar enterprise values but different equity values." },
    { id:"q10", topic:"Valuation", level:"club", q:"How do you get from equity value to enterprise value?",
      a:"Start with equity value, add debt, preferred stock and noncontrolling interests, and subtract cash (and other non-operating assets). Debt and preferred are added because they are other claims on the business. Cash is subtracted because it isn't part of the core operations you're valuing. Noncontrolling interests are added because the parent consolidates 100% of the subsidiary's EBITDA, so EV has to include the part of the subsidiary it doesn't own." },
    { id:"q11", topic:"Valuation", level:"club", q:"Why do you subtract cash when calculating enterprise value?",
      a:"Enterprise value measures the core operating business. Cash is a non-operating asset, and its value is already in the equity value, so you remove it to isolate the operations. Strictly, you subtract only excess cash, since a business needs some minimum cash to operate. You'll hear 'the buyer gets the cash' as the reason, but the cleaner reason is that cash isn't part of core operations." },
    { id:"q12", topic:"Valuation", level:"club", q:"Which multiples use enterprise value and which use equity value?",
      a:"Match the numerator to the metric. Metrics available to all capital providers, before interest, pair with enterprise value: EV/Revenue, EV/EBITDA, EV/EBIT. Metrics that belong only to equity holders, after interest, pair with equity value: price-to-earnings (equity value over net income) and price-to-book. EV/Net Income would be a mismatch." },
    { id:"q13", topic:"Valuation", level:"club", q:"What are the main ways to value a company?",
      a:"Comparable companies (trading multiples of similar public companies), precedent transactions (multiples paid in past acquisitions of similar companies), and a DCF (present value of projected cash flows). Bankers also look at an LBO analysis as a floor for what a private equity buyer could pay, and sometimes the 52-week trading range." },
    { id:"q14", topic:"Valuation", level:"club", q:"Why do precedent transactions usually give a higher value than trading comps?",
      a:"Because acquisitions include a control premium. A buyer pays more than the current share price to take control of the company, and often to capture synergies, so multiples from past deals usually come in above the multiples public companies trade at day to day." },
    { id:"q15", topic:"DCF", level:"club", q:"Walk me through a DCF.",
      a:"Project the company's unlevered free cash flow for about five to ten years. Calculate a terminal value for everything after that, using either a perpetual growth rate or an exit multiple. Discount the projected cash flows and the terminal value back to today using the weighted average cost of capital and add them up. That gives you enterprise value. To get to equity value and a share price, subtract debt, add cash and so on, then divide by diluted shares." },
    { id:"q16", topic:"DCF", level:"club", q:"How do you calculate unlevered free cash flow?",
      a:"EBIT times (1 minus the tax rate), plus depreciation and amortization, minus capital expenditures, minus the increase in net working capital. It's 'unlevered' because it's before interest, so it is cash available to every capital provider." },
    { id:"q17", topic:"DCF", level:"club", q:"What is WACC and how do you calculate it?",
      a:"The weighted average cost of capital is the blended required return of everyone who funds the company. WACC = cost of equity times equity's share of capital, plus after-tax cost of debt times debt's share, plus cost of preferred times its share if there is any. Cost of equity usually comes from CAPM: the risk-free rate plus beta times the equity risk premium. Debt is tax-adjusted because interest is deductible, and the weights use market values, not book values." },
    { id:"q18", topic:"DCF", level:"club", q:"What are the two ways to calculate terminal value?",
      a:"The perpetuity growth method: final-year free cash flow times (1 + g), divided by (WACC minus g), where g is a long-run growth rate at or below long-run GDP growth or inflation, often around 2 to 3%. The exit multiple method: final-year EBITDA times a multiple taken from comps. Either way, discount the terminal value back to today, since it's a value as of the final projection year. Bankers often run both and check that the implied growth rate and implied multiple look reasonable against each other." },
    { id:"q19", topic:"DCF", level:"club", q:"Interest rates rise. What happens to a DCF valuation?",
      a:"The risk-free rate goes up, which raises the cost of equity (and usually the cost of debt), so WACC rises. A higher discount rate lowers the present value of every future cash flow, and it hits the terminal value hardest because those cash flows are the furthest out. With the perpetuity growth method, a higher WACC also widens the gap between WACC and g in the denominator, which cuts terminal value even more. So valuation falls, and it falls most for companies whose value sits far in the future, like high-growth tech." },
    { id:"q20", topic:"DCF", level:"edge", q:"Why use unlevered free cash flow and WACC instead of levered free cash flow?",
      a:"Unlevered free cash flow is available to all capital providers, so you discount it at a rate that blends all of their required returns (WACC) and get enterprise value. If you use levered free cash flow, which is after interest and debt payments, you discount at the cost of equity and get equity value directly. Unlevered is the default because it doesn't depend on the capital structure, which can change." },
    { id:"q21", topic:"M&A", level:"edge", q:"Walk me through an accretion/dilution analysis.",
      a:"Start with the buyer's and seller's projected net income. Combine them, then adjust: subtract the after-tax interest lost on any cash used, subtract after-tax interest on any new debt, add after-tax synergies, account for new amortization from the deal, and subtract after-tax transaction fees. Divide the combined net income by the buyer's new share count, which includes any shares issued to pay for the seller. Compare that pro forma EPS to the buyer's standalone EPS. Higher means accretive, lower means dilutive. A common follow-up is how much in synergies you'd need to break even." },
    { id:"q22", topic:"M&A", level:"edge", q:"In an all-stock deal, how can you tell quickly if it's accretive?",
      a:"Compare P/E ratios. If the buyer's P/E is higher than the P/E it is paying for the seller (purchase price over seller's earnings), the deal is accretive, because the buyer is using expensive currency to buy cheaper earnings. If the buyer's P/E is lower, it's dilutive. This ignores synergies and deal adjustments." },
    { id:"q23", topic:"M&A", level:"edge", q:"What's the cost of using cash, debt and stock to pay for an acquisition?",
      a:"Cash costs the interest it would have earned, after tax. Debt costs its interest rate, after tax. Stock costs the buyer's earnings yield, which is 1 divided by its P/E. Cash is usually cheapest, then debt, then stock. Compare each cost to the seller's yield (its earnings divided by the purchase price): if the cost of funding is lower than the seller's yield, the deal is accretive." },
    { id:"q24", topic:"M&A", level:"edge", q:"Why would a company do a deal that's dilutive?",
      a:"Because EPS in the first year isn't the whole story. The buyer may want the target's growth, technology, customers or market position; synergies may take a few years to show up; or the deal may block a competitor. A deal can be dilutive on day one and still create value over time." },
    { id:"q25", topic:"LBO", level:"edge", q:"Walk me through an LBO.",
      a:"A private equity firm buys a company using a lot of debt and a smaller equity check. You set the purchase price and the sources and uses of funds (how much debt and equity pay for the price and fees). Then you project the company's cash flows, use them to pay down debt over about five years, and assume an exit, usually at a multiple of EBITDA. Subtract the remaining net debt from the exit enterprise value to get exit equity value. Comparing that to the equity put in gives the money multiple and the IRR." },
    { id:"q26", topic:"LBO", level:"edge", q:"Why does using leverage increase returns in an LBO?",
      a:"The firm puts in less of its own money, so any gain in the company's value is spread over a smaller equity check. The company's cash flow pays down the debt, which shifts more of the enterprise value to the equity holders by the exit. Interest is also tax-deductible. Leverage only boosts returns if the business earns more on its assets than the after-tax cost of the debt. The tradeoff is risk: more debt means less room if the business struggles." },
    { id:"q27", topic:"LBO", level:"edge", q:"What makes a good LBO candidate?",
      a:"Stable, predictable cash flows that can service debt, low capital expenditure needs, a strong market position, a reasonable purchase price, room to improve margins, a solid management team, and low existing debt, tangible assets that can secure loans, and a realistic way to exit, like a sale or IPO." },
    { id:"q28", topic:"LBO", level:"edge", q:"Rough IRR: you double your money in five years. What's the IRR? What about tripling it in five?",
      a:"Doubling in five years is about 15% (precisely about 14.9%). Tripling in five years is about 25%. A useful anchor: doubling in three years is about 26%." },
    { id:"q29", topic:"Markets", level:"club", q:"Where are the S&P 500 and the 10-year Treasury yield today?",
      a:"Answer from your morning log, to the nearest round number, and say what's moving them this week. Interviewers care less about the decimal than about whether you follow the market at all.", dynamic:"market" },
    { id:"q30", topic:"Markets", level:"club", q:"Why do higher interest rates hurt growth stocks more than value stocks?",
      a:"Growth companies earn most of their cash flow far in the future, so more of their value sits in later years and in the terminal value. A higher discount rate shrinks distant cash flows much more than near ones, so their valuations are more sensitive to rates. Value companies earn more of their cash now." },
    { id:"q31", topic:"Markets", level:"club", q:"Tell me about a deal you've followed.",
      a:"Use the 60-second structure: who bought whom, for how much and at what multiple, cash or stock, why the buyer did it, what could go wrong (regulators, integration, overpaying), and your own view. Have three ready.", dynamic:"deal" },
    { id:"q32", topic:"Fit", level:"club", q:"Why investment banking?",
      a:"Keep it to about 60 seconds and make it specific to you: the real experience that pulled you toward finance, what you've done since to learn it (name the actual things: models built, deals followed), and what you want from the job (steep learning, deal exposure, working with companies). Avoid money and prestige. Write your own version and say it out loud until it's natural." },
    { id:"q33", topic:"Fit", level:"club", q:"Why this club?",
      a:"Name something only that club has: its training program, a specific event, a placement you care about, or something a member told you in a coffee chat (and name them). Generic answers are the most common miss here." },
    { id:"q34", topic:"Fit", level:"club", q:"Pitch me a stock.",
      a:"Recommendation first (long or short, and the target price). Then a sentence on what the company does, two or three reasons the market is wrong about it, the catalyst that will make the market notice, a quick valuation, and the main risk with what would make you change your mind. Have a 2-minute and a 5-minute version." }
  ],

  sources: [
    ["https://www.berkeleyinvestment.group/faq", "BIG FAQ"],
    ["https://www.berkeleyinvestment.group/careers", "BIG careers"],
    ["https://www.berkeleyinvestment.group/intern-program", "BIG intern program"],
    ["https://www.berkeleyubg.org/careers", "UBG careers"],
    ["https://www.berkeleyubg.org/recruitment-timeline", "UBG recruitment timeline"],
    ["https://www.berkeleyfinanceclub.org/join", "BFC join"],
    ["https://ufaumcg.github.io/recruit", "UFA|UMCG recruit"],
    ["https://web.archive.org/web/20250321205007/https://ufaumcg.github.io/recruit", "UFA|UMCG spring 2025 (archived)"],
    ["https://www.berkeleybap.org/rushbap", "Beta Alpha Psi rush"],
    ["https://registrar.berkeley.edu/wp-content/uploads/UCB_AcademicCalendar_2026-27_a11y.pdf", "Berkeley 2026-27 academic calendar"],
    ["https://www.dailycal.org/a-field-guide-to-berkeley-s-coffee-chat-habitat/article_2802e671-2ff2-4ba7-9be3-8860ee4db301.html", "Daily Cal coffee chat guide (Aug 2026)"],
    ["https://www.wallstreetoasis.com/forum/private-equity/best-finance-clubs-at-uc-berkeley-for-ibpe", "WSO: Best finance clubs at UC Berkeley for IB/PE (Aug 2026)"],
    ["https://www.wallstreetoasis.com/forum/investment-banking/how-to-really-learn-technicals", "WSO: How to really learn technicals"],
    ["https://www.wallstreetoasis.com/forum/investment-banking/what-info-from-rosenbaum-textbook-should-i-disregard-for-now", "WSO: Rosenbaum chapter order"],
    ["https://www.wallstreetoasis.com/forum/investment-banking/biws-guide-vs-wso-ib-guide", "WSO: BIWS guide vs WSO guide"],
    ["https://www.reddit.com/r/FinancialCareers/comments/18piyaa/", "r/FinancialCareers: best finance YouTube channels"],
    ["https://www.reddit.com/r/FinancialCareers/comments/xfugrb/", "r/FinancialCareers: how did you learn Excel"],
    ["https://www.reddit.com/r/FinancialCareers/comments/15opr3x/", "r/FinancialCareers: Exec Sum"],
    ["https://www.reddit.com/r/FinancialCareers/comments/1atfzl3/", "r/FinancialCareers: IB Superday Interviewer GPT"],
    ["https://www.reddit.com/r/FinancialCareers/comments/maekkj/", "r/FinancialCareers: free paper LBO tests"],
    ["https://www.reddit.com/r/ucla/comments/rgts5n/", "r/ucla: freshman on club interview level"],
    ["https://www.reddit.com/r/berkeley/comments/19eclgl/", "r/berkeley: how to ace coffee chats and social rounds"],
    ["https://engineering.virginia.edu/demystifying-investment-banking-engineers", "UVA: what bulge brackets actually ask"],
    ["https://mergersandinquisitions.com/investment-banking-email-template", "M&amp;I email template"],
    ["https://mergersandinquisitions.com/how-to-cold-email-for-an-internship/", "M&amp;I cold email for an internship"],
    ["https://prospectrockpartners.com/early-insight-programs-for-2027/", "Prospect Rock: early insight programs for 2027"],
    ["https://fortune.com/2026/06/07/banks-mass-workforce-cuts-ai-entry-level-jobs-junior-analysts/", "Fortune: banks and junior hiring (June 2026)"],
    ["https://www.reveliolabs.com/news/ai-and-work/ai-junior-bankers-hiring-data", "Revelio: junior banker hiring (Oct 2026)"]
  ]
};
