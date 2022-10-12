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
    <section id="about">
      <h1 className="section-title">
        Tech I use to build that cool stuff with
      </h1>
      <div className="technologies">
        <Image src={'/logos/serverless.png'} width={100} height={100} />
        <Image src={'/logos/aws.png'} width={180} height={100} />
        <Image src={'/logos/react.png'} width={120} height={100} />
        <Image src={'/logos/ts.png'} width={100} height={100} />
        <Image src={'/logos/next.png'} width={180} height={100} />
        <Image src={'/logos/rest.png'} width={200} height={100} />
        <Image src={'/logos/graphql.png'} width={100} height={100} />
      </div>
      <style jsx>{`
        section {
          overflow: hidden;
        }

        .section-title {
          margin-top: 5rem;
          color: var(--color-primary);
          font-size: 2rem;
          text-align: center;
          transform: rotate(10deg) translateY(140px) translateX(50px);
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
          transform: rotate(10deg) translateX(${-1 * pageScrollY}px);
          width: 200vh;
        }

        .big-text {
          font-size: 6rem;
          white-space: nowrap;
        }

        @media (max-width: 425px) {
          .technologies {
            transform: rotate(10deg) translateY(8rem)
              translateX(${-1 * pageScrollY - 1000}px);
          }
        }
      `}</style>
    </section>
  )
}

export default TechnologiesSection
