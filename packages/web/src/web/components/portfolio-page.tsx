import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Check,
  Copy,
  Plus,
} from "lucide-react";
import { Architecture } from "./architecture";
import { projects, type Project } from "../lib/portfolio";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
function ProjectDialog({ project, close }: { project: Project; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialog.current?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      onCancel={close}
      aria-label={`Détails du concept ${project.name}`}
    >
      <div className="dialog-content">
        <button className="dialog-close" onClick={close} aria-label="Fermer les détails">
          <X />
        </button>
        <img src={`/images/${project.slug}.webp`} alt={`Aperçu du concept ${project.name}`} />
        <div className="dialog-body">
          <span className="eyebrow">CONCEPT PERSONNEL · LIVING SOFTWARES</span>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="concept-note">
            Marque ou outil imaginé. Ce concept n’est pas une commande client ; ses coordonnées et
            ses formulaires de démonstration sont fictifs.
          </p>
          <a
            className="button dark-button"
            href={`https://catalogue.livingsoftwares.com/${project.slug}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorer le site <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </dialog>
  );
}

export default function PortfolioPage() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("Tout");
  const [selected, setSelected] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();
  const visible = projects.filter((p) => filter === "Tout" || p.category === filter);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("loanhacheme87@gmail.com");
      setCopied(true);
    } catch {
      window.location.href = "mailto:loanhacheme87@gmail.com";
    }
  }
  return (
    <>
      <header className="header">
        <a className="wordmark" href="#accueil" aria-label="Loan Hacheme, accueil">
          loan<span>hacheme</span>
          <i />
        </a>
        <nav aria-label="Navigation principale" className={menu ? "nav menu-open" : "nav"}>
          {[
            ["Projets", "projets"],
            ["Expertise", "expertise"],
            ["À propos", "apropos"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-contact">
          Parlons de votre projet <ArrowUpRight size={17} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section className="hero section-shell" id="accueil">
          <motion.div
            className="hero-copy"
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability mono">
              <span /> OUVERT AUX OPPORTUNITÉS <span className="location">COTONOU, BÉNIN</span>
            </div>
            <h1>
              De l’idée
              <br />à l’interface.
              <br />
              <span>
                Et tout ce qu’il
                <br />y a derrière.
              </span>
            </h1>
            <p className="hero-intro">
              Moi, c’est <strong>Loan Hacheme.</strong> Je conçois des architectures claires, des
              données structurées et des interfaces qui donnent envie. Avec l’IA comme accélérateur.
            </p>
            <div className="hero-actions">
              <a className="button dark-button" href="#projets">
                Explorer mes projets <ArrowDown size={17} />
              </a>
              <a className="cv-link" href="/CV-Loan-Hacheme.pdf" download>
                Mon CV <Download size={16} />
              </a>
            </div>
            <div className="hero-foot mono">
              <span>ARCHITECTURE × CRÉATIVITÉ</span>
              <span>PORTFOLIO — 2026</span>
            </div>
          </motion.div>
          <motion.div
            className="hero-art"
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <Architecture />
          </motion.div>
        </section>
        <div className="expertise-strip mono">
          <span>ARCHITECTURE LOGICIELLE</span>
          <Plus />
          <span>DATA & BACKEND</span>
          <Plus />
          <span>FRONTEND</span>
          <Plus />
          <span>OUTILS IA</span>
          <span className="strip-right">PENSER. CONSTRUIRE. AFFINER.</span>
        </div>
        <section className="projects section-shell" id="projets">
          <Reveal>
            <div className="section-top">
              <span className="eyebrow">01 / RÉALISATIONS SÉLECTIONNÉES</span>
              <span className="mono">LE CODE PREND FORME.</span>
            </div>
            <div className="section-heading">
              <h2>
                Des idées.
                <br />
                Des sites <span>bien réels.</span>
              </h2>
              <p>
                Une sélection de mes concepts pour Living Softwares. Des univers différents, une
                même exigence : faire beau, faire clair, faire fonctionner.
              </p>
            </div>
          </Reveal>
          <Reveal className="filter-row">
            <div className="filters" aria-label="Filtrer les réalisations">
              {["Tout", "Expérience de marque", "Studios créatifs", "Outils & interfaces"].map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={filter === f ? "active" : ""}
                  >
                    {f}
                    {f === "Tout" && <sup>06</sup>}
                  </button>
                ),
              )}
            </div>
            <span className="mono project-count">
              {String(visible.length).padStart(2, "0")} PROJETS
            </span>
          </Reveal>
          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: reduced ? 0 : i * 0.04 }}
                  className="project-card"
                >
                  <button
                    className="project-image"
                    style={{ background: project.color }}
                    onClick={() => setSelected(project)}
                    aria-label={`Découvrir ${project.name}`}
                  >
                    <div className="browser-bar">
                      <span />
                      <span />
                      <span />
                      <small className="mono">{project.slug}.concept</small>
                      <ArrowUpRight size={12} />
                    </div>
                    <img
                      loading="lazy"
                      src={`/images/${project.slug}.webp`}
                      alt={`Site ${project.name} — ${project.label}`}
                    />
                    <span className="project-overlay">
                      Découvrir le concept <ArrowUpRight size={18} />
                    </span>
                    <span className="concept-badge mono">CONCEPT</span>
                  </button>
                  <div className="project-caption">
                    <div>
                      <span className="project-number mono">
                        0{projects.indexOf(project) + 1} / {project.label}
                      </span>
                      <h3>
                        <button onClick={() => setSelected(project)}>{project.name}</button>
                      </h3>
                    </div>
                    <a
                      href={`https://catalogue.livingsoftwares.com/${project.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvrir le site ${project.name}`}
                    >
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="catalogue-link">
            <p>
              <span className="tiny-square" /> Des concepts, pas des commandes clients.
            </p>
            <a
              href="https://catalogue.livingsoftwares.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir tous mes concepts dans le catalogue <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="expertise-section" id="expertise">
          <div className="section-shell">
            <Reveal>
              <div className="section-top">
                <span className="eyebrow">02 / MON TERRAIN DE JEU</span>
                <span className="mono">DU SYSTÈME AU PIXEL.</span>
              </div>
              <div className="section-heading">
                <h2>
                  Ce qui se voit.
                  <br />
                  Ce qui <span>tient le tout.</span>
                </h2>
                <p>
                  Je ne pense pas le frontend, les données et le backend séparément. Je les conçois
                  comme les parties d’un même système.
                </p>
              </div>
            </Reveal>
            <div className="expertise-grid">
              {[
                [
                  "01",
                  "Architecture logicielle",
                  "Penser les fondations.",
                  "Du besoin métier aux responsabilités de chaque composant : une structure claire, des API cohérentes et des services qui travaillent ensemble.",
                  ["API REST", "FastAPI", "Conception de systèmes"],
                ],
                [
                  "02",
                  "Gestion de data",
                  "Donner du sens aux données.",
                  "Modéliser les relations, organiser les transactions et faire évoluer les schémas pour que la donnée reste utile, exploitable et cohérente.",
                  ["PostgreSQL", "SQLAlchemy", "Alembic", "SQL"],
                ],
                [
                  "03",
                  "Développement frontend",
                  "Rendre la complexité simple.",
                  "Traduire une direction visuelle en interfaces responsive. Soigner la hiérarchie, les détails et la cohérence d’un Design System.",
                  ["JavaScript", "HTML / CSS", "Design Systems"],
                ],
                [
                  "04",
                  "Outils & workflows IA",
                  "Accélérer sans perdre le contrôle.",
                  "Explorer des pistes, prototyper et développer avec les outils IA. Questionner les propositions, vérifier le code et rester maître de la solution.",
                  ["Développement assisté", "Prototypage", "Validation"],
                ],
              ].map(([n, title, sub, desc, tags]) => (
                <Reveal key={n as string} className="expertise-card">
                  <div className="expertise-card-top">
                    <span className="mono">{n}</span>
                    <ArrowUpRight size={24} />
                  </div>
                  <h3>{title}</h3>
                  <strong>{sub}</strong>
                  <p>{desc}</p>
                  <div className="skill-tags">
                    {(tags as string[]).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="about section-shell" id="apropos">
          <Reveal className="about-intro">
            <span className="eyebrow">03 / DERRIÈRE LES PROJETS</span>
            <h2>
              Curieux de nature.
              <br />
              <span>
                Constructeur
                <br />
                par choix.
              </span>
            </h2>
            <div className="about-signature">
              Loan Hacheme<span className="mono">DÉVELOPPEUR · COTONOU</span>
            </div>
            <p>
              Étudiant en dernière année de Licence Informatique et Réseaux de Télécommunications à
              ESGIS Bénin, orienté architecture logicielle. J’aime comprendre comment les choses
              fonctionnent, puis les rendre plus simples à utiliser.
            </p>
            <a className="cv-link" href="/CV-Loan-Hacheme.pdf" download>
              Le parcours complet dans mon CV <Download size={16} />
            </a>
          </Reveal>
          <div className="timeline">
            <Reveal>
              <span className="eyebrow">EXPÉRIENCE & PROJETS TECHNIQUES</span>
              {[
                [
                  "ZSI / Zsquare Solutions",
                  "Stage · Développement logiciel",
                  "Participation au frontend de ZedScore.ai et application du Design System. Intégrations de paiement KKiaPay et Flutterwave, pages de paiement et webhooks.",
                  "FRONTEND · BACKEND · PAIEMENT",
                ],
                [
                  "CodeLab",
                  "Projet personnel · Apprentissage du code",
                  "Conception d’une PWA pour les apprenants francophones. Backend FastAPI et service d’exécution de code Python, JavaScript et C.",
                  "ARCHITECTURE · FASTAPI · PWA",
                ],
                [
                  "TryIt",
                  "Projet personnel / académique · Gestion financière",
                  "Backend pour petits commerçants au Bénin : authentification OTP/JWT, suivi des transactions, dettes et reçus, schéma PostgreSQL.",
                  "POSTGRESQL · AUTH · API",
                ],
                [
                  "ESGIS Bénin",
                  "Licence IRT · Diplôme prévu en 2027",
                  "Dernière année de formation, avec une orientation architecture logicielle. Français langue maternelle, anglais B2.",
                  "FORMATION · ARCHITECTURE LOGICIELLE",
                ],
              ].map(([title, subtitle, desc, tags]) => (
                <article key={title} className="timeline-item">
                  <span className="timeline-dot" />
                  <h3>{title}</h3>
                  <span className="timeline-subtitle">{subtitle}</span>
                  <p>{desc}</p>
                  <span className="mono timeline-tags">{tags}</span>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
        <section className="contact" id="contact">
          <Reveal className="section-shell">
            <div className="section-top">
              <span className="eyebrow">04 / LA SUITE, ENSEMBLE ?</span>
              <span className="availability mono">
                <span /> À L’ÉCOUTE
              </span>
            </div>
            <a className="contact-title" href="mailto:loanhacheme87@gmail.com">
              Une idée en tête ?<br />
              <span>Construisons-la.</span>
              <ArrowUpRight />
            </a>
            <div className="contact-bottom">
              <div>
                <p>
                  Un projet, un stage, une collaboration.
                  <br />
                  La discussion commence par un message.
                </p>
                <div className="email-line">
                  <a href="mailto:loanhacheme87@gmail.com">loanhacheme87@gmail.com</a>
                  <button onClick={copyEmail} aria-label="Copier l’adresse e-mail">
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                  </button>
                  <output className="copy-state" aria-live="polite">
                    {copied ? "Copié !" : ""}
                  </output>
                </div>
              </div>
              <div className="socials">
                <a href="https://github.com/Snart2kz" target="_blank" rel="noopener noreferrer">
                  <Github size={17} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/loan-hacheme-177439385"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={17} />
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
                <a href="/CV-Loan-Hacheme.pdf" download>
                  <Download size={17} />
                  Mon CV
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="footer">
        <span className="wordmark">
          loan<span>hacheme</span>
          <i />
        </span>
        <span className="mono">© 2026 LOAN HACHEME</span>
        <a href="#accueil">
          Retour en haut <ArrowUpRight size={16} />
        </a>
      </footer>
      {selected && <ProjectDialog project={selected} close={() => setSelected(null)} />}
    </>
  );
}
