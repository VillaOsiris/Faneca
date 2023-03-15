import * as logos from "../assets/logos";
import Card from "../Components/card";
import hpImage from "../assets/images/hp_v4.png";
import BgamerImage from "../assets/images/bgamer_v1.png";
import MoovImage from "../assets/images/moov_v1_clipped.png";
import HpLogo from "../assets/images/HpLogo.png";
import BgamerLogo from "../assets/images/BgamerLogo.png";
import MoovLogo from "../assets/images/MoovLogo.png";

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
            "Responsive movie streaming platform project involves building a website that allows users to watch movies online.Fully responsive with Rest API integration and enhanced user experience."
          }
        />

        <Card
          projImage={
            <img src={null} alt="COMING SOON" width="100%" height="100%" />
          }
          title={"Title"}
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
          description={"COMING SOON!"}
        />

        <Card
          projImage={
            <img src={null} alt="COMING SOON" width="100%" height="100%" />
          }
          title={"Title"}
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
          description={"COMING SOON!"}
        />

        <Card
          projImage={
            <img src={null} alt="COMING SOON" width="100%" height="100%" />
          }
          title={"Title"}
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
          description={"COMING SOON!"}
        />
      </div>
    </div>
  );
}

export default Work;
