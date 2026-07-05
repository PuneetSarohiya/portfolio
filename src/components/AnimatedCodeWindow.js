import React, { useEffect, useState } from "react";

const CODE_LINES = [
  { text: "const Portfolio = () => {", color: "#a370f7" },
  { text: "  const [status] = useState(", color: "#e7e9f5" },
  { text: "    'Open to work'", color: "#7ee787" },
  { text: "  );", color: "#e7e9f5" },
  { text: "", color: "#e7e9f5" },
  { text: "  return (", color: "#a370f7" },
  { text: "    <FullStackDev", color: "#ff8177" },
  { text: "      name='Puneet Kumar'", color: "#7ee787" },
  { text: "      stack={['React', 'Next.js',", color: "#7ee787" },
  { text: "        'React Native', 'Node.js']}", color: "#7ee787" },
  { text: "    />", color: "#ff8177" },
  { text: "  );", color: "#a370f7" },
  { text: "};", color: "#a370f7" },
];

export default function AnimatedCodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeout;

    function typeNext() {
      if (lineIndex >= CODE_LINES.length) {
        timeout = setTimeout(() => {
          setVisibleLines(0);
          setCharCount(0);
          lineIndex = 0;
          charIndex = 0;
          typeNext();
        }, 1800);
        return;
      }

      const currentLine = CODE_LINES[lineIndex].text;

      if (charIndex <= currentLine.length) {
        setVisibleLines(lineIndex);
        setCharCount(charIndex);
        charIndex++;
        timeout = setTimeout(typeNext, 22);
      } else {
        lineIndex++;
        charIndex = 0;
        timeout = setTimeout(typeNext, 120);
      }
    }

    typeNext();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window-bar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="code-window-title">portfolio.jsx</span>
      </div>
      <div className="code-window-body">
        {CODE_LINES.slice(0, visibleLines + 1).map((line, i) => (
          <div className="code-line" key={i}>
            <span className="code-line-number">{i + 1}</span>
            <span style={{ color: line.color }}>
              {i === visibleLines ? line.text.slice(0, charCount) : line.text}
              {i === visibleLines && <span className="code-cursor">▍</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
