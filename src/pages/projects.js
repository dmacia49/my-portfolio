import styles from "../styles/ProjectCard.module.css";
import "../../public/file.svg";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    name: "Portfolio Website",
    url: "https://my-portfolio-orcin-xi-qcuazih9qu.vercel.app",
    img: "/por-image.png",
  },
  {
    name: "E-Commerce App",
    url: "https://frontend-ecom-nine.vercel.app/",
    img: "/e-com.png",
  },
  {
    name: "Essay Editor",
    url: "https://essay-editor-navy.vercel.app/",
    img: "/Essay-Editor.png",
  },
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
                    width={800}
                    height={800}
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
