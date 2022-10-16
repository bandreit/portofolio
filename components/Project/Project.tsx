import * as React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

interface IProjectsProps {
  link: string
  author: string
  title: string
  languageLogo: string
  body: string
  technologies: string[]
  shadow_color: string
  projectKey: number
}

const Projects: React.FC<IProjectsProps> = ({
  author,
  link,
  title,
  languageLogo,
  body,
  technologies,
  shadow_color,
  projectKey,
}) => {
  const { inView, ref } = useInView({ threshold: 0.2 })

  return (
    <div className={`github-card ${inView ? 'show' : ''}`} ref={ref}>
      <a href={link}>
        <section className="header">
          <p>
            {author} / <b>{title}</b>
          </p>
          <span className="logo">
            <Image src={languageLogo} width={35} height={35} alt="logo" />
          </span>
        </section>
        <section className="body">{body}</section>
        <section className="technologies">
          {technologies.map((technology, i) => (
            <span className="techIcon" key={i}>
              {technology}
            </span>
          ))}
        </section>
      </a>
      <style jsx>{`
        .github-card {
          max-width: 20rem;
          padding: 0.5rem;
          border: 1px solid black;
          font-weight: 200;
          box-shadow: 8px 8px 0px 0px ${shadow_color};
          margin: 0 auto;
          position: relative;
          transform: rotate(${projectKey % 2 == 0 ? '-' : ''}25deg)
            translateX(${projectKey % 2 == 0 ? '-' : ''}20vw);
          opacity: 0;
          transition: 0.5s all;
        }

        .show {
          transform: translateX(0);
          opacity: 1;
        }

        .github-card:hover {
          box-shadow: none;
          transform: translate(4px, 4px);
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          padding: 0.5rem;
        }

        .body {
          font-weight: 300;
        }

        .technologies {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
        }

        .techIcon {
          font-size: 0.9rem;
          padding: 0.3rem 1rem;
          border-radius: 5px;
          background: var(--color-primary);
          color: var(--color-white);
        }
      `}</style>
    </div>
  )
}

export default Projects
