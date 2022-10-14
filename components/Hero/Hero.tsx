import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IHeroProps {}

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <section id="home" className="home">
      <div className="intro-section">
        <img className="background" src="/unsplash.jpg" alt="background" />
        <h1 className="first-name">Andrei Bostan</h1>

        <h2 className="description">
          Hello there, I'm a <span className="colored">Software Engineer</span>{' '}
          - I do some cool things with my 💻
        </h2>

        <Link href="#contact">
          <button>Say hi! {` `} 👋</button>
        </Link>
      </div>

      <div className="image-section">
        <Image
          src="/profile-original.png"
          width={1024}
          height={1024}
          placeholder="blur"
          blurDataURL="/profile-original.png"
        />
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

        .home {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--max-width-content);
          margin: 0 auto;
        }

        .intro-section {
          padding: 0 5rem;
        }

        .first-name {
          font-size: 8rem;
          line-height: 8rem;
          margin: 0;
        }

        .colored {
          color: var(--color-primary);
        }

        h2 {
          font-weight: 500;
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

        .description {
          font-size: 2rem;
        }

        @media (max-width: 766.98px) {
          .home {
            flex-direction: column;
            overflow-x: hidden;
            max-height: initial;
          }

          .intro-section {
            margin-top: 10vh;
            padding: 0 2rem;
          }

          .image-section {
            position: relative;
            top: -6rem;
            right: -6rem;
          }

          .first-name {
            font-size: 4rem;
            line-height: 4rem;
          }

          .description {
            font-size: 1.5rem;
            font-weight: 400;
          }

          button {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
