import clsx from "clsx";

import { motion } from "framer-motion";

import heroImage16x9 from "../../images/hero-image-16-9.jpg";
import heroImage3x2 from "../../images/hero-image-3-2.jpg";
import heroImage2x3 from "../../images/hero-image-2-3.jpg";



import styles from "./header.module.css";

const heroBreakpoint16x9 = "1000px";
const heroBreakpoint2x3 = "550px";

function Header() {

  // Animations
  const animationsFromLeft = {
    initial: {x: "-100%", opacity: 0},
    whileInView: {x: 0, opacity: 1},
    viewport: {once: true},
    transition: {type: "spring", stiffness: 120, damping: 18, mass: 1.2}
  }

  const animationsScaleDown = {
    initial: {y: "-200%",scale: 2, opacity: 0},
    whileInView: {y: 0, scale: 1, opacity: 1},
    viewport: {once: true},
    transition: {type: "spring", stiffness: 100}
  }

  const animationsFromBottom = {
    initial: {y: "100%", opacity: 0},
    whileInView: {y: 0, opacity: 1},
    viewport: {once: true},
    transition: {type: "spring", stiffness: 100}
  }


  return (
    <header className={clsx("section", "mb_12")}>
      <motion.h1 {...animationsFromBottom} className={styles.title}>Время помогать!</motion.h1>
      <motion.h3 {...animationsFromBottom} className={clsx(styles.subtitle,"mt_4")}>
        Три&nbsp;вдохновляющие истории от&nbsp;тех,&nbsp;кто&nbsp;работает
        в&nbsp;нефтянке
      </motion.h3>
      <div className={clsx(styles.text)}>
        <motion.p {...animationsFromBottom}>
          Ежегодно 5&nbsp;декабря отмечается Международный день добровольца.
          Накануне праздника NEFT поговорила с&nbsp;людьми, которые совмещают
          работу в&nbsp;нефтегазовой компании с&nbsp;социальной активностью.
        </motion.p>
        <motion.p {...animationsFromBottom}>
          Мы&nbsp;узнали, почему состоявшиеся люди стремятся
          к&nbsp;волонтерству, как&nbsp;они меняют город, в&nbsp;котором живут,
          и&nbsp;помогает&nbsp;ли&nbsp;им&nbsp;в&nbsp;этом работодатель.
        </motion.p>
      </div>

      <picture>
        <source
          media={`(max-width: ${heroBreakpoint2x3})`}
          srcSet={`${heroImage2x3} 700w`}
        />
        <source
          media={`(max-width: ${heroBreakpoint16x9})`}
          srcSet={`${heroImage3x2} 1000w`}
        />
        <source
          media={`(min-width: ${heroBreakpoint16x9})`}
          srcSet={`${heroImage16x9} 1200w`}
        />
        <motion.img {...animationsFromBottom} className={clsx(styles.image, "mt_4")} src={heroImage16x9} alt="Волонтеры" />
      </picture>

    </header>
  );
}

export default Header;
