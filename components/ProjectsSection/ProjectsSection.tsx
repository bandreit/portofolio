import * as React from 'react'
import Project from 'components/Project'
import { projects } from '../../data/projects'

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <h1 className="section-title">Projects I've been working on</h1>
      <section className="cards">
        {projects.map((project, i) => (
          <Project {...project} projectKey={i} key={i} />
        ))}
      </section>
      <style jsx>{`
        .cards {
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-row-gap: 2rem;
          grid-column-gap: 2rem;
          max-width: 50rem;
          margin: 0 auto;
        }

        .section-title {
          color: var(--color-primary);
          font-size: 2rem;
          text-align: center;
        }

        @media (max-width: 760px) {
          .cards {
            grid-template-columns: 1fr;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection
