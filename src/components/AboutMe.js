import styles from "../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          Hi I am Daniel Macias, a passionate Full-Stack Developer with a
          Masters degree in Computer Science. I specialize in building dynamic,
          scalable web applications using modern technologies like Next.js,
          Node.js Express.js, PostgreSQL/MongoDB, and NextAuth.js. With a strong
          foundation in computer networking, software engineering, and
          reinforcement learning, I bring a problem-solving mindset to every
          project. Whether optimizing backend APIs or designing intuitive UIs, I
          thrive on creating high-performance applications. Outside of coding, I
          enjoy exploring emerging tech trends, refining my skills in machine
          learning and cloud computing, and contributing to open-source
          projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
