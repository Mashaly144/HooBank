import React from 'react';
import styles from '../style';
import { clients } from '../constants';
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap justify-between w-full`}>
      {clients.map((client) => (
        <div
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt='clients'
            className='sm:w-[190px] w-[100px] object-contain clients'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
