import React from 'react';
import styles from '../style';
import Button from './Button';
const CTA = () => (
  <section
    className={`${styles.padding} ${styles.marginY} ${styles.flexCenter}  sm:flex-row flex-col items-center cts-card rounded-[20px] `}
  >
    <div className='flex-1 flex flex-col '>
      <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
      <p className={`${styles.paragraph} max-w-[470px] leading-[28px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
      <Button />
    </div>
  </section>
);

export default CTA;
