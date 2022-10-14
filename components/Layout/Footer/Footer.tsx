import Icon from 'components/Icons'
import SocialMediaData from 'data/SocialMediaLinks'
import Link from 'next/link'
import * as React from 'react'

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (prop) => {
  return (
    <footer className="footerContainer">
      <div className="iconsWrapper">
        {SocialMediaData.map((value, index) => (
          <Link href={value.link} key={index}>
            <a target="_blank" rel="noreferrer">
              <div>
                <Icon id={value.title} width={27} height={27} filled={false} />
              </div>
            </a>
          </Link>
        ))}
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

          @media (max-width: 766.98px) {
            .footerContainer {
              grid-template-columns: repeat(1, 1fr);
              height: 6rem;
              margin-bottom: 1rem;
            }

            .iconsWrapper {
              order: -1;
            }
          }

          .iconsWrapper {
            display: flex;
            gap: 0.4rem;
          }

          .address {
            text-align: end;
          }

          .email {
            color: blue;
          }
        `}
      </style>
    </footer>
  )
}

export default Footer
