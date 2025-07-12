
document.addEventListener("DOMContentLoaded", () => {
  const bootLines = [
    "> booting jayzsite...",
    "> status: stable",
    "> last updated: 10-07-2025",
    "> welcome, guest user"
  ];

  const quotes = [
    "Bear with me — I don’t really understand how any of this is working.",
    "Not much here, but it’s mine.",
    "This site is mostly duct tape and instinct.",
    "I wanted a quiet place to put things. This is it.",
    "Welcome to my humble abode.",
    "This site runs on 99% bugs and 1% magic.",
    "Held together by hope, HTML, and a little bit of luck.",
    "If you find a typo, no you didn’t.",
    "Warning: May contain traces of broken links.",
    "Welcome! I’m glad you’re here—mostly because it means the site is still up.",
    "Fuelled by delusions.",
    "Welcome back to the sleep deprived podcast.",
    "Boy turn that Clairo off and go grab yourself a beer.",
    "Boy turn that Clario on and go grab yourself a matcha."
  ];

  const runLinks = [
    `<a class="inline-link" href="journal/journal.html">run /journal</a>`,
    `<a class="inline-link" href="about/about.html">run /about</a>`
  ];

  const terminal = document.getElementById("terminal");

  let i = 0;

  function showBootLines() {
    if (i < bootLines.length) {
      terminal.innerHTML += bootLines[i] + "<br/>";
      i++;
      setTimeout(showBootLines, 500);
    } else {
      terminal.innerHTML += "<br/>";
      setTimeout(showQuote, 500);
    }
  }

  function showQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    terminal.innerHTML += quote + "<br/><br/>";
    setTimeout(() => showRunLink(0), 800);
  }

  function showRunLink(index) {
    if (index < runLinks.length) {
      terminal.innerHTML += runLinks[index] + "<br/>";
      setTimeout(() => showRunLink(index + 1), 500);
    }
  }

  showBootLines();
});
