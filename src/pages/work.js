function Work() {
  return (
    <div className="work">
      <h2 className="work__title">
        import
        <span className="color--5"> &#123; work &#125; </span>
        from
        <span className="color--4"> "/me/dev.js"</span>
      </h2>
      <div className="projects">
        <div className="projects__container">
          <div className="project__container">
            <a
              className="project"
              href="https://villaosiris.github.io/HealthPoint/"
              target="_blank"
            >
              <div className="proj--1"></div>
            </a>
          </div>
          <h2 className="project__title">HealthPoint</h2>
        </div>
        <div className="projects__container">
          <div className="project__container">
            <a
              className="project"
              href="https://villaosiris.github.io/Moov/"
              target="_blank"
            >
              <div className="proj--2"></div>
            </a>
          </div>
          <h2 className="project__title">MooV</h2>
        </div>
        <div className="projects__container">
          <div className="project__container">
            <a
              className="project"
              href="https://villaosiris.github.io/Bgamer/"
              target="_blank"
            >
              <div className="proj--3"></div>
            </a>
          </div>
          <h2 className="project__title">Bgamer</h2>
        </div>
      </div>
    </div>
  );
}

export default Work;
