import * as React from 'react'
import Image from 'next/image'

interface IHeroProps {}

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <section id="home">
      <div className="intro-section">
        <img className="background" src="/unsplash.jpg" alt="background" />
        <h1>
          <span className="first-name">Andrei</span>
          <br />
          <span className="last-name">Bostan</span>
        </h1>

        <h2 className="description">
          Hello there, I'm a <span className="colored">Software Engineer</span>{' '}
          - I do some cool things with my 💻
        </h2>

        <button> Say hi! {` `} 👋 </button>
      </div>

      <div className="image-section">
        <Image src={'/profile-original.png'} width={1024} height={1024} />
      </div>

      <style jsx>{`
        .background {
          opacity: 0.1;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          max-height: 55rem;
          object-fit: cover;
          z-index: -1;
        }

        section {
          height: 100vh;
          max-height: 80vh;
          display: flex;
          justify-content: space-between;
          max-width: var(--max-width-content);
          margin: 0 auto;
        }

        .colored {
          color: var(--color-primary);
        }

        .intro-section {
          margin-top: 25vh;
          padding: 0 5rem;
        }

        .first-name {
          font-size: 8rem;
          line-height: 1rem;
        }

        .last-name {
          font-size: 6rem;
        }

        h2 {
          font-weight: 500;
        }

        .image-section {
          max-width: 62rem;
          align-self: flex-end;
          margin-bottom: -5rem;
        }

        button {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
          transition-duration: 0.2s;
          cursor: pointer;
          border: 5px solid black;
          border-radius: 5px;
          border-color: var(--color-secondary);
          border-radius: 8px;
          background-color: var(--color-primary);
          color: var(--color-secondary);
        }

        button:hover {
          background-color: var(--color-secondary);
          color: var(--color-primary);
        }

        @media (max-width: 766.98px) {
          .intro-section {
            top: 15vh;
          }

          section {
            flex-direction: column;
          }

          .intro-section {
            margin-top: 10vh;
            padding: 0 2rem;
          }

          .first-name {
            font-size: 4rem;
          }

          .last-name {
            font-size: 2rem;
          }

          .description {
            font-size: 1.5rem;
            font-weight: 400;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
