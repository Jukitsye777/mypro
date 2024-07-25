import React from 'react';
import Lottie from 'react-lottie';
import animationData from './maner.json'; // Adjust the path accordingly


const LottieBackground = ({ children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="lottie-background">
       {children} {/* Render children here */}
      <Lottie options={defaultOptions} />
     
    </div>
  );
};



export default LottieBackground
