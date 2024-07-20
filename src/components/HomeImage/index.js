import background from './maxresdefault-1 2.jpg'
import './index.css'

function HomeImage() {
  return (
    <div className="home-image-text">
        <div class="home-image">
            <img src={background} alt="Default Image" />
        </div>
        <div className="text">
            <h1>WELCOME TO MY WEBSITE</h1>
        </div>
    </div>
  );
}

export default HomeImage