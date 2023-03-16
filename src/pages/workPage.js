import * as logos from "../assets/logos";
import Card from "../Components/card";
import hpImage from "../assets/images/hp_bg.png";
import BgamerImage from "../assets/images/bgamer_bg.png";
import MoovImage from "../assets/images/moov_bg.png";
import PortImage from "../assets/images/MyPort_bg.png";
import BabyImage from "../assets/images/baby_bg.png";
import soonImage from "../assets/images/soonImg.jpg";
import HpLogo from "../assets/images/HpLogo.png";
import BabyLogo from "../assets/images/BabyLogo.png";
import BgamerLogo from "../assets/images/BgamerLogo.png";
import MoovLogo from "../assets/images/MoovLogo.png";
import PortLogo from "../assets/images/PortLogo.png";

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
        <Card
          projImage={<img src={hpImage} alt="" width="100%" height="100%" />}
          logo={HpLogo}
          title={"HealthPoint"}
          repository={"https://github.com/VillaOsiris/HealthPoint"}
          liveCode={"https://villaosiris.github.io/HealthPoint/"}
          stack={
            <>
              <img
                src={logos.reactLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <span> </span>
              <img
                src={logos.sassLogo}
                alt="css logo"
                width="20px"
                height="20px"
              />
            </>
          }
          description={
            "Local gym landing page project involves design and development to showcase its facilities, classes, trainers, and membership plans to attract potential customers and increase gym membership."
          }
        />

        <Card
          projImage={
            <img src={BgamerImage} alt="" width="100%" height="100%" />
          }
          logo={BgamerLogo}
          title={"Bgamer"}
          repository={"https://github.com/VillaOsiris/Bgamer"}
          liveCode={"https://villaosiris.github.io/Bgamer/"}
          stack={
            <>
              <img
                src={logos.reactLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <span> </span>
              <img
                src={logos.styledLogo}
                alt="css logo"
                width="20px"
                height="20px"
              />
            </>
          }
          description={
            "E-commerce that involves an online store that specializes in selling video games. User-friendly interface that allows customers to browse and purchase games, sign-in and manage their cart history."
          }
        />

        <Card
          projImage={<img src={MoovImage} alt="" width="100%" height="100%" />}
          title={"MooV"}
          logo={MoovLogo}
          repository={"https://github.com/VillaOsiris/Moov"}
          liveCode={"https://villaosiris.github.io/Moov/"}
          stack={
            <>
              <img
                src={logos.reactLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <span> </span>
              <img
                src={logos.cssLogo}
                alt="css logo"
                width="20px"
                height="20px"
              />
            </>
          }
          description={
            "Responsive movie streaming platform project involves building a website that allows users to watch movies online.Fully responsive with Rest API integration and enhanced user experience."
          }
        />

        <Card
          projImage={
            <img src={PortImage} alt="COMING SOON" width="100%" height="100%" />
          }
          title={"MyPort"}
          logo={PortLogo}
          repository={"https://github.com/VillaOsiris/Ports"}
          liveCode={"#"}
          stack={
            <>
              <img
                src={logos.reactLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <span> </span>
              <img
                src={logos.styledLogo}
                alt="css logo"
                width="20px"
                height="20px"
              />
            </>
          }
          description={
            "Portfolio showcase individual's professional work. Simplistic interface with information such as the individual's projects, and contacts to potential employers or clients."
          }
        />

        <Card
          projImage={
            <img src={BabyImage} alt="COMING SOON" width="100%" height="100%" />
          }
          title={"BabyBox"}
          logo={BabyLogo}
          repository={"https://github.com/VillaOsiris/Babybox"}
          liveCode={"#"}
          stack={
            <>
              <img
                src={logos.reactLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <span> </span>
              <img
                src={logos.tsLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <span> </span>
              <img
                src={logos.tailwindLogo}
                alt="css logo"
                width="20px"
                height="20px"
              />
            </>
          }
          description={
            "Project involves offering a subscription-based service for pregnant women, providing monthly gift boxes containing spa-related items to help them de-stress and feel pampered during their pregnancy."
          }
        />

        <Card
          projImage={
            <img src={soonImage} alt="COMING SOON" width="100%" height="100%" />
          }
          title={"Coming Soon!"}
          logo={""}
          repository={"#"}
          liveCode={"#"}
          stack={
            <>
              <img
                src={logos.htmlLogo}
                alt="html logo"
                width="20px"
                height="20px"
              />
              <img
                src={logos.cssLogo}
                alt="css logo"
                width="20px"
                height="20px"
              />
              <img
                src={logos.jsLogo}
                alt="js logo"
                width="20px"
                height="20px"
              />
            </>
          }
          description={
            <p>
              "Well, what if there is no description? There wasn't one today."
              <br />
              <span style={{ color: "lightgray" }}>
                Phil Connors, Groundhog Day (1993)
              </span>
            </p>
          }
        />
      </div>
    </div>
  );
}

export default Work;
