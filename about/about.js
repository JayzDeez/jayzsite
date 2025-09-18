document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "> running /about...",
    "",
    "This little project started as boredom, but has slowly developed into something that I strangely care about. The concept of having a little slice of the internet being my thoughts and feelings is sort of surreal?",
    "",
    "It’s a weird thing to put into words, but seeing this blank page go from error 404, to a black screen with some text, and eventually into… well, whatever state it is in today has been strangely fulfilling.",
    "",
    "This site takes heavy inspiration from Fallout and I aimed to make it something you could come across as an archive you have accidentally found, reading this distant person’s thoughts.",
    "",
    "Of course, it’s also just cool that I can somewhat immortalise my pets, opinions and whatever else.",
    "",
     "For those wondering, the site is hosted freely and securely on <a href=\"https://github.com/JayzDeez/jayzsite\" target=\"_blank\">GitHub</a> with the domain name itself being about $10 (£7) for a year.",
    "Thank you for spending some time in my small virtual world <3",
    "",
    "- Jay, 2025",
    "",
    `<a class="inline-link" href="../index.html">run /home</a>`,
    `<a class="inline-link" href="../journal/journal.html">run /journal</a>`
  ];

  const output = document.getElementById("about-content");
  let i = 0;

  function writeLine() {
    if (i < lines.length) {
      output.innerHTML += lines[i] + "<br/>";
      i++;
      setTimeout(writeLine, 250);
    }
  }

  writeLine();
});
