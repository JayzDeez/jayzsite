document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.getElementById("journal-terminal");

  function generateGlitch(length = 6) {
    const chars = "!@#£¥§%*";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  const realEntries = [
    {
      date: "08-07-2025",
      label: 'TEST2 – "Terminal goofy ahh"',
      summary: "robots, AI, coding",
      link: "/journal/entry-test2.html"
    },
    {
      date: "05-07-2025",
      label: 'TEST1 – "Late Nights and cofeefe"',
      summary: "caffeine, introspection, insomnia",
      link: "/journal/entry-test1.html"
    }
    {
      date: "28-08-2025",
      title: 'Reform UK and Women: A False Promise of Protection',
      summary: "yap, politics",
      link: "reform-women.html"
    },
  ];

  const glitchEntries = [
    {
      date: "29-10-1929",
      label: 'TEST0 – "corrupted"',
      summary: ["journal entry corrupted.", "attempting recovery...", "fail."]
    },
    {
      date: "02-12-1984",
      label: "REDACTED",
      summary: () => [
        "entry redacted",
        `last sync: [${generateGlitch()}] days ago`
      ]
    },
    {
      date: "19-10-1987",
      label: "ANOMALY DETECTED",
      summary: ["log flagged for review"]
    },
    {
      date: "02-07-1997",
      label: "NULL",
      summary: ["[this entry is no longer available]", "error: file not found"]
    },
    {
      date: "02-12-2001",
      label: "",
      summary: ["origin unknown", "cannot verify author"]
    },
    {
      date: "15-09-2008",
      label: "404",
      summary: ["entry existed briefly", "and then didn’t"]
    },
    {
      date: "20-04-2010",
      label: "ENTRY LOCKED",
      summary: ["insufficient clearance level", "access denied"]
    }
  ];

  const shuffledGlitches = glitchEntries.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 1);
  const combinedEntries = [...realEntries, ...shuffledGlitches];

  // Sort 
  combinedEntries.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("-").map(Number);
    const [dayB, monthB, yearB] = b.date.split("-").map(Number);
    return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
  });

  const lines = ["> running /journal...", "> loading personal logs...", ""];

  for (const entry of combinedEntries) {
    const labelOutput = entry.link
      ? `<a href="${entry.link}">${entry.label}</a>`
      : entry.label || "???";

    lines.push(`${entry.date}  [${labelOutput}]`);

    const summaries = typeof entry.summary === "function"
      ? entry.summary()
      : Array.isArray(entry.summary)
        ? entry.summary
        : [`> summary: ${entry.summary}`];

    lines.push(...summaries);
    lines.push(""); 
  }

  lines.push("> logs complete.");
  lines.push('<a class="inline-link" href="/index.html">run /home</a>');
  lines.push('<a class="inline-link" href="/about/about.html">run /about</a>');
  let i = 0;

  function typeLine() {
    if (i < lines.length) {
      terminal.innerHTML += lines[i] + "<br/>";
      i++;
      setTimeout(typeLine, 250);    }
  }

  typeLine();
});
