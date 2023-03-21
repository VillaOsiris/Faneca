import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

function Card({
  projImage,
  logo,
  title,
  stack,
  description,
  repository,
  liveCode,
}) {
  return (
    <div className="h-screen flex align-middle">
      <div className="card--container">
        <div className="card--content group">
          <div className="card--cover">{projImage}</div>
          <h3 className="card--content__title">{title}</h3>
          <h4 className="card--content__subtitle mb-4">Stack </h4>
          <div>{stack}</div>
          <p className="card--content__text mb-4">{description}</p>
          <div className="card--content__buttons">
            <a
              className="card--content__btn"
              href={repository}
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub />
            </a>
            <a
              className="card--content__btn"
              href={liveCode}
              target="_blank"
              rel="noreferrer"
            >
              LIVE <MdOpenInNew />
            </a>
          </div>
        </div>
        <div className="card--footer">
          <img
            className="project__logo"
            src={logo}
            style={{ height: "4rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
