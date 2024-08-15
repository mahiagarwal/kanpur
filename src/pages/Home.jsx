import Carousel from "../components/Carousel";
import Trending from "../components/Trending";
import './Home.css';  // Import styles for the page

const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel-section">
        <Carousel />
      </div>
      <div className="trending-section">
        <Trending />
      </div>
    </div>
  );
};

export default Home;
