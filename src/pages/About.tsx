import img1 from "../assets/img1.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Left: Text Block */}
      <div className="about-text-block">
        <h1 className="about-title">
          I BUILD SMART DIGITAL SOLUTIONS
          <br />
          WITH PURPOSE AND PASSION.
        </h1>
        <div className="about-description">
          <p>
            I'm a passionate developer and tech enthusiast. I develop
            cross-platform mobile apps using Flutter and I am specialized in
            turning ideas into scalable, real-world solutions.
          </p>
          <p>
            I am in my Final year of B.Tech in Computer Science & Engineering
            from MSIT Kolkata. Currently, I'm working on freelance projects
            while exploring new technologies such as Arduino and IOT things to
            stay ahead in a fast-changing digital world.
          </p>
          <p>
            Apart from all these I am doing DSA as well to improve my problem
            solving capabilities and gain depth knowledge
          </p>
        </div>
      </div>
      {/* Right: Card */}
      <div className="about-card">
        <img src={img1} alt="About" className="about-img" />
        <div className="about-card-content">
          <div className="about-card-title">Programming Skills</div>
          <div className="about-card-list">
            C, Python, Dart, Java, <br />
            C++
          </div>
          <div className="about-card-title">Technologies</div>
          <div className="about-card-list">
            HTML, CSS, Bootstrap,
            <br />
            Flutter, Flutter SDK,
            <br />
            Canva, FireBase Auth,
            <br />
            RESTful API
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
