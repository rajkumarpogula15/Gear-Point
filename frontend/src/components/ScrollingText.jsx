import React from 'react';


const ScrollingText = ({ text }) => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-text" data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default ScrollingText;
