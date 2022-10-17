import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  const [isMovileNavActive, setMovileNavActive] = useState(false)

  return (
    <header>
      <nav className="blur">
        <div
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: '50px',
            height: '50px',
          }}
        >
          <Image
            src={'/profile-original.webp'}
            objectFit="cover"
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>

        <ul>
          <li className={`onlyOnMobile ${isMovileNavActive ? 'active' : ''}`}>
            <button
              className={'mobileNavButton'}
              onClick={() => setMovileNavActive(!isMovileNavActive)}
              name="contact me"
            ></button>
          </li>
          <li className="notOnMobile">
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

      <nav className={`mobileNav ${isMovileNavActive ? 'show' : ''}`}>
        <ul>
          <li onClick={() => setMovileNavActive(!isMovileNavActive)}>
            <Link href="#home">
              <a>HOME</a>
            </Link>
          </li>
          <li onClick={() => setMovileNavActive(!isMovileNavActive)}>
            <Link href="#about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li onClick={() => setMovileNavActive(!isMovileNavActive)}>
            <Link href="#projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li onClick={() => setMovileNavActive(!isMovileNavActive)}>
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

        .blur {
          backdrop-filter: blur(10px);
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
          color: var(--color-primary);
        }

        li {
          font-weight: bold;
        }

        .image-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .onlyOnMobile {
          display: none;
          z-index: 100;
        }

        .mobileNav {
          display: ${isMovileNavActive ? 'none' : 'flex'};
          -webkit-box-align: center;
          align-items: center;
          width: auto;
          position: fixed;
          z-index: 99;
          inset: 0px;
          -webkit-box-pack: center;
          justify-content: center;
          transition: all 0.25s ease 0s;
          transform: translateY(${isMovileNavActive ? '0px' : '100vh'});
          border-top: 2px solid white;
          flex-shrink: 0;
        }

        .mobileNav:before {
          content: '';
          z-index: -1;
          position: absolute;
          inset: 0px;
          background-color: rgb(255, 255, 255);
        }

        @media (max-width: 766.98px) {
          ul {
            grid-template-columns: 1fr;
            padding: 0;
            font-size: 1.7rem;
            grid-gap: 3.5rem;
          }

          .notOnMobile {
            display: none;
          }

          .onlyOnMobile {
            display: block;
          }

          .show {
            display: flex;
          }

          .active:after {
            transform: rotateZ(45deg) translate(2px, 7px);
          }

          .active:before {
            transform: rotateZ(-45deg) scaleX(2);
          }

          .mobileNavButton {
            width: 20px;
            height: 20px;
            border-radius: 50px;
            background: transparent;
            border: 0px;
            z-index: 100;
            display: block;
            position: relative;
          }

          .onlyOnMobile::before {
            content: '';
            width: 10px;
            height: 4px;
            background: var(--color-primary);
            position: absolute;
            top: 2.6rem;
            transform-origin: left top;
            transition: transform 0.15s ease 0s;
          }

          .onlyOnMobile::after {
            content: '';
            width: 20px;
            height: 4px;
            background: var(--color-primary);
            position: absolute;
            top: 2.2rem;
            transform-origin: right top;
            transition: transform 0.15s ease 0s;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
