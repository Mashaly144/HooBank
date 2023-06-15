import React from 'react';
import Button from './Button';
import { card } from '../assets';
import styles, { layout } from '../style';

const CardDeal = () => (
  <section id='product' className={layout.section}>
    {/* right */}
    <div className={layout.sectionInfo}>
      <h1 className={`${styles.heading2} mb-4`}>
        Find a better card deal <br className='sm:block hidden' /> in few easy
        steps.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] `}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button />
    </div>
    {/* left */}
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>
  </section>
);

export default CardDeal;
