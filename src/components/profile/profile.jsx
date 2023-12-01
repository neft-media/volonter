import clsx from "clsx";

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';

import { motion } from "framer-motion";

import YoutubeEmbed from "../youtube-embed/youtube-embed";

import styles from "./profile.module.css";
import circle from "../../images/circle.svg";

const carouselStyles = {
  withIndicators: true,
  slideSize: "33.333333%",
  slideSize: { base: '80%', sm: '33.333333%' },
  slideGap: "md",
  align: "center",
}

function Profile({hero, changeCarouselImage}) {

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  // Animations
  const animationsFromBottom = {
    initial: {y: 100, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    viewport: {once: true},
    transition: {type: "spring", stiffness: 100}
  }

  return (
    <section className={clsx(styles.profile)}>

      <div className={clsx(styles.header, "section", "pt_30")}>
        <div>
          <motion.h2 {...animationsFromBottom}>{hero.title}</motion.h2>
          <motion.h4 {...animationsFromBottom} className={clsx("mt_6")}>{hero.name}</motion.h4>
          <motion.p {...animationsFromBottom} className={clsx(styles.job, "mt_2", "mb_6")}>{hero.job}</motion.p>
        </div>
        <motion.div {...animationsFromBottom} className={clsx(styles.portraitContainer)}>
          <img src={circle} className={clsx(styles.circle)} alt="circle" />
          <img
            src={hero.portrait}
            className={clsx(styles.portrait)}
            alt="circle"
          />
        </motion.div>
      </div>


      <div className={clsx(styles.content, "section")}>
        <div className={styles.interview}>
          <div>
            <motion.div {...animationsFromBottom} className={styles.video}>
              <YoutubeEmbed video={hero.video}/>
            </motion.div>
          </div>
          <motion.div {...animationsFromBottom}className={clsx(styles.interviewText)}>
            {hero.interviewText}
          </motion.div>
        </div>

        <Carousel {...carouselStyles} slidesToScroll={mobile ? 1 : 3} classNames={styles} className={clsx(styles.carousel, "mt_12")}>
          {
            hero.photos.map((photo, idx) => (
              <Carousel.Slide key={photo.id}>
                <motion.img {...animationsFromBottom} className={clsx(styles.carouselImage)} src={photo.small} onClick={() => changeCarouselImage(idx, hero.photos)}/>
              </Carousel.Slide>
            ))
          }
        </Carousel>

      </div>

    </section>
  );
}

export default Profile;
