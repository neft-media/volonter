import { useState, useEffect } from "react";
import clsx from "clsx";

import { Loader } from '@mantine/core';

import styles from "./progressive-image.module.css";


const ProgressiveImg = ({ placeholderSrc, src, classes, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? styles.loading : styles.loaded;

  return (
    <>
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
        className={clsx(classes, customClass)}
      />
      {
        imgSrc === placeholderSrc ? <Loader className={styles.loader} color="rgba(255, 255, 255, 1)" /> : <></>
      }
    </>
  );
};
export default ProgressiveImg;
