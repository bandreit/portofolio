import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <header>
      <nav>
        <div
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: '50px',
            height: '50px',
          }}
        >
          <Image
            src={'/profile-pic.jpg'}
            objectFit="cover"
            width="50px"
            height="50px"
          />
        </div>

        <ul>
          <li>
            <Link href="#home">
              <a>HOME</a>
            </Link>
          </li>
          <li className="notOnMobile">
            <Link href="#about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li className="notOnMobile">
            <Link href="#projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li className="notOnMobile">
            <Link href="#contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        header {
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 2;
          position: sticky;
          top: 0;
        }

        nav {
          max-width: var(--max-width-content);
          margin: 0 auto;
          padding: var(--p);
          display: flex;
          justify-content: space-between;
          padding: 1rem 1.5rem;
        }

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 1rem;
          justify-items: center;
          align-items: center;
          gap: 1.5rem;
          margin: 0;
          list-style-type: none;
        }

        li {
          font-weight: bold;
        }

        .image-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        @media (max-width: 766.98px) {
          ul {
            grid-template-columns: 1fr;
          }
          .notOnMobile {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
