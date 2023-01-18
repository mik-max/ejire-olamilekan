import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
function Carousel() {
     return (
          <section className = {styles.carouselSection}>
               <h1>What My Clients Say</h1>
               <div className={styles.carousel}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                         <SwiperSlide>
                              <div className={styles.carouselItem}>
                                   <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate at ornare phasellus tincidunt id diam nulla quis. Sed mauris urna sodales velit elit at maecenas. Fringilla pharetra venenatis sed sit mauris. Non proin nulla et sapien, enim facilisi sem. Porttitor ornare sit mattis morbi et risus. ”</p>
                                   <div className={styles.client}>
                                        <p className={styles.clientName}>Kwame Ansah</p>
                                        <p className={styles.clientRole}>Teny Hub, C.E.O</p>
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className={styles.carouselItem}>
                                   <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate at ornare phasellus tincidunt id diam nulla quis. Sed mauris urna sodales velit elit at maecenas. Fringilla pharetra venenatis sed sit mauris. Non proin nulla et sapien, enim facilisi sem. Porttitor ornare sit mattis morbi et risus. ”</p>
                                   <div className={styles.client}>
                                        <p className={styles.clientName}>Kwame Ansah</p>
                                        <p className={styles.clientRole}>Teny Hub, C.E.O</p>
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className={styles.carouselItem}>
                                   <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate at ornare phasellus tincidunt id diam nulla quis. Sed mauris urna sodales velit elit at maecenas. Fringilla pharetra venenatis sed sit mauris. Non proin nulla et sapien, enim facilisi sem. Porttitor ornare sit mattis morbi et risus. ”</p>
                                   <div className={styles.client}>
                                        <p className={styles.clientName}>Kwame Ansah</p>
                                        <p className={styles.clientRole}>Teny Hub, C.E.O</p>
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className={styles.carouselItem}>
                                   <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate at ornare phasellus tincidunt id diam nulla quis. Sed mauris urna sodales velit elit at maecenas. Fringilla pharetra venenatis sed sit mauris. Non proin nulla et sapien, enim facilisi sem. Porttitor ornare sit mattis morbi et risus. ”</p>
                                   <div className={styles.client}>
                                        <p className={styles.clientName}>Kwame Ansah</p>
                                        <p className={styles.clientRole}>Teny Hub, C.E.O</p>
                                   </div>
                              </div>
                         </SwiperSlide>
                         <SwiperSlide>
                              <div className={styles.carouselItem}>
                                   <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate at ornare phasellus tincidunt id diam nulla quis. Sed mauris urna sodales velit elit at maecenas. Fringilla pharetra venenatis sed sit mauris. Non proin nulla et sapien, enim facilisi sem. Porttitor ornare sit mattis morbi et risus. ”</p>
                                   <div className={styles.client}>
                                        <p className={styles.clientName}>Kwame Ansah</p>
                                        <p className={styles.clientRole}>Teny Hub, C.E.O</p>
                                   </div>
                              </div>
                         </SwiperSlide>
                    </Swiper>
               </div>
          </section>
     )
}

export default Carousel