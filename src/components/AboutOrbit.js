import React from "react";

const innerRing = [
  { icon: "fa-brands fa-react", color: "#61DAFB", label: "React" },
  { icon: "fa-brands fa-node-js", color: "#339933", label: "Node.js" },
  { icon: "fa-brands fa-js", color: "#F7DF1E", label: "JavaScript" },
  { icon: "fa-solid fa-leaf", color: "#47A248", label: "MongoDB" },
];

const outerRing = [
  { icon: "fa-solid fa-n", color: "#ffffff", label: "Next.js" },
  { icon: "fa-solid fa-mobile-screen-button", color: "#61DAFB", label: "React Native" },
  { icon: "fa-solid fa-diagram-project", color: "#764ABC", label: "Redux" },
  { icon: "fa-solid fa-database", color: "#4479A1", label: "MySQL" },
];

function OrbitRing({ items, radius, duration, size, reverse }) {
  const count = items.length;
  return (
    <div
      className="orbit-ring"
      style={{ width: size, height: size }}
    >
      {items.map((item, i) => {
        const delay = -((duration / count) * i);
        return (
          <div
            className="orbit-item"
            key={item.label}
            style={{
              "--duration": `${duration}s`,
              "--delay": `${delay}s`,
              "--radius": `${radius}px`,
              animationDirection: reverse ? "reverse" : "normal",
            }}
          >
            <i
              className={item.icon}
              title={item.label}
              style={{
                "--duration": `${duration}s`,
                "--delay": `${delay}s`,
                "--radius": `${radius}px`,
                color: item.color,
                animationDirection: reverse ? "reverse" : "normal",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function AboutOrbit() {
  return (
    <div className="orbit-wrap">
      <div className="orbit-glow" />
      <div className="orbit-track orbit-track-inner" />
      <div className="orbit-track orbit-track-outer" />

      <OrbitRing items={innerRing} radius={110} duration={14} size={220} />
      <OrbitRing items={outerRing} radius={170} duration={20} size={340} reverse />

      <div className="orbit-core">
        <i className="fa-solid fa-code" />
      </div>
    </div>
  );
}