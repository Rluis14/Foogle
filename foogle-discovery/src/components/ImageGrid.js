import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  const images = [
    '/Images/barbeque.jpg',
    '/Images/breakfest.jpg',
    '/Images/dessert.jpg',
    '/Images/pasta.jpg',
    '/Images/salad.jpg',
    '/Images/soup.jpg',
  ];

  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <img key={index} src={process.env.PUBLIC_URL + src} alt={`Food item ${index + 1}`} className="food-image" />
      ))}
    </div>
  );
};

export default ImageGrid;