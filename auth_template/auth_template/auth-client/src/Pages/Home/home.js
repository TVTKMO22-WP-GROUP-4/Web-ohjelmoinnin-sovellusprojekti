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
      <p className='tervetuloa'>Tervetuloa! Luo käyttäjä tai kirjaudu sisään tarkastellaksesi ilmasto tietoja!</p>
    </div>
  );
}

export default Home;