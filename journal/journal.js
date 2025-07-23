document.addEventListener("DOMContentLoaded", () => {
  const realEntries = [
    {
      date: "10-07-2025",
      label: '[TEST1 – "Late Nights and Coffee"]',
      summary: "caffeine, introspection, insomnia"
    },
    {
      date: "08-07-2025",
      label: '[TEST2 – "???"]',
      summary: "robots, AI, coding"
    },
    {
      date: "05-07-2025",
      label: '[TEST3 – "No Thoughts"]',
      summary: "introspection"
    }
  ];

  const glitchEntries = [
    {
      date: "29-10-1929",
      label: "[REDACTED]",
      summary: "entry redacted\n> last sync: [GLITCH] days ago",
      glitch: true
    },
    {
      date: "02-12-1984",
      label: "[ENTRY LOCKED]",
      summary: "insufficient clearance level\n> access denied"
    },
    {
      date: "19-10-1987",
      label: '[TEST0 – "corrupted"]',
      summary: "journal entry corrupted.\n> attempting recovery...\n> fail."
    },
    {
      date: "02-07-1997",
      label: "[NULL]",
      summary: "[this entry is no longer available]\n> error: file not found"
    },
    {
      date: "02-12-2001",
      label: "[]",
      summary: "origin unknown\n> cannot verify author"
    },
    {
      date: "15-09-2008",
      label: "[404]",
      summary: "entry existed briefly\n> and then didn’t"
    },
    {
      date: "20-04-2010",
      label: "[ANOMALY DETECTED]",
      summary: "log flagged for review"
    },
    {
      date: "24-04-2013",
      label: "[SYS_ERR_0x27]",
      summary: "traceback overflow\n> system attempted reboot"
    }
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const terminal = document.getElementById("journal-terminal");
  const glitchSymbols = ["!", "?", "#", "£", "¥", "@", "&", "$"];

  function glitchText(length = 6) {
    return Array.from({length}, () => glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)]).join("");
  }

  let lines = [];
  lines.push("> running /journal...");
  lines.push("> loading personal logs...");
  lines.push("");

  const glitchesToShow = shuffle([...glitchEntries]).slice(0, 2);
  const allEntries = shuffle([...realEntries, ...glitchesToShow]);

  allEntries.forEach(entry => {
    lines.push(`${entry.date}  ${entry.label}`);
    if (entry.glitch) {
      lines.push(`> ${entry.summary.replace("[GLITCH]", glitchText())}`);
    } else {
      lines.push(`> summary: ${entry.summary}`);
    }
    lines.push("");
  });

  lines.push("> logs complete.");
  lines.push("> run /home");
  lines.push("> run /about");

  let i = 0;
  function typeLines() {
    if (i < lines.length) {
      terminal.innerHTML += lines[i] + "\n";
      i++;
      setTimeout(typeLines, 300);
    }
  }

  typeLines();
});
