import clsx from "clsx";

import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import YoutubeEmbed from "../youtube-embed/youtube-embed";

import styles from "./profile.module.css";
import circle from "../../images/circle.svg";

const carouselStyles = {
  withIndicators: true,
  slideSize: "33.333333%",
  slideGap: "md",
  loop: true,
  align: "center",
  slidesToScroll: 3
}

function Profile({hero, changeCarouselImage}) {

  return (
    <section className={clsx(styles.profile, "mt_12")}>

      <div className={clsx(styles.header, "section", "pt_30")}>
        <div>
          <h2>{hero.title}</h2>
          <h4 className={clsx("mt_6")}>{hero.name}</h4>
          <p className={clsx(styles.job, "mt_2", "mb_6")}>{hero.job}</p>
        </div>
        <div className={clsx(styles.portraitContainer)}>
          <img src={circle} className={clsx(styles.circle)} alt="circle" />
          <img
            src={hero.portrait}
            className={clsx(styles.portrait)}
            alt="circle"
          />
        </div>
      </div>


      <div className={clsx(styles.content, "section")}>
        <div className={styles.interview}>
          <div>
            <div className={styles.video}>
              {/* <YoutubeEmbed video={hero.video}/> */}
            </div>
          </div>
          <div className={clsx(styles.interviewText)}>
            {hero.interviewText}
          </div>
        </div>

        <Carousel {...carouselStyles} classNames={styles.control}>
          {
            hero.photos.map((photo, idx) => (
              <Carousel.Slide key={photo.id}>
                <img className={clsx(styles.carouselImage)} src={photo.small} onClick={() => changeCarouselImage(idx, hero.photos)}/>
              </Carousel.Slide>
            ))
          }
        </Carousel>

      </div>

    </section>
  );
}

export default Profile;
