document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("article-terminal");

  const blocks = [
    [
      "> running /journal/reform-women...",
    ],
    [
      "> loading foreword...",
    ],
    [
      "",
      "> foreword: I’m becoming too familiar with watching the sun rise, only to crash into sleep halfway through the day. My brain won’t switch off rather it loops fears, thoughts, and occasional nonsense that doesn’t deserve this much attention.",
      "This site is my remedy for restless nights: a place to set it all down, with the faint hope that someone out there might see something differently after reading.",
      "",
    ],
    [
      "> Reform UK and Women: A False Promise of Protection",
      "",
      "<b>content warning: sexual violence, domestic violence</b>",
      ""
    ],
    [
      "Right-wing messaging constantly coats itself with the claim that it is in <i>“defence of women and children.”</i> But for Reform UK and Nigel Farage, it is clear that this is only used as a weapon to villainise, other and create rising tensions within society.",
      "",
      "On abortion, Nigel Farage has called the UK’s 24-week abortion limit “utterly ludicrous,” not a neutral comment, but a statement signalling rollback. Then, when the House voted to decriminalise abortion and stop prosecuting women for ending their own pregnancies, all Reform MPs voted against it, with Farage abstaining. A woman’s right to choose is not to be debated and sets a dangerous precedent if Reform is to do well in the next general election.",
      '<a href="https://news.sky.com/story/nigel-farage-says-it-is-utterly-ludicrous-to-allow-abortion-up-to-24-weeks-13375431" target="_blank">[source]</a>',
      "",
      "On asylum seekers, Reform laid out a plan to deport men, women and children to Taliban-controlled Afghanistan, which for those who don’t know, is a regime notorious for denying girls and women an education, stripping women of employment, and enforcing gender segregation by force. Suggesting such deportations under the guise of “protection” could not be further from safeguarding women and children.",
      '<a href="https://www.theguardian.com/politics/2025/aug/26/nigel-farage-plan-deport-asylum-seekers-scorn-from-legal-experts" target="_blank">[source]</a>'
    ],
    [
      "Instead, Reform UK invests in a large scale culture war which paints trans people and migrants as threats to women’s safety. The narrative is dishonest, and it is actively dangerous. The framing suggests that gender minorities or new arrivals are inherently suspect, when in reality the data paints a very different picture.",
      "",
      "According to the UK’s Office for National Statistics, across all sexual offences against women:",
      " • 15% of offenders were strangers",
      " • 36% were acquaintances",
      " • 22% were current or ex-intimate partners",
      " • 19% were other family members",
    ],
    [
      "",
      "Looking just at rape:",
      " • 8% committed by strangers",
      " • 46% by current or former partners",
      " • 26% by acquaintances",
      "",
      "(Percentages do not add up to 100 because some categories are omitted. See the source for the full breakdown.)",
      '<a href="https://www.nimblefins.co.uk/violence-against-women-statistics-uk?.com#sexualassault" target="_blank">[source]</a>',
      "",
      "This means that about nine in ten cases of sexual violence are committed by someone the victim already knows, not by migrants or trans people scapegoated in political campaigns. This, of course, is not to invalidate those one in ten people assaulted by strangers. Their trauma is real, and their cases deserve serious attention. But the overwhelming weight of evidence makes clear that the real issue lies much closer to home."
    ],
    [
      "And while this culture war is pushed to the headlines, the deeper failures of the British state persist. 4.5 million children in the UK live in poverty. That’s one in three kids which is a genuine threat to their safety, development, and futures, yet Reform offers no meaningful solutions. At the same time, they continue to push nationalistic spectacles, like the recent “Raise the Flag” campaign, to distract from the very real crises facing women and children today.",
      '<a href="https://www.theguardian.com/uk-news/2025/aug/20/row-grows-over-motives-behind-england-flag-campaign-far-right-racist" target="_blank">[source]</a>',
      "",
      "The issues are far deeper than just policy and rhetoric. At its core, Reform elevates dangerous, racist and misogynistic candidates. This is beyond an issue of manifesto and policy, but an issue with the very company they keep and the voices they amplify.",
      "",
    ],
    [
      "Nigel Farage himself set a worrying tone in June 2024 when he described Andrew Tate as an “important voice” for young men “feeling they aren’t allowed to be blokes,” even as Tate faced charges including rape and human trafficking. Farage refused to retract the comment, framing it as a gap in representation that Tate filled, a worrying validation of toxic masculinity from the party’s leader. He has since gone on to say he is not a Tate supporter, but notably has not apologised and has even doubled down on the points he made surrounding Tate.",
      '<a href="https://www.standard.co.uk/news/politics/nigel-farage-andrew-tate-clactononsea-the-guardian-romania-b1166076.html" target="_blank">[source]</a>',
      "",
      "Closer to home, James McMurdock, Reform’s MP for South Basildon & East Thurrock, was revealed to have a 2006 conviction for assaulting his ex-girlfriend, resulting in 21 days in a young offenders institution. Despite not disclosing this to voters, Reform UK defended him, with deputy leader Richard Tice calling it a “mistake” McMurdock had “learned from.” Critics rightly called out the hypocrisy of sidestepping a domestic violence record while claiming to champion women’s safety.",
      '<a href="https://www.theguardian.com/politics/2025/feb/01/reform-mp-james-mcmurdock-who-assaulted-woman-will-not-face-suspension-says-deputy-leader" target="_blank">[source]</a>',
      "",
      "Then there was a campaign stunt in Hertfordshire during the 2025 local elections, where Reform activists likened senior female Cabinet ministers to cows awaiting slaughter. It was dehumanising, misogynistic, and politically tone-deaf. Instead of condemning it outright, Farage brushed it off as a “lapse in taste,” claiming the party’s vetting process was adequate despite the glaring evidence to the contrary.",
      '<a href="https://paywallbuster.com/articles/?article=https%3A%2F%2Fwww.thetimes.com%2Fuk%2Fpolitics%2Farticle%2Freform-councils-uk-rhnb95t7t" target="_blank">[source]</a>',
      "",
    ],
    [
      "And from inside the ranks came another red flag: Georgie David, Reform’s candidate for West Ham & Beckton, quit the party in July 2024, stating she could not “be directly associated” with a group where “the vast majority of candidates are indeed racist, misogynistic and bigoted.” Faced with a leadership unwilling to address these issues, she chose to walk away.",
      '<a href="https://www.theguardian.com/politics/article/2024/jul/02/second-reform-candidate-quits-over-racism-and-misogyny" target="_blank">[source]</a>',
      "",
      "These examples expose a deeper pattern of consistent tolerance, even promotion, of misogyny, violence, and prejudice within Reform UK’s network."
      "",
      "⸻",
    ],
    [
      "",
      "TL;DR",
      "If Reform UK and Nigel Farage actually cared for women and children, they would invest in maternity protections, robust sex and consent education, mental health support, and poverty reduction. They would recognise that around nine in ten cases of sexual violence are committed by someone the victim already knows, and act on the cultural roots of toxic masculinity instead of scapegoating minorities.",
      "",
      "Instead, they offer abortion rollbacks, plans to deport women and children to Taliban-controlled Afghanistan, tolerance of candidates with histories of misogyny and violence, and endless flag-waving distractions. Farage’s praise of Andrew Tate, James McMurdock’s domestic abuse conviction, and repeated Reform campaign controversies only highlight how deeply this problem runs.",
      "",
      "If safety were truly the goal, Reform would be protecting freedoms rather than threatening them.",
      "",
    ],
    [
      "> logs complete.",
      '<a class="inline-link" href="/index.html">run /home</a>',
      '<a class="inline-link" href="/journal/journal.html">run /journal</a>',
      '<a class="inline-link" href="/about/about.html">run /about</a>'
    ]
  ];

  let blockIndex = 0;

  function typeBlock() {
    if (blockIndex < blocks.length) {
      terminal.innerHTML += blocks[blockIndex].join("<br/>") + "<br/><br/>";
      blockIndex++;
      setTimeout(typeBlock, 1200);
    }
  }

  typeBlock();
});
