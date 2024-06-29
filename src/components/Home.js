import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="picture">
        <img src="picture.jpg" alt="profile" />
      </div>
      <div className="introduction">
        <h1 className="title">Hello, I am </h1>
        <h1 style={{ color: "#DDB967", fontSize: "2rem" }}>MUHAMMAD OMAIS</h1>
        <div className="sub">
          I am a fourth year Electrical Engineering Student at SEECS,NUST
          ISLAMABAD,Pakistan
        </div>
      </div>
    </div>
  );
};

export default Home;
