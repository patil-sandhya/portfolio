import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? "Profile2" : "Profile2"}.png`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={100} />+
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                      
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={200} />+
                    </h3>
                    <span className="name">
                      Solved DSA
                      <br />
                      Challenges
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Developer`}</span>
                <h3>Crafting Web Solutions That Fit Your Needs</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`Full Stack Developer skilled in building scalable, production-ready web applications using Next.js, React, Node.js, and PostgreSQL. Architected and delivered a multi-role UGC video platform for brands, creators, and admins—featuring live chat, AI-powered scripting, campaign management, and seamless payment integration. Experienced in crafting responsive, accessible UIs with Tailwind CSS and implementing third-party services for analytics, messaging, and monitoring. Focused on performance optimization, security, and delivering intuitive user experiences across platforms.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
