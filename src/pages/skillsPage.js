import { useState } from "react";
import { GiRetroController, GiSittingDog, GiMusicSpell } from "react-icons/gi";
import { BiFootball, BiDrink, BiDownload } from "react-icons/bi";
import { IoCarSportSharp } from "react-icons/io5";
import * as logos from "../assets/logos";

function Skills() {
  const [coursesModal, setCoursesModal] = useState(false);

  return (
    <div className="page--container">
      <h2 className="page--title">
        import
        <span className="color--5"> &#123; skills &#125; </span>
        from
        <span className="color--4"> "/me/dev.js"</span>
        <button className="cv__btn">
          <a
            href="https://drive.google.com/uc?export=download&id=17wy2-8JjxLAvVG3lJdz1EnI83icA2W8n"
            download
          >
            CV <BiDownload className="cv__btn--icon" />
          </a>
        </button>
        <button className="map__btn">
          <a
            href="https://drive.google.com/uc?export=download&id=1UTF9q0C29OqAJfpYK5mRVfcE6HkR1yGB"
            download
          >
            MAP <BiDownload className="cv__btn--icon" />
          </a>
        </button>
      </h2>
      <button
        className="courses__modal--button"
        onClick={() => {
          setCoursesModal(true);
        }}
      >
        Education
      </button>
      {coursesModal && (
        <div
          className="courses__modal"
          onClick={() => {
            setCoursesModal(false);
          }}
        >
          <div className="course--grid">
            <div className="course">
              <h2>&lt; FreeCodeCamp /&gt;</h2>
              <h3>// by Quincy Larson</h3>
              <ul>
                <li>"Responsive Web Design Certification"</li>
                <li>
                  "JavaScript Algorithms and Data Structures Certification"
                </li>
                <li>
                  "Frontend Development Libraries Certification (sass, redux and
                  react)"
                </li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; Udemy /&gt;</h2>
              <h3>// by Jonas Schmedtmann</h3>
              <ul>
                <li>
                  "Build Responsive Real-World Websites with HTML and CSS"
                </li>
                <li>
                  "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
                </li>
                <li>
                  "The Complete JavaScript Course 2023: From Zero to Expert!"
                </li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; CodeWithMosh /&gt;</h2>
              <h3>// by Mosh Hamedani</h3>
              <ul>
                <li>"The Ultimate HTML5 & CSS3 Series"</li>
                <li>"The Ultimate JavaScript Series"</li>
                <li>"Mastering React"</li>
                <li>"The Ultimate Git Course"</li>
                <li>"The Ultimate TypeScript Course"</li>
                <li>"The Ultimate Redux Course"</li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; IN-Learning /&gt;</h2>
              <h3>// by LinkdIN</h3>
              <ul>
                <li>"Path: Full-Stack Web Developer"</li>
                <li>"Python Essential Training"</li>
                <li>"Performance Testing Fundations"</li>
                <li>"Emerging Web Frameworks"</li>
                <li>"End-to-End JavaScript Testing with Cypress.io"</li>
                <li>and a lot more others...</li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; CodingAddict /&gt;</h2>
              <h3>// by John Smilga</h3>
              <ul>
                <li>
                  "Full React Course 2020 - Learn Fundamentals, Hooks, Context
                  API, React Router, Custom Hooks"
                </li>
                <li>"React Tutorial and Projects Course (2022)"</li>
              </ul>
            </div>
            <div className="course">
              <h2>&lt; WebDevSimplified /&gt;</h2>
              <h3>// by Kile Cook</h3>
              <ul>
                <li>"React Hooks Simplified"</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="page--content skills">
        <section className="skills__grid">
          <h3 className="skills__grid--title">Tech Stack:</h3>
          <div className="skills__grid--icons">
            <figure>
              <img
                className="skill__logo"
                src={logos.htmlLogo}
                alt="html logo"
              />
              <h4>HTML</h4>
            </figure>

            <figure>
              <img className="skill__logo" src={logos.cssLogo} alt="css logo" />
              <h4>CSS</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.jsLogo}
                alt="javascript logo"
              />
              <h4>Javascript</h4>
            </figure>

            <figure>
              <img className="skill__logo" src={logos.tsLogo} alt="sass logo" />
              <h4>Typescript</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.BootstrapLogo}
                alt="bootstrap logo"
              />
              <h4>Bootstrap</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.sassLogo}
                alt="react logo"
              />
              <h4>Sass</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.tailwindLogo}
                alt="typescript logo"
              />
              <h4>Tailwind</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.styledLogo}
                alt="typescript logo"
              />
              <h4>Styled-Comp</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.reactLogo}
                alt="typescript logo"
              />
              <h4>Reactjs</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.nextLogo}
                alt="nodejs logo"
              />
              <h4>Nextjs</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.nodeLogo}
                alt="nodejs logo"
              />
              <h4>Nodejs</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.mongoLogo}
                alt="nodejs logo"
              />
              <h4>MongoDB</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.jestLogo}
                alt="nodejs logo"
              />
              <h4>Jestjs</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.webpackLogo}
                alt="nodejs logo"
              />
              <h4>webpack</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.dockerLogo}
                alt="nodejs logo"
              />
              <h4>Docker</h4>
            </figure>

            <figure>
              <img
                className="skill__logo"
                src={logos.gitLogo}
                alt="nodejs logo"
              />
              <h4>Git</h4>
            </figure>
          </div>
        </section>

        <section className="experience">
          <h3 className="experience--title">Work Experience:</h3>
          <div className="experience--content">
            <div>
              <h3 className="color--6">// 2022 - 2023 (current)</h3>
              <p>
                <strong>React Developer</strong>
              </p>
              <p>Full-time Developer</p>
            </div>
            <div>
              <h3 className="color--6">// 2021 - 2022 (&gt;1 year)</h3>
              <p>
                <strong>Front-end Developer</strong>
              </p>
              <p>Part-time Developer</p>
            </div>
            <div>
              <h3 className="color--6">// 2016 - 2022 (&gt;7 years)</h3>
              <p>
                <strong>Senior Civil Engineer</strong> @ AAP
              </p>
              <p>MEP Department Coordinator</p>
            </div>
            <div>
              <h3 className="color--6">// 2015 (3 months)</h3>
              <p>
                <strong>Civil Engineer Intern</strong> @ CMPF
              </p>
              <p>Curricular Internship</p>
            </div>
          </div>
        </section>

        <section className="languages">
          <h3 className="languages--title">Languages:</h3>
          <div className="languages--content">
            <div className="languages--icon">
              <h3 className="color--6">// Native</h3>
              <figure>
                <img src={logos.PTflag} width="25px" alt="" />
                <p>pt-PT</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Fluent</h3>
              <figure>
                <img src={logos.ENflag} width="25px" alt="" />
                <p>en-US</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Professional</h3>
              <figure>
                <img src={logos.ESflag} width="25px" alt="" />
                <p>es-ES</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Poor</h3>
              <figure>
                <img src={logos.FRflag} width="25px" alt="" />
                <p>fr-FR</p>
              </figure>
            </div>
          </div>
        </section>

        <section className="interests">
          <h3 className="interests--title">Interest:</h3>
          <div className="interests--content">
            <figure>
              <GiRetroController className="interest__icon" />
              <h4>Gaming</h4>
            </figure>
            <figure>
              <BiFootball className="interest__icon" />
              <h4>Sports</h4>
            </figure>
            <figure>
              <IoCarSportSharp className="interest__icon" />
              <h4>Cars</h4>
            </figure>
            <figure>
              <GiSittingDog className="interest__icon" />
              <h4>Pets</h4>
            </figure>
            <figure>
              <GiMusicSpell className="interest__icon" />
              <h4>Music</h4>
            </figure>
            <figure>
              <BiDrink className="interest__icon" />
              <h4>Socials</h4>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
