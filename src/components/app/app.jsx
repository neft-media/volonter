import { useState } from 'react';

import clsx from 'clsx';

import { Modal, CloseButton } from '@mantine/core';
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';

import Header from '../header/header';
import Profile from '../profile/profile';

import heroes from "../utils/heroes";

import styles from "./app.module.css";


const modalStyles = {
  xOffset: 0,
  yOffset: 0,
  fullScreen: true,
  returnFocus: false,
  trapFocus: false,
  radius: 0,
  centered: true,
  size: "auto",
  padding: 0,
  withCloseButton: false,
  styles: {
    content: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
    }
  }
}

const carouselStyles = {
  withIndicators: true,
  slideSize: "fit-content",
  slideGap: "40px",
  align: "center",
  slidesToScroll: 1,
  styles: {
    slide: {
      maxWidth: "80%",
    }
  }
}

const closeButtonStyles = {
  styles: {
    radius: "50%",
    root: {
      position: "fixed",
      right: "10px",
      top: "10px",
      zIndex: 100,
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.3)"
    }
  }
}



function App() {

  const TRANSITION_DURATION = 300;

  const [activeImage, setActiveImage] = useState(null);
  const [activeGallery, setActiveGellery] = useState(null);
  const [embla, setEmbla] = useState(null);

  const handleModal = (image, gallery) => {
    if (activeImage!=null) {
      setActiveImage(null);
      setActiveGellery(null);
    }
    else {
      setActiveImage(image);
      setActiveGellery(gallery);
    }
  }

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);


  return (
    <div className={clsx("mt_12")}>
      <Header />

      {heroes.map(hero => (
        <Profile key={hero.id} hero={hero} changeCarouselImage={handleModal}/>
      ))}

      <Modal opened={activeImage!=null} onClose={handleModal} {...modalStyles} transitionProps={{ duration: TRANSITION_DURATION, transition: "slide-right" }}>
        <CloseButton {...closeButtonStyles} size="lg" onClick={handleModal}/>
        {
          (activeImage != null) &&
              <Carousel {...carouselStyles} getEmblaApi={setEmbla} initialSlide={activeImage}>
                {
                  activeGallery.map((photo, idx) => (
                    <Carousel.Slide key={idx}>
                      <img className={clsx(styles.carouselImage)} src={photo.big}/>
                    </Carousel.Slide>
                  ))
                }
              </Carousel>
        }
      </Modal>

    </div>
  );
}

export default App;
