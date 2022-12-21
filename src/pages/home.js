import { useEffect } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Home() {
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
          <a href="https://whatsapp.com" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <section className="page--1">
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
            I'm driven by my curiosity to understand the different levels of
            software development, coding, new features and cross-browser
            testing.
          </p>
          <p className="intro--2">
            <span>But wait...</span> Are you ready for a story? This is how it
            starts...
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

      <section className="page--2">
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
                and the adiction for
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
                As time passed, and as a teenager, he choose a carrer as a Civil
                Engineer...
              </p>
              <p className="story__paragraph">
                Started working as an intern in an international
                Architectural/engineering company, a fully
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
                <span className="story--highlight"> teamleader </span> with two
                awosome pupils in just 2years...
              </p>
            </div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page dot">.</div>
            <div className="story__page">
              <p className="story__paragraph">
                +5 years passed, now a Senior Engineer, strived as
                <span className="story--highlight"> Project Coordinator </span>,
                Engineering
                <span className="story--highlight"> Department Leader </span>
                and Site Support Engineer...
              </p>
              <p className="story__paragraph">
                But even with all those acomplishments, a steady job and salary,
                he
                <span className="story--highlight">
                  {" "}
                  never knew the felling of "i work because i love what i do"
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
                After seeing all his friends and
                <span className="story--highlight"> gaming/coding </span>
                communities focus in tech. related jobs...
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
                <span className="story--highlight"> Front-end </span>
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
                <span className="story--highlight"> Sérgio Costa</span>, Junior
                <span className="story--highlight">
                  {" "}
                  Front-end Developer
                </span>,{" "}
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
                  Interested in working{" "}
                  <span className="story--highlight"> remote </span>;
                </li>
              </ul>
              <p className="story__paragraph">
                Now let’s write the next lines for this story together.
              </p>
            </div>
          </div>
          <h2 className="story--tag">&lt;/story&gt;</h2>
        </div>
      </section>

      <section className="page--3">
        <svg
          className="curve curve--top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            transform="translate(1440), scale(-1, 1)"
            fill="#0e0f0f"
            d="M0,96L16,90.7C32,85,64,75,96,90.7C128,107,160,149,192,144C224,139,256,85,288,69.3C320,53,352,75,384,101.3C416,128,448,160,480,186.7C512,213,544,235,576,224C608,213,640,171,672,149.3C704,128,736,128,768,154.7C800,181,832,235,864,245.3C896,256,928,224,960,208C992,192,1024,192,1056,202.7C1088,213,1120,235,1152,234.7C1184,235,1216,213,1248,213.3C1280,213,1312,235,1344,240C1376,245,1408,235,1424,229.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}

export default Home;
