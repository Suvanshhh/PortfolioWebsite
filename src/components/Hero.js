import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hello" className={styles.hero}>
      <h1 className={styles.name}>Your Name</h1>
      <p className={styles.title}>Frontend Developer</p>
      <pre className={styles.codeBlock}>
{`// my number
const telephoneNum = "xxx xxx xxx";
// my e-mail
const email = "example@proton.me";
// links
const githubLink = "https://github.com/username";
const behanceLink = "https://behance.net/username";
const linkedinPage = "https://linkedin.com/in/username/";`}
      </pre>
    </section>
  );
}

export default Hero;
