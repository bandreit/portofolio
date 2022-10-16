import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IHeroProps {}

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <section id="home" className="home">
      <div className="wrapper">
        <div className="intro-section">
          <h1 className="first-name">Andrei Bostan</h1>

          <h2 className="description">
            Hello there, I'm a{' '}
            <span className="colored">Software Engineer</span> - I do some cool
            things with my 💻
          </h2>

          <Link href="#contact">
            <button className="buttonImageWrapper">
              Say hi! {` `}{' '}
              <Image src="/hand.png" height={30} width={30}></Image>
            </button>
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
      </div>

      <style jsx>{`
        .home {
          background-color: #fcfdfe;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23EFF0F1' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23C8C8C8'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
        }

        .wrapper {
          max-width: var(--max-width-content);
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          padding: 0.8rem 1rem;
          font-size: 1.5rem;
          transition-duration: 0.2s;
          cursor: pointer;
          border: 5px solid black;
          border-color: var(--color-secondary);
          border-radius: 0;
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

        .buttonImageWrapper {
          font-size: 1.3rem;
          display: flex;
          gap: 5px;
          align-items: center;
        }

        @media (max-width: 766.98px) {
          .wrapper {
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
