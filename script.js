document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent;

  const browserMap = [
    { name: "Chrome (iOS)", pattern: /CriOS/i },
    { name: "Firefox (iOS)", pattern: /FxiOS/i },
    { name: "Edge (iOS)", pattern: /EdgiOS/i },
    { name: "Chrome", pattern: /Chrome/i, exclude: /Edg/i },
    { name: "Safari", pattern: /Safari/i, exclude: /Chrome/i },
    { name: "Firefox", pattern: /Firefox/i },
    { name: "Edge", pattern: /Edg/i }
  ];

  const osMap = [
    { name: "iOS", pattern: /iPhone|iPad|iPod/i },
    { name: "Android", pattern: /Android/i },
    { name: "Windows", pattern: /Windows NT/i },
    { name: "macOS", pattern: /Mac OS X/i },
    { name: "Linux", pattern: /Linux/i }
  ];

  const detect = (map) => {
    const found = map.find(entry =>
      entry.pattern.test(ua) && (!entry.exclude || !entry.exclude.test(ua))
    );
    return found ? found.name : null;
  };

  const browser = detect(browserMap);
  const os = detect(osMap) || "Unknown";

  const bootLines = [
    "> booting jayzsite...",
    "> status: stable",
    ...(browser ? [`> browser: ${browser}`] : []),
    `> operating system: ${os}`,
    "> last updated: 07-09-2025",
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
  "Boy turn that Clario on and go grab yourself a matcha.",
  "War. War never changes.",
  "The cake is a lie.",
  "You Died.",
  "Praise the sun.",
  "Stay a while and listen.",
  "I used to be an adventurer like you…",
  "I know what you’ve done.",
  "Reset the clock.",
  "You shouldn’t be here.",
  "This line intentionally left blank.",
  "my name Jeff",
  "Live, laugh, love",
  "i am once again asking",
  "now they’re after our souls",
  "you are not the user",
  "please do not tap the glass",
  "one more reboot should fix it",
  "hey u up? the site is",
  "consider touching grass, or don’t",
  "ran out of ideas. looping old ones.",
  "I saw corps strip farmers of water ... and eventually of land.",
  "It's never lupus"
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
    const shuffled = quotes.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 2);
    let q = 0;

    function showNextQuote() {
      if (q < selected.length) {
        terminal.innerHTML += selected[q] + "<br/>";
        q++;
        setTimeout(showNextQuote, 500);
      } else {
        terminal.innerHTML += `<span class="inline-link"><a href="">refresh for some more thoughts</a></span><br/><br/>`;
        setTimeout(() => showRunLink(0), 800);
      }
    }

    showNextQuote();
  }

  function showRunLink(index) {
    if (index < runLinks.length) {
      terminal.innerHTML += runLinks[index] + "<br/>";
      setTimeout(() => showRunLink(index + 1), 500);
    }
  }

  showBootLines();


});
// MEOW MEOW
// --- Cat Easter egg trigger ---
let clickCount = 0;
const terminalArea = document.querySelector(".terminal"); 

terminalArea.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 5) {
    const egg = document.getElementById("egg-cat");
    egg.innerHTML = `
      <img src="/img/cat.png" alt="Secret cat" style="max-width:400px;">
      <p>> how did you find this?</p>
    `;
    egg.style.display = "block";
  }
});
