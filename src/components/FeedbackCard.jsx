import React from 'react';
import { quotes } from '../assets';
import styles from '../style';
const FeedbackCard = ({ content, name, title, img }) => (
  <div
    id='clients'
    className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card gap-4'
  >
    <img src={quotes} alt='quote' className='w-[40px] h-[27px] mb-4' />
    <p className={styles.paragraph}>{content}</p>
    <div className='flex flex-row items-center '>
      <img
        src={img}
        alt='avater'
        className='w-[48px] h-[48px] object-contain'
      />
      <div className='flex flex-col justify-between items-start ml-4 '>
        <h4 className={`font-poppins font-semibold text-[20px] text-white `}>
          {name}
        </h4>
        <p
          className={`font-poppins text-dimWhite  text-[18px] leading-[32px] `}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);
export default FeedbackCard;
