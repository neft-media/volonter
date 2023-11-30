import clsx from "clsx";

import heroImage from "../../images/hero-image.jpg";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={clsx("section", "mb_12")}>
      <h1 className={styles.title}>Зачем искать время на&nbsp;волонтерство</h1>
      <div className={clsx(styles.text)}>
        <h3 className={clsx("mt_4")}>
          Три вдохновляющие истории от&nbsp;тех, кто работает
          в&nbsp;нефтегазовой отрасли
        </h3>
        <p>
          Ежегодно 5&nbsp;декабря отмечается Международный день добровольца.
          Накануне праздника NEFT поговорила с&nbsp;людьми, которые совмещают
          работу в&nbsp;нефтегазовой компании с&nbsp;социальной активностью.
        </p>
        <p>
          Мы&nbsp;узнали, почему состоявшиеся люди стремятся
          к&nbsp;волонтерству, как они меняют город, в&nbsp;котором живут,
          и&nbsp;помогает&nbsp;ли им&nbsp;в&nbsp;этом работодатель.
        </p>
      </div>
      <img
        className={clsx(styles.image, "mt_4")}
        src={heroImage}
        alt="Волонтеры"
      />
    </header>
  );
}

export default Header;
