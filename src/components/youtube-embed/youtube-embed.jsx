import styles from "./youtube-embed.module.css";

function YoutubeEmbed({video}) {
  return (
    <iframe
      className={styles.video}
      src={`https://www.youtube.com/embed/${video}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
    </iframe>
  );
}

export default YoutubeEmbed;


