import hpLogo from "../assets/images/HpLogo.png";
import moovLogo from "../assets/images/MoovLogo.png";
import bgamerLogo from "../assets/images/BgamerLogo.png";

function Work() {
  return (
    <div className="page--container">
      <h2 className="page--title">
        import
        <span className="color--5"> &#123; work &#125; </span>
        from
        <span className="color--4"> "/me/dev.js"</span>
      </h2>
      <div className="page--content work">
        <div className="project__container">
          <a
            className="project"
            href="https://villaosiris.github.io/HealthPoint/"
            target="_blank"
          >
            <div className="proj--1"></div>
          </a>
          <img
            className="project__logo"
            src={hpLogo}
            alt="HealthPoint logo"
            style={{ height: "5rem" }}
          />
        </div>
        <div className="project__container">
          <a
            className="project"
            href="https://villaosiris.github.io/Moov/"
            target="_blank"
          >
            <div className="proj--2"></div>
          </a>
          <img
            className="project__logo"
            src={moovLogo}
            alt="Moov logo"
            style={{ height: "4rem" }}
          />
        </div>

        <div className="project__container">
          <a
            className="project"
            href="https://villaosiris.github.io/Bgamer/"
            target="_blank"
          >
            <div className="proj--3"></div>
          </a>
          <img
            className="project__logo"
            src={bgamerLogo}
            alt="Bgamer logo"
            style={{ height: "4rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Work;
