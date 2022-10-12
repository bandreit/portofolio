export const GitHubFilled: React.FC = () => {
  return (
    <g fill="none">
      <g id="show" filter="url(#git_a)">
        <path
          d="M5 95V65.5c0-33.137 26.863-60 60-60h60c33.137 0 60 26.863 60 60v60c0 33.137-26.863 60-60 60H65c-33.137 0-60-26.863-60-60V95Z"
          fill="url(#git_b)"
        />
      </g>
      <path
        id="border"
        d="M5 95V65.5c0-33.137 26.863-60 60-60h60c33.137 0 60 26.863 60 60v60c0 33.137-26.863 60-60 60H65c-33.137 0-60-26.863-60-60V95Z"
        stroke="#000"
        strokeWidth="10"
      />
      <g filter="url(#git_c)">
        <path
          id="main"
          d="M59.17 34.225c-3.96 8.263-2.2 17.214-.825 20.657-7.919 6.941-8.526 19.417-7.839 24.787 1.238 26.647 22.964 33.05 34.445 33.257-3.3 2.644-4.262 7.85-4.33 10.122-1.815 1.487-5.982 2.479-7.838 2.479-7.59.661-12.101-3.719-13.407-5.991-.963-2.272-4.084-7.312-8.87-9.295-4.785-1.983-6.944-.964-7.425-.207-.275.757 0 2.603 3.3 3.925 3.3 1.322 6.875 8.263 8.25 11.568 3.63 10.576 18.564 10.053 25.578 8.469V143c0 5.523 4.477 10 10 10h17.746c5.523 0 9.999-4.476 10.015-9.999.024-8.149.079-17.244.191-19.953.165-3.966-2.955-7.987-4.536-9.502v-.62c28.052-2.314 34.515-23.136 34.24-33.257.206-1.584.33-6.28-.825-12.394-1.155-6.115-5.157-10.81-7.013-12.394 3.465-7.767.756-17.076-1.031-20.656-5.941-1.486-15.952 4.752-20.214 8.056-16.337-4.791-32.797-1.996-38.985 0-11.22-7.436-18.426-8.47-20.626-8.056Z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="git_a"
          x="0"
          y="-4.5"
          width="190"
          height="195"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="git_c"
          x="43"
          y="33"
          width="105"
          height="121"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend in2="shape" result="effect1_innerShadow_0_1" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
          <feBlend
            in2="effect1_innerShadow_0_1"
            result="effect2_innerShadow_0_1"
          />
        </filter>
        <linearGradient
          id="git_b"
          x1="96"
          y1="-55.5"
          x2="95.5"
          y2="186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#505050" />
          <stop offset="1" />
        </linearGradient>
      </defs>
      <style jsx>{`
        #show {
          opacity: 0;
          transition: all 0.5s;
        }

        #border {
          stroke: #a6a6a6;
          transition: all 0.5s;
        }

        #main {
          fill: #a6a6a6;
          transition: all 0.5s;
        }

        #show {
          opacity: 1;
          transition: all 0.5s;
        }

        #main {
          fill: #fff;
          transition: all 0.5s;
        }

        #border {
          stroke: transparent;
          transition: all 0.5s;
        }
      `}</style>
    </g>
  )
}
