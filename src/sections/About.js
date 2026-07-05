// import React from "react";
// import { about, profile } from "../data";

// export default function About() {
//   return (
//     <section className="page about-page" id="about">
//       <h2 className="page-title">
//         Know Who <span className="highlight">I'm</span>
//       </h2>

//       <div className="about-grid">
//         <div className="about-photo">
//           <img src={profile.aboutPhoto} alt={profile.name} />
//         </div>

//         <div className="about-text">
//           <p>{about.intro}</p>
//           <ul className="about-points">
//             {about.points.map((point) => (
//               <li key={point}>
//                 <i className="fa-solid fa-caret-right" /> {point}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { about, profile } from "../data";

export default function About() {
  return (
    <section className="page about-page" id="about">
      <h2 className="page-title">
        Know Who <span className="highlight">I'm</span>
      </h2>

      <div className="about-grid">
        <div className="about-photo">
          <img src={profile.aboutPhoto} alt={profile.name} />
        </div>

        <div className="about-text">
          <div className="about-stats">
            {about.stats.map((stat) => (
              <div className="stat-card" key={stat.title}>
                <i className={stat.icon} />
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>

          <p>{about.intro}</p>
          <ul className="about-points">
            {about.points.map((point) => (
              <li key={point}>
                <i className="fa-solid fa-caret-right" /> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}