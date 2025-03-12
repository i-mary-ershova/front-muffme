// // import React from 'react';
// // import styles from './Marquee.module.scss'; // Импортируем стили

// // const Marquee = () => {
// //   return (
// //     <div className={styles.marquee}>
// //       <span>Десерт твоей мечты ★★★★</span>
// //     </div>
// //   );
// // };

// // export default Marquee;


// import { useEffect } from 'react';
// import styles from './Marquee.module.scss';

// export default function Marquee() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const marqueeSpan = document.querySelector(`.${styles.marquee} span`);
//       if (marqueeSpan) {
//         const scrollX = window.scrollY;
//         const textWidth = marqueeSpan.clientWidth;
//         marqueeSpan.style.transform = `translateX(-${scrollX % textWidth}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={styles.marquee}>
//       <span>Your scrolling text goes hereaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
//     </div>
//   );
// }