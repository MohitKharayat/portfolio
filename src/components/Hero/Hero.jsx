import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mohit Kharayat</h1>
        <p>
        I am a computer science student, full-stack developer, and DevOps enthusiast with a strong foundation in computer science and software engineering.I am passionate about staying on the cutting edge of technology, engaging with the tech community, attending workshops, and exploring new tools.
        </p>
        <br />
        <a href="mailto:mohitkharayat0@gmail.com" className={styles.contactBtn}>Contact me</a>
        <br />
        <a href="https://drive.google.com/uc?export=download&id=1g43rdcP1AYoY4rsPwjH4XrTW04DHHQnC" className={styles.resumeBtn}>Resume </a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="My-Image" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  );
}
