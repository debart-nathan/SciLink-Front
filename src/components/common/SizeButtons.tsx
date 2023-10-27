import React, { useState } from 'react';

type SizeButtonProps = {
  onFontSizeChange: (newFontSize: string) => void;
};

const SizeButton = ({ onFontSizeChange }: SizeButtonProps) => {

 const buttons = ["1em", "1.2em", "1.4em"];
  const [activeButton, setActiveButton] = useState(buttons[0]);

   const handleButtonClick = (buttonSize: string) => {
     setActiveButton(buttonSize);
     onFontSizeChange(buttonSize);
   };

  return (
    <div className="buttons">
      {buttons.map((buttonSize, index) => (
        <span
          key={index}
          className={`btn btnsize ${buttonSize === activeButton ? "active" : ""}`}
          onClick={() => handleButtonClick(buttonSize)}
        >
          A
        </span>
      ))}
    </div>
  );
};
export default SizeButton;