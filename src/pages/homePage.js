import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 1 }
    );

    const storyPages = document.querySelectorAll(".story__page");
    storyPages.forEach((page) => {
      return observer.observe(page);
    });
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar--btn">
          <a href="" target="_blank">
            CV
          </a>
        </div>
        <div className="sidebar--btn">
          <a href="https://www.linkedin.com/in/sergiocscosta/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <div className="sidebar--btn">
          <a href="https://github.com/VillaOsiris" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="sidebar--btn">
          <a href="https://facebook.com" target="_blank">
            <FaFacebook />
          </a>
        </div>
        <div className="sidebar--btn">
          <a onClick={() => setShowModal(!showModal)}>
            <FaWhatsapp />
          </a>
        </div>
        {showModal && (
          <div className="contact__modal">
            <p>(+34) 612 225 757</p>
            <p>sergio20128@hotmail.com</p>
          </div>
        )}
      </div>
      <section className="page page--1">
        <div className="page__content">
          <h2 className="page__title">
            setMe(<span className="color--2">Dev</span>);
          </h2>
          <h3 className="page__text">
            by <span className="color--4">Sérgio Costa</span>
          </h3>
          <h3 className="page__text">
            <span className="color--5">Front-end Developer</span>
          </h3>
          <p className="intro--1 color--6">
            // Passioned for gaming, technology and digital arts. <br />
            I'm driven by the curiosity to understand different levels of
            software development, coding, newest features and cross-browser
            testing.
          </p>
          <p className="intro--2">
            But wait... Are you ready for a story? This is how everything
            started...
          </p>
        </div>
        <div className="circle"></div>
        <svg
          className="curve curve--bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0e0f0f"
            d="M0,160L16,186.7C32,213,64,267,96,261.3C128,256,160,192,192,170.7C224,149,256,171,288,160C320,149,352,107,384,80C416,53,448,43,480,42.7C512,43,544,53,576,69.3C608,85,640,107,672,138.7C704,171,736,213,768,208C800,203,832,149,864,133.3C896,117,928,139,960,160C992,181,1024,203,1056,218.7C1088,235,1120,245,1152,229.3C1184,213,1216,171,1248,149.3C1280,128,1312,128,1344,122.7C1376,117,1408,107,1424,101.3L1440,96L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          ></path>
        </svg>
      </section>

      <section className="page page--2">
        <div className="story">
          <h2 className="story--tag">&lt;story&gt;</h2>
          <div className="story__content">
            <div className="story__page">
              <p className="story__paragraph">
                " Once upon a time, there was a kid...
              </p>
              <p className="story__paragraph">
                That early discovered
                <span className="story--highlight">
                  {" "}
                  the passion for building stuff and diferent ways of creating
                  things{" "}
                </span>
                ...
              </p>
              <p className="story__paragraph">
                One day his father brought home the oldest pc from his office,
                and the addiction for
                <span className="story--highlight">
                  {" "}
                  gamming and technology{" "}
                </span>
                started...
              </p>
            </div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page">
              <p className="story__paragraph">
                As time passed, as a teenager, he choose a carrer as a Civil
                Engineer...
              </p>
              <p className="story__paragraph">
                Started working as an intern in an international
                Architectural/engineering company, with a fully
                <span className="story--highlight">
                  {" "}
                  multi-cultural environment{" "}
                </span>
                , doing high-end private and comercial projects...
              </p>
              <p className="story__paragraph">
                Quickly showing his
                <span className="story--highlight"> confidence </span> and
                <span className="story--highlight"> problem solving </span>
                qualities, together with his social skills, he became
                <span className="story--highlight"> teamleader </span> within
                two years, with two awesome pupils...
              </p>
            </div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page">
              <p className="story__paragraph">
                +5 years passed, now as Senior Engineer, throve as
                <span className="story--highlight"> Project Coordinator </span>,
                Engineering
                <span className="story--highlight"> Department Leader </span>
                and Site Support Engineer...
              </p>
              <p className="story__paragraph">
                But even with all those acomplishments, a steady job and salary,
                he never knew the felling of
                <span className="story--highlight">
                  {" "}
                  "i work because i love what i do"
                </span>
                ...
              </p>
              <p className="story__paragraph">
                And the regret for never trying to apply his technological and
                coding knowladge, started to weight on his mind...
              </p>
            </div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page">
              <p className="story__paragraph">
                After seeing all his friends focus in tech. related jobs and
                been part of some
                <span className="story--highlight"> gaming/coding </span>
                communities...
              </p>
              <p className="story__paragraph">
                With full support of his
                <span className="story--highlight"> UX/UI </span>
                Designer Girlfriend...
              </p>
              <p className="story__paragraph">
                With lots... and i mean a
                <span className="story--highlight">
                  {" "}
                  looooooooot... of hours{" "}
                </span>
                dedicated to
                <span className="story--highlight"> self-learning </span>
                and honing various
                <span className="story--highlight"> Frontend </span>
                skills...
              </p>
              <p className="story__paragraph">
                He now feels ready for a plot twist!
              </p>
            </div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page">
              <p className="story__paragraph">So this is how it goes:</p>
              <p className="story__paragraph">
                Hello, I'm
                <span className="story--highlight"> Sérgio Costa</span>,
                <span className="story--highlight"> Front-end Developer</span>,{" "}
                <span className="story--scratch">former Civil Engineer</span>.
              </p>
              <ul className="story__paragraph">
                <li>
                  Likes Creative and
                  <span className="story--highlight"> UX/UI </span>environments;
                </li>
                <li>
                  Thinking in <span className="story--highlight"> React </span>;
                </li>
                <li>
                  Developing in<span className="story--highlight"> Agile </span>
                  frameworks;
                </li>
                <li>
                  Pleased to work as{" "}
                  <span className="story--highlight"> Remote</span>;
                </li>
              </ul>
              <p className="story__paragraph">
                Now, let’s write the next lines for this story together.
              </p>
            </div>
          </div>
          <h2 className="story--tag">&lt;/story&gt;</h2>
        </div>
      </section>

      <svg
        className="curve curve--top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1160"
      >
        <path
          fill="#0e0f0f"
          fill-opacity="1"
          d="M0,160
            L14.1,149.3
            C28.2,139,56,117,85,122.7
            C112.9,128,141,160,169,154.7
            C197.6,149,226,107,254,85.3
            C282.4,64,311,64,339,106.7
            C367.1,149,395,235,424,240
            C451.8,245,480,171,508,138.7
            C536.5,107,565,117,593,149.3
            C621.2,181,649,235,678,245.3C705.9,256,734,224,762,176
            C790.6,128,819,64,847,58.7
            C875.3,53,904,107,932,117.3
            C960,128,988,96,1016,112
            C1044.7,128,1073,192,1101,186.7
            C1129.4,181,1158,107,1186,101.3
            C1214.1,96,1242,160,1271,165.3
            C1298.8,171,1327,117,1355,101.3C1383.5,85,1412,107,1426,117.3
            L1440,128
            L1440,3600
            L1425.9,3600
            C1411.8,3600,1384,3600,1355,3600
            C1327.1,3600,1299,3600,1271,3600
            C1242.4,3600,1214,3600,1186,3600
            C1157.6,3600,1129,3600,1101,3600
            C1072.9,3600,1045,3600,1016,3600C988.2,3600,960,3600,932,3600C903.5,3600,875,3600,847,3600C818.8,3600,791,3600,762,3600C734.1,3600,706,3600,678,3600C649.4,3600,621,3600,593,3600C564.7,3600,536,3600,508,3600C480,3600,452,3600,424,3600C395.3,3600,367,3600,339,3600C310.6,3600,282,3600,254,3600C225.9,3600,198,3600,169,3600C141.2,3600,113,3600,85,3600C56.5,3600,28,3600,14,3600
            L0,3600Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
