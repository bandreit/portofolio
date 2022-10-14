import { useEffect, useState } from 'react'
import Image from 'next/image'

const DuckWalk = () => {
  const [y, setY] = useState(0)
  const [windowInnerWidth, setWindowInnerWidth] = useState(0)

  const onScroll = () => {
    setWindowInnerWidth(window.innerWidth)
    let scrollY = window.scrollY * 1.3
    if (window.innerWidth > 992) {
      scrollY *= 2
    }
    setY(() => scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="container">
      <div className="duck">
        <Image width="40px" height="40px" src="/duck.png" />
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          overflow: hidden;
          padding: 5rem 0 0 0;
        }

        .duck {
          width: 40px;
          transform: translateX(${(y * 1.3) % windowInnerWidth}px)
            rotateZ(${(Math.floor(y / 10) % 10) - 5}deg) scaleX(-1);
        }
      `}</style>
    </div>
  )
}

export default DuckWalk
