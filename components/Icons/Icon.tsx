import { Facebook } from './Facebook'
import { FacebookFilled } from './FacebookFilled'
import { GitHub } from './GitHub'
import { GitHubFilled } from './GitHubFilled'
import { Instagram } from './Instagram'
import { InstagramFilled } from './InstagramFilled'
import { LinkedIn } from './LinkedIn'
import { LinkedInFilled } from './LinkedInFilled'

interface IconProps {
  id: string
  width?: number
  height?: number
  color?: string | null
  filled: boolean
}

const Icon: React.FC<IconProps> = ({
  id,
  width,
  height,
  color,
  filled,
}: IconProps): JSX.Element | null => {
  const data: any = {
    github: {
      content: <GitHub />,
      width: 190,
      height: 191,
    },
    githubFilled: {
      content: <GitHubFilled />,
      width: 190,
      height: 191,
    },
    facebook: {
      content: <Facebook />,
      width: 190,
      height: 191,
    },
    facebookFilled: {
      content: <FacebookFilled />,
      width: 190,
      height: 191,
    },
    instagram: {
      content: <Instagram />,
      width: 190,
      height: 191,
    },
    instagramFilled: {
      content: <InstagramFilled />,
      width: 190,
      height: 191,
    },
    linkedin: {
      content: <LinkedIn />,
      width: 190,
      height: 191,
    },
    linkedinFilled: {
      content: <LinkedInFilled />,
      width: 190,
      height: 191,
    },
  }

  const icon = data[id]
  if (!icon) {
    return null
  }

  return (
    <div className="wrapper">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${icon.width} ${icon.height}`}
      >
        {icon.content}
      </svg>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            width: ${width}px;
            height: ${height}px;
          }
        `}
      </style>
    </div>
  )
}

export default Icon
