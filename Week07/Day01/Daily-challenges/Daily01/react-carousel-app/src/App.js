import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {
  return (
    <div className="App" style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "20px" }}>
      <h1>React Carousel from Public Images</h1>
      <Carousel 
        showThumbs={true} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        showStatus={false}
      >
        <div>
          <img src="/images/hongkong.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="/images/macao.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="/images/japan.jpg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="/images/lasvegas.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
