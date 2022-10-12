import * as React from 'react'
import Image from 'next/image'

interface IProjectsProps {
  link: string
  title: string
  languageLogo: string
  body: string
  technologies: string[]
  shadow_color: string
}

const Projects: React.FC<IProjectsProps> = ({
  link,
  title,
  languageLogo,
  body,
  technologies,
  shadow_color,
}) => {
  return (
    <div className="github-card">
      <a href={link}>
        <section className="header">
          <p>
            bandreit / <b>{title}</b>
          </p>
          <span className="logo">
            <Image src={languageLogo} width={35} height={35} />
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
          transition: all 0.2s ease-out 50ms;
          margin: 0 auto;
          position: relative;
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
