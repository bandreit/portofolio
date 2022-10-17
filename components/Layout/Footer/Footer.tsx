import Link from 'next/link'
import * as React from 'react'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (prop) => {
  return (
    <footer className="footerContainer">
      <div className="iconsWrapper">
        This website is open hosted on{' '}
        <Link href="https://github.com/bandreit/portofolio">
          <span className="email">GitHub</span>
        </Link>
      </div>

      <div className="madeWithLove">
        {'Made by me :-)'}
        {` © ${new Date().getFullYear()} All rights reseved`}
      </div>
      <div className="address">
        <a href="mailto:abostan.ir@gmail.com">
          Let's jam:&nbsp;<span className="email">abostan.ir@gmail.com</span>
        </a>
      </div>

      <style jsx>
        {`
          .footerContainer {
            max-width: var(--max-width-content);
            margin: 0 auto;
            padding: 0 1rem 0.2rem 1rem;
            height: 5rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            place-content: center;
            place-items: center;
          }

          .address {
            text-align: end;
          }

          .email {
            color: var(--color-primary);
            cursor: pointer;
            font-weight: 700;
          }

          @media (max-width: 766.98px) {
            .footerContainer {
              grid-template-columns: repeat(1, 1fr);
              height: 6rem;
              margin-bottom: 1rem;
            }

            .iconsWrapper {
              order: -1;
            }

            .address {
              order: -1;
            }
          }
        `}
      </style>
    </footer>
  )
}

export default Footer
