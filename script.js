
document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "> booting jayzsite...",
    "> status: stable",
    "> last updated: 10-07-2025",
    "> welcome, guest user\n"
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
    "Welcome back to the sleep deprived podcast."
    "Boy turn that Clairo off and go grab yourself a beer."
    "Boy turn that Clario on and go grab yourself a matcha."
  ];

  const terminal = document.getElementById("terminal");
  const quoteDisplay = document.getElementById("quote");

  let i = 0;
  function showLine() {
    if (i < lines.length) {
      terminal.textContent += lines[i] + "\n";
      i++;
      setTimeout(showLine, 500);
    } else {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteDisplay.textContent = "\n" + quote;
    }
  }

  showLine();
});
