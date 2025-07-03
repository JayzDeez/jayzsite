
document.addEventListener("DOMContentLoaded", () => {
  const lines = [
    "> booting jayzsite...",
    "> status: stable",
    "> last updated: 2025-07-03",
    "> welcome, guest user\n"
  ];

  const quotes = [
    "Bear with me — I don’t really understand how any of this is working.",
    "Not much here, but it’s mine.",
    "This site is mostly duct tape and instinct.",
    "I wanted a quiet place to put things. This is it."
  ];

  const flowerOptions = [
    "      @@@\n   @@@@@@@@\n  @@ @@@@ @@\n   @@@@@@@@\n      @@@\n      ||\n      ||",
    "   ❁   \n  ❁❁❁  \n ❁❁❁❁❁ \n  ❁❁❁  \n   ❁   ",
    "   ✿\n ✿✿✿\n✿✿✿✿✿\n ✿✿✿\n   ✿"
  ];

  const terminal = document.getElementById("terminal");
  const flower = document.getElementById("flower");
  const quoteDisplay = document.getElementById("quote");

  let i = 0;
  function showLine() {
    if (i < lines.length) {
      terminal.textContent += lines[i] + "\n";
      i++;
      setTimeout(showLine, 500);
    } else {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      quoteDisplay.textContent = quote;

      const flowerArt = flowerOptions[Math.floor(Math.random() * flowerOptions.length)];
      flower.textContent = flowerArt;
    }
  }

  showLine();
});
