import { useState, useEffect } from "react";
import QR from "../assets/images/map_qr.png";
import SideBar from "../Components/Sidebar";
import { FaArrowDown } from "react-icons/fa";

function Home() {
  const [lantern, setLantern] = useState(false);

  // STORY PAGE EVENT
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  // MOUSE POSITION EVENT
  useEffect(() => {
    let cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", function (e) {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });
  }, []);

  return (
    <div className="container">
      <SideBar />
      <section className="page intro">
        <div className="intro__content">
          <h2 className="intro__title">
            setMe(<span className="color--2">Dev</span>);
          </h2>
          <h3 className="intro__text">
            by <span className="color--4">Sérgio Costa</span>
          </h3>
          <h3 className="intro__text">
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
        <div className="intro--photo"></div>
      </section>
      <svg
        className="curve curve--intro"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0e0f0f"
          d="M0,160L16,186.7C32,213,64,267,96,261.3C128,256,160,192,192,170.7C224,149,256,171,288,160C320,149,352,107,384,80C416,53,448,43,480,42.7C512,43,544,53,576,69.3C608,85,640,107,672,138.7C704,171,736,213,768,208C800,203,832,149,864,133.3C896,117,928,139,960,160C992,181,1024,203,1056,218.7C1088,235,1120,245,1152,229.3C1184,213,1216,171,1248,149.3C1280,128,1312,128,1344,122.7C1376,117,1408,107,1424,101.3L1440,96L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
        ></path>
      </svg>
      <section className="page story">
        <h2 className="story--tag">&lt;story&gt;</h2>
        <div className="story__content">
          <div className="story__page">
            <p className="story__paragraph">
              "Once upon a time, there was a kid.
            </p>
            <p className="story__paragraph">
              That early discovered
              <span className="story--highlight">
                {" "}
                the passion for building stuff and finding different ways of
                creating things
              </span>
              .
            </p>
            <p className="story__paragraph">
              One day his father brought home the oldest pc from his office, and
              the addiction for
              <span className="story--highlight"> Gamming and Technology </span>
              started...
            </p>
          </div>
          <div className="story__page dot">.</div>
          <div className="story__page dot">.</div>
          <div className="story__page dot">.</div>
          <div className="story__page">
            <p className="story__paragraph">
              As time passed, as a teenager, he chose a carrer as a Civil
              Engineer.
            </p>
            <p className="story__paragraph">
              Started working as an intern in an international
              Architectural/Engineering company, with a fully
              <span className="story--highlight">
                {" "}
                Multicultural Environment
              </span>
              , doing high-end private and comercial projects.
            </p>
            <p className="story__paragraph">
              Quickly showing his
              <span className="story--highlight"> Confidence </span> and
              <span className="story--highlight"> Problem Solving </span>
              qualities, together with his social skills, he became
              <span className="story--highlight"> Teamleader </span> within two
              years, with two awesome pupils...
            </p>
          </div>
          <div className="story__page dot">.</div>
          <div className="story__page dot">.</div>
          <div className="story__page dot">.</div>
          <div className="story__page">
            <p className="story__paragraph">
              +5 years passed, now as Senior Engineer, throve as
              <span className="story--highlight"> Project Coordinator</span>,
              Engineering
              <span className="story--highlight"> Department Leader </span>
              and Site Support Engineer.
            </p>
            <p className="story__paragraph">
              But even with all those accomplishments, a steady job and salary,
              he never knew the felling of
              <span className="story--highlight">
                {" "}
                "loving the work you do"
              </span>
              .
            </p>
            <p className="story__paragraph">
              And the regret for never trying to apply his technological and
              coding knowledge, started to weight on his mind...
            </p>
          </div>
          <div className="story__page dot">.</div>
          <div className="story__page dot">.</div>
          <div className="story__page dot">.</div>
          <div className="story__page">
            <p className="story__paragraph">
              After seeing all his friends focusing on tech. related jobs and
              been part of some
              <span className="story--highlight"> Gaming/Coding </span>
              communities.
            </p>
            <p className="story__paragraph">
              With full support of his
              <span className="story--highlight"> UX/UI </span>
              Designer Girlfriend.
            </p>
            <p className="story__paragraph">
              With lots... and i mean
              <span className="story--highlight">
                {" "}
                looooooooots... of hours{" "}
              </span>
              dedicated to
              <span className="story--highlight"> Self-learning </span>
              and honing various
              <span className="story--highlight"> Front-end </span>
              skills.
            </p>
            <p className="story__paragraph">
              He now feels ready for a plot twist!"
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
                Thinking in <span className="story--highlight"> React</span>;
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
        <h2 className="placeholder--tag">
          <p>"Find My Roadmap!"</p>
          <FaArrowDown />
        </h2>
      </section>
      <svg
        id="wave"
        viewBox="0 0 1440 170"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0e0f0f"
          d="M0,17L13.3,22.7C26.7,28,53,40,80,62.3C106.7,85,133,119,160,124.7C186.7,130,213,108,240,90.7C266.7,74,293,62,320,68C346.7,74,373,96,400,102C426.7,108,453,96,480,85C506.7,74,533,62,560,56.7C586.7,51,613,51,640,68C666.7,85,693,119,720,130.3C746.7,142,773,130,800,110.5C826.7,91,853,62,880,48.2C906.7,34,933,34,960,42.5C986.7,51,1013,68,1040,62.3C1066.7,57,1093,28,1120,14.2C1146.7,0,1173,0,1200,14.2C1226.7,28,1253,57,1280,79.3C1306.7,102,1333,119,1360,116.2C1386.7,113,1413,91,1440,70.8C1466.7,51,1493,34,1520,48.2C1546.7,62,1573,108,1600,130.3C1626.7,153,1653,153,1680,147.3C1706.7,142,1733,130,1760,107.7C1786.7,85,1813,51,1840,56.7C1866.7,62,1893,108,1907,130.3L1920,153L1920,170L1906.7,170C1893.3,170,1867,170,1840,170C1813.3,170,1787,170,1760,170C1733.3,170,1707,170,1680,170C1653.3,170,1627,170,1600,170C1573.3,170,1547,170,1520,170C1493.3,170,1467,170,1440,170C1413.3,170,1387,170,1360,170C1333.3,170,1307,170,1280,170C1253.3,170,1227,170,1200,170C1173.3,170,1147,170,1120,170C1093.3,170,1067,170,1040,170C1013.3,170,987,170,960,170C933.3,170,907,170,880,170C853.3,170,827,170,800,170C773.3,170,747,170,720,170C693.3,170,667,170,640,170C613.3,170,587,170,560,170C533.3,170,507,170,480,170C453.3,170,427,170,400,170C373.3,170,347,170,320,170C293.3,170,267,170,240,170C213.3,170,187,170,160,170C133.3,170,107,170,80,170C53.3,170,27,170,13,170L0,170Z"
        ></path>
      </svg>
      <div
        className={lantern ? "cursor--element lantern" : "cursor--element "}
        id="cursor"
      ></div>
      <section className="page footer" id="test">
        <div
          className="footer--grid"
          onMouseEnter={() => {
            setLantern(true);
          }}
          onMouseLeave={() => {
            setLantern(false);
          }}
        >
          <p className="text1">Keep looking...</p>
          <p className="text2">REACT</p>
          <p className="text3">MUCH FUN!</p>
          <p className="text4">WOW!</p>
          <p className="text5">TEAMPLAYER</p>
          <p className="text6">CREATIVE</p>
          <p className="text7">AGILE</p>
          <p className="qr">
            <img className="qr" src={QR} alt="cv qr code" />
          </p>
          <p className="date">updated: jan 2023</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
