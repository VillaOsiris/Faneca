import { GiRetroController, GiSittingDog, GiMusicSpell } from "react-icons/gi";
import { BiFootball, BiDrink, BiDownload } from "react-icons/bi";
import { IoCarSportSharp } from "react-icons/io5";
import AdobeLogo from "../assets/logos/adobe.svg";
import BootstrapLogo from "../assets/logos/bootstrap.svg";
import cssLogo from "../assets/logos/css.svg";
import dockerLogo from "../assets/logos/docker.svg";
import figmaLogo from "../assets/logos/figma.svg";
import gitLogo from "../assets/logos/git.svg";
import htmlLogo from "../assets/logos/html.svg";
import jsLogo from "../assets/logos/javascript.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import npmLogo from "../assets/logos/npm.svg";
import officeLogo from "../assets/logos/office.svg";
import reactLogo from "../assets/logos/react.svg";
import sassLogo from "../assets/logos/sass.svg";
import tsLogo from "../assets/logos/typescript.svg";
import vsLogo from "../assets/logos/vs_code.svg";
import photoshopLogo from "../assets/logos/photoshop.svg";
import BRflag from "../assets/lang/br.png";
import ENflag from "../assets/lang/usa.png";
import ESflag from "../assets/lang/es.png";
import FRflag from "../assets/lang/fr.png";
import PTflag from "../assets/lang/pt.png";

function Skills() {
  return (
    <div className="page--container">
      <h2 className="page--title">
        import
        <span className="color--5"> &#123; skills &#125; </span>
        from
        <span className="color--4"> "/me/dev.js"</span>
        <button className="cv__btn">
          <a href="">
            CV <BiDownload className="cv__btn--icon" />
          </a>
        </button>
      </h2>
      <div className="page--content skills">
        <section className="skills__grid">
          <h3 className="skills__grid--title">Skills:</h3>
          <div className="skills__grid--icons">
            <figure>
              <img className="skill__logo" src={htmlLogo} alt="html logo" />
              <h4>HTML</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={cssLogo} alt="css logo" />
              <h4>CSS</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={jsLogo} alt="javascript logo" />
              <h4>Javascript</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={sassLogo} alt="sass logo" />
              <h4>Sass</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={BootstrapLogo}
                alt="bootstrap logo"
              />
              <h4>Bootstrap</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={reactLogo} alt="react logo" />
              <h4>React</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={tsLogo} alt="typescript logo" />
              <h4>Typescript</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={nodeLogo} alt="nodejs logo" />
              <h4>Nodejs</h4>
            </figure>
          </div>
          <h3 className="skills__grid--title">Tools:</h3>
          <div className="skills__grid--icons">
            <figure>
              <img
                className="skill__logo"
                src={vsLogo}
                alt="visual studia code logo"
              />
              <h4>VScode</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={gitLogo} alt="git logo" />
              <h4>Git</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={dockerLogo} alt="docker logo" />
              <h4>Docker</h4>
            </figure>
            <figure>
              <img
                className="skill__logo"
                src={photoshopLogo}
                alt="photoshop logo"
              />
              <h4>Photoshop</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={AdobeLogo} alt="adobe logo" />
              <h4>Adobe</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={officeLogo} alt="office logo" />
              <h4>Office</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={figmaLogo} alt="figma logo" />
              <h4>Figma</h4>
            </figure>
            <figure>
              <img className="skill__logo" src={npmLogo} alt="npm logo" />
              <h4>npm</h4>
            </figure>
          </div>
        </section>

        <section className="languages">
          <h3 className="languages--title">Languages:</h3>
          <div className="languages--content">
            <div className="languages--icon">
              <h3 className="color--6">// Native</h3>
              <figure>
                <img src={PTflag} width="25px" alt="" />
                <p>pt-PT</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Fluent</h3>
              <figure>
                <img src={ENflag} width="25px" alt="" />
                <p>en-US</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// OKish</h3>
              <figure>
                <img src={ESflag} width="25px" alt="" />
                <p>es-ES</p>
              </figure>
            </div>
            <div className="languages--icon">
              <h3 className="color--6">// Poor</h3>
              <figure>
                <img src={FRflag} width="25px" alt="" />
                <p>fr-FR</p>
              </figure>
            </div>
          </div>
        </section>

        <section className="experience">
          <h3 className="experience--title">Work Experience:</h3>
          <div className="experience--content">
            <div>
              <h3 className="color--6">// 2022 (current)</h3>
              <p>Frontend Developer @ Faneca inc</p>
              <p>Freelancer </p>
            </div>
            <div>
              <h3 className="color--6">// 2016 - 2022 (7years)</h3>
              <p>Senior Engineer @ AAP</p>
              <p>MEP Department Coordinator</p>
            </div>
            <div>
              <h3 className="color--6">// 2015 (3months)</h3>
              <p>Curricular Internship @ CMPF</p>
              <p>Civil Engineer Intern</p>
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
