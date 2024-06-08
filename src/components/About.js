import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="header">
        <h3>
          ABOUT <span> ME</span>
        </h3>
      </div>
      <div className="intro">
        <h1>Konnichiwa !!!</h1>
        <p>
          I am a full stack web developer with a particular interest in making
          things simple and automating daily tasks. I try to keep up with
          security and best practices, and am always looking for new things to
          learn.
        </p>
      </div>
      <div className="specials">
        <div className="important">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="important">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="important">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="important">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
      <h1 className="timelineHeading">EDUCATION</h1>
      <div className="timeline">
        <div className="event">
          <p className="duration">NOV 2021 - PRESENT</p>
          <h3>NUST SEECS ISLAMABAD </h3>
          <h4>BE ELECTRICAL ENGINEERING</h4>
          <p className="score">CGPA:3.1</p>
        </div>
        <div className="event">
          <p className="duration">SEP 2019 - JUN 2021</p>
          <h3>KIPS COLLEGE LAHORE </h3>
          <h4>F.Sc</h4>
          <p className="score">Percentage:92.5</p>
        </div>
        <div className="event">
          <p className="duration">MAR 2017 - MAR 2019</p>
          <h3>THE PUNJAB SCHOOL LAHORE </h3>
          <h4>MATRIC</h4>
          <p className="score">Percentage:89.7</p>
        </div>
      </div>
      <h1 className="timelineHeading">INTERNSHIPS</h1>
      <div className="timeline">
        <div className="event">
          <p className="duration">JUL 2023 - AUG 2023</p>
          <h3>ELEMENTS LEARNING</h3>
          <h4>Web Developer</h4>
          <p className="score">
            I was assigned to develop a basic website on wordpress.
          </p>
        </div>
        <div className="event">
          <p className="duration">JUL 2023 - AUG 2023</p>
          <h3>Murrabi</h3>
          <h4>STM32 Trainer</h4>
          <p className="score">
            Was assigned to design and conduct lab training on STM32.
          </p>
        </div>
        <div className="event">
          <p className="duration">FEB 2023 - MAR 2023</p>
          <h3>Truid</h3>
          <h4>Web and C++ Developer</h4>
          <p className="score">
            Spent one month on web developing and then learned computer vision
            in C++
          </p>
        </div>
      </div>
      <h1 className="timelineHeading">SKILLS</h1>
      <div className="skills">
        <ul>
          <li>
            <div className="cert">
               <img src="/deeplearningai.png" alt="profile" />
              <p>AI For Everyone</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/deeplearningai.png" alt="profile" />
              <p>Advance Learning Algorithms</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/deeplearningai.png" alt="profile" />
              <p>Machine Learning Specilization</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/deeplearningai.png" alt="profile" />
              <p>Supervised Machine Learning : Regression and Classification</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/deeplearningai.png" alt="profile" />
              <p>Unsupervised Learning, Recommenders, Reinforcement Learning</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/matlab.png" alt="profile" />
              <p>MATLAB Onramp</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/duke.jpeg" alt="profile" />
              <p>Rust Fundamentals</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/meta.png" alt="profile" />
              <p>Programming with Javascript</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/picture.jpg" alt="profile" />
              <p>Command Line Basic in Linux</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="meta.png" alt="profile" />
              <p>Introduction to Mobile Development</p>
            </div>
          </li>

          <li>
            <div className="cert">
               <img src="/meta.png" alt="profile" />
              <p>React Native</p>
            </div>
          </li>

          <li>
            <div className="cert">
            <img src="/cisco.jpeg" alt="profile" />
              <p>NDG Linux Essentials English 0223 cga</p>
            </div>
          </li>

          <li>
            <div className="cert">
            <img src="/cisco.jpeg" alt="profile" />
              <p>NDG Linux Unhatched English 0123b cga</p>
            </div>
          </li>
        </ul>
      </div>
      <h1 className="timelineHeading">SPOKEN LANGUAGES</h1>
      <div className="skills">
        <ul>
          <li>Urdu (Native)</li>
          <li>English (Professional)</li>
          <li>Japanese (Elementary)</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
