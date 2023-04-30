import './home.css'
import Navbar from '../../Components/Navbar/Navbar';
import imagePath from "../../polar-bear.jpg"

function Home() {
  return (
    <div className="">
      <header className="">
        <div className="imgwrapper">
          <img src={imagePath} className="image" width="720" height="500" />
        </div>
      </header>
    </div>
  );
}

export default Home;