import { useState } from 'react';
import './Trending.css';

const productData = [
  { image: 'https://via.placeholder.com/200?text=Product+1', description: 'Product 1 description' },
  { image: 'https://via.placeholder.com/200?text=Product+2', description: 'Product 2 description' },
  { image: 'https://via.placeholder.com/200?text=Product+3', description: 'Product 3 description' },
  { image: 'https://via.placeholder.com/200?text=Product+4', description: 'Product 4 description' },
  { image: 'https://via.placeholder.com/200?text=Product+5', description: 'Product 5 description' },
  { image: 'https://via.placeholder.com/200?text=Product+6', description: 'Product 6 description' },
  { image: 'https://via.placeholder.com/200?text=Product+7', description: 'Product 7 description' },
  { image: 'https://via.placeholder.com/200?text=Product+8', description: 'Product 8 description' },
  { image: 'https://via.placeholder.com/200?text=Product+9', description: 'Product 9 description' },
  { image: 'https://via.placeholder.com/200?text=Product+10', description: 'Product 10 description' },
];

const Trending = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < productData.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="trending-container">
      <h2 className="trending-heading">Trending Products</h2>
      <div className="trending-slider-wrapper">
        <button className="arrow arrow-left" onClick={prevSlide} disabled={startIndex === 0}>
          &#8592;
        </button>
        <div className="trending-slider">
          {productData.slice(startIndex, startIndex + itemsPerPage).map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt={`Product ${index + 1}`} />
              <div className="description-overlay">
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow arrow-right" onClick={nextSlide} disabled={startIndex + itemsPerPage >= productData.length}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Trending;
