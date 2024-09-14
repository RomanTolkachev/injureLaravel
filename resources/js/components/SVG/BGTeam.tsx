import { FunctionComponent } from "react";

export const BGTeam: FunctionComponent<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 483 483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_748)" filter="url(#filter0_i_1_748)">
        <rect width="513" height="483" fill="url(#paint0_linear_1_748)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M82.7093 0H-1V109.18L82.7093 0ZM-1 138.849L105.457 0H137.709L-1 180.914V138.849ZM-1 233.053V407.858L311.709 0H177.685L-1 233.053ZM351.685 0L-1 459.997V516H56.0051L451.629 0H351.685ZM477.98 0L82.3569 516H397.441L546 322.239V0H477.98ZM546 356.608L423.792 516H503.441L546 460.491V356.608ZM546 494.861L529.792 516H546V494.861Z"
          fill="white"
          fillOpacity="0.02"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1_748"
          x="-7"
          y="0"
          width="520"
          height="483"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-7" />
          <feGaussianBlur stdDeviation="44.45" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_748"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_748"
          x1="256.5"
          y1="0"
          x2="256.5"
          y2="483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#285B86" />
          <stop offset="0.359" stopColor="#1C6FB1" />
          <stop offset="0.599" stopColor="#1C6FB1" />
          <stop offset="1" stopColor="#285B86" />
        </linearGradient>
        <clipPath id="clip0_1_748">
          <rect width="513" height="483" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
