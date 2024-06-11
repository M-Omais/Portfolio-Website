import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <h1>
        CON<span className="heading">TACT</span>
      </h1>
      <div className="table">
        <div className="main">
          <img className="icons" src="./home.png" alt="house" />
          <p>Location</p>
        </div>
        <p>Lahore, Pakistan</p>
      </div>
      <div className="table">
        <div className="main">
          <img className="icons" src="./phone.png" alt="house" />
          <p>Phone</p>
        </div>
        <p>+92 313 4040528</p>
      </div>
      <div className="table">
        <div className="main">
          <img className="icons" src="./email.png" alt="house" />
          <p>Email</p>
        </div>
        <p>owaseem.bee21seecs@seecs.edu.pk</p>
      </div>
      <div className="table">
        <div className="main">
          <img className="icons" src="./website.png" alt="house" />
          <p>Website</p>
        </div>
        <p>owaseem.bee21seecs@seecs.edu.pk</p>
      </div>
      <div className="table">
        <div className="main">
          <img className="icons" src="./linkedin.png" alt="house" />
          <p>Linkedin</p>
        </div>
        <p>linkedin.com/in/momais</p>
      </div>
      <div className="table">
        <div className="main">
          <img className="icons" src="./github.png" alt="house" />
          <p>Github </p>
        </div>
        <p>linkedin.com/in/momais</p>
      </div>
    </div>
  );
};

export default Contact;
