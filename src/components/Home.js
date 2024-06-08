import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="picture">
        <img src="/picture.jpg" alt="profile" />
      </div>
      <div className="introduction"> 
      <div className="title">HI, I AM</div>
      <div style={{color: '#DDB967',fontSize:'2rem'}}>MUHAMMAD OMAIS</div>
      <div className="sub">I am a fourth year Electrical Engineering Student at SEECS,NUST ISLAMABAD,Pakistan</div>
    </div>
    </div>
  );
};

export default Home;
