import styles from "../styles/ProjectCard.module.css";
import "../../public/file.svg";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    name: "Portfolio Website",
    url: "https://yourportfolio.com",
    img: "/file.svg",
  },
  { name: "E-Commerce App", url: "https://ecommerce.com", img: "/file.svg" },
  { name: "Task Manager", url: "https://taskmanager.com", img: "/file.svg" },
  { name: "Blog Platform", url: "https://blog.com", img: "/file.svg" },
  { name: "Weather App", url: "https://weather.com", img: "/file.svg" },
  { name: "Finance Tracker", url: "https://finance.com", img: "/file.svg" },
];

export default function Projects() {
  return (
    <div className={styles.discoveryStream}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.column}>
        <div className={styles.cardGrid}>
          {projects.map((project, index) => (
            <article key={index} className={styles.card}>
              <a
                href={project.url}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.imgWrapper}>
                  <Image
                    src={project.img}
                    alt={project.url}
                    className={styles.cardImage}
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
