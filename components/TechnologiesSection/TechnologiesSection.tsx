import * as React from 'react'
import Image from 'next/image'

interface ITechnologiesProps {}

const TechnologiesSection: React.FC<ITechnologiesProps> = (props) => {
  const [pageScrollY, setPageScrollY] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      let { scrollY } = window
      setPageScrollY((scrollY - 1000) * 2)
    })
  }, [])

  return (
    <section id="about" className="about">
      <h1 className="section-title">
        Tech I use to build that cool stuff with
      </h1>
      <div className="technologies">
        <Image
          src={'/logos/serverless.png'}
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/serverless.png'}
          alt="serverless"
        />
        <Image
          src={'/logos/aws.png'}
          width={180}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/aws.png'}
          alt="aws"
        />
        <Image
          src={'/logos/react.png'}
          width={120}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/react.png'}
          alt="react"
        />
        <Image
          src={'/logos/ts.png'}
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/ts.png'}
          alt="ts"
        />
        <Image
          src={'/logos/next.png'}
          width={180}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/next.png'}
          alt="next"
        />
        <Image
          src={'/logos/rest.png'}
          width={200}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/rest.png'}
          alt="rest"
        />
        <Image
          src={'/logos/graphql.png'}
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL={'/logos/graphql.png'}
          alt="graphql"
        />
      </div>
      <style jsx>{`
        .about {
          overflow: hidden;
          margin-top: -3rem;
        }

        .section-title {
          margin-top: 5rem;
          color: var(--color-primary);
          font-size: 2rem;
          text-align: center;
          transform: rotate(10deg) translateY(140px) translateX(1.2rem);
        }

        .technologies {
          z-index: 3;
          padding: 10rem 0 20rem 0;
          display: flex;
          flex-wrap: nowrap;
          transform-origin: left top;
          justify-content: center;
          align-items: center;
          gap: 5rem;
          transform: rotate(10deg) translateX(${-1 * pageScrollY - 400}px);
          width: 200vh;
        }

        .big-text {
          font-size: 6rem;
          white-space: nowrap;
        }

        @media (max-width: 425px) {
          .technologies {
            transform: rotate(10deg) translateY(8rem)
              translateX(${-1 * pageScrollY - 800}px);
            width: 100vh;
            gap: 2rem;
            padding: 1rem 0 15rem 0;
          }
        }

        @media (max-width: 766.98px) {
          .about {
            margin-top: -16rem;
          }
        }
      `}</style>
    </section>
  )
}

export default TechnologiesSection
