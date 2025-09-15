document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("article-terminal");

  const blocks = [
    [
      "> running /journal/reform-women...",
      "> loading foreword...",
      "",
      "foreword: I’m becoming too familiar with watching the sun rise, only to crash into sleep halfway through the day. My brain won’t switch off rather it loops fears, thoughts, and occasional nonsense that doesn’t deserve this much attention.",
      "This site is my remedy for restless nights: a place to set it all down, with the faint hope that someone out there might see something differently after reading.",
      "",
      "Reform UK and Women: A False Promise of Protection",
      "Content Warning: sexual violence, domestic violence",
      ""
    ],
    [
      "Right-wing messaging constantly coats itself with the claim that it is in “defence of women and children.” But for Reform UK and Nigel Farage, it is clear that this is only used as a weapon to villainise, other and create rising tensions within society.",
      "",
      "On abortion, Nigel Farage has called the UK’s 24-week abortion limit “utterly ludicrous,” not a neutral comment, but a statement signalling rollback. Then, when the House voted to decriminalise abortion and stop prosecuting women for ending their own pregnancies, all Reform MPs voted against it, with Farage abstaining.",
      "",
      "On asylum seekers, Reform laid out a plan to deport men, women and children to Taliban-controlled Afghanistan — a regime notorious for denying girls and women an education, stripping women of employment, and enforcing gender segregation by force."
    ],
    [
      "Instead, Reform UK invests in a large scale culture war which paints trans people and migrants as threats to women’s safety. The narrative is dishonest, and it is actively dangerous. The framing suggests that gender minorities or new arrivals are inherently suspect, when in reality the data paints a very different picture.",
      "",
      "According to the UK’s Office for National Statistics, about nine in ten cases of sexual violence are committed by someone the victim already knows — not by migrants or trans people scapegoated in political campaigns. This, of course, is not to invalidate those one in ten people assaulted by strangers. Their trauma is real, and their cases deserve serious attention."
    ],
    [
      "And while this culture war is pushed to the headlines, the deeper failures of the British state persist. 4.5 million children in the UK live in poverty. That’s one in three kids. Reform UK offers no meaningful solutions. At the same time, they continue to push nationalistic spectacles, like the recent “Raise the Flag” campaign, to distract from real crises.",
      "",
      "The issues are far deeper than just policy and rhetoric. At its core, Reform elevates dangerous, racist and misogynistic candidates. Farage’s praise of Andrew Tate, James McMurdock’s domestic abuse conviction, and repeated Reform campaign controversies only highlight how deeply this problem runs.",
      "",
      "If safety were truly the goal, Reform would be protecting freedoms rather than threatening them."
    ],
    [
      "",
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
      setTimeout(typeBlock, 1000); 
    }
  }

  typeBlock();
});
