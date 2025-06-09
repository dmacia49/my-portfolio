import styles from '../styles/Hero.module.css'; // Import the styles
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();
  const handleExploreClick = () => {router.push('/projects');}
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Hi, I'm Daniel. A Passionate Full-Stack Developer.</h1>
        <p>Building innovative and scalable web applications.</p>
        <button onClick={handleExploreClick}>Explore My Work</button>
      </div>
    </section>
  );
};

export default Hero;
