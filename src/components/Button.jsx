import React from 'react';
import styles from '../style';
const Button = (props) => {
  return (
    <button
      type='button'
      className={`w-[170px] h-[64px] py-4 px-6 bg-blue-gradient text-[18px] text-primary outline-none font-medium font-poppins rounded-[10px] ${props.styles} `}
    >
      Get Started
    </button>
  );
};

export default Button;
