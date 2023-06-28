import { useTheme } from 'styled-components';

import { VectorProps } from '../../theme/theme.types';

export default function EmptyCartIllustration({
  height = 96,
  style,
  className,
  color: baseColor,
}: VectorProps) {
  const theme = useTheme();

  const color = baseColor || theme.palette.primary.main;

  return (
    <svg
      height={height}
      viewBox="0 0 216 126"
      style={style}
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="EmptyCart" transform="translate(-17.000000, -35.000000)">
          <g id="Group" transform="translate(17.000000, 37.000000)">
            <path
              d="M137,97 L46,97 C42.1340068,97 39,93.8659932 39,90 C39,86.1340068 42.1340068,83 46,83 L7,83 C3.13400675,83 4.73447626e-16,79.8659932 0,76 C-4.73447626e-16,72.1340068 3.13400675,69 7,69 L47,69 C50.8659932,69 54,65.8659932 54,62 C54,58.1340068 50.8659932,55 47,55 L22,55 C18.1340068,55 15,51.8659932 15,48 C15,44.1340068 18.1340068,41 22,41 L62,41 C58.1340068,41 55,37.8659932 55,34 C55,30.1340068 58.1340068,27 62,27 L119,27 C122.865993,27 126,30.1340068 126,34 C126,37.8659932 122.865993,41 119,41 L183,41 C186.865993,41 190,44.1340068 190,48 C190,51.8659932 186.865993,55 183,55 L205,55 C208.865993,55 212,58.1340068 212,62 C212,65.8659932 208.865993,69 205,69 L186,69 C182.134007,69 179,72.1340068 179,76 C179,79.8659932 182.134007,83 186,83 L192,83 C195.865993,83 199,86.1340068 199,90 C199,93.8659932 195.865993,97 192,97 L140,97 C139.485125,97 138.983234,96.944412 138.5,96.8389102 C138.016766,96.944412 137.514875,97 137,97 Z M209,97 C205.134007,97 202,93.8659932 202,90 C202,86.1340068 205.134007,83 209,83 C212.865993,83 216,86.1340068 216,90 C216,93.8659932 212.865993,97 209,97 Z"
              id="Background"
              fill={theme.palette.background.level2}
            />
            <polygon
              id="Rectangle"
              fill={theme.palette.background.level1}
              points="79 29 146 29 140 38 148 44 77 44 86 38"
            />
            <path
              d="M53,108.5 L74.4541016,108.5 L53,108.5 Z M40.1279297,108.5 L47,108.5 L40.1279297,108.5 Z M183.12793,108.5 L186,108.5 L183.12793,108.5 Z M156,108.5 L178.427734,108.5 L156,108.5 Z"
              id="line"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76.006144,86.2148437 L76.006144,46 C76.006144,44.3431458 77.3657942,43 79.0430077,43 L148.522507,43 C149.614646,43 150.5,43.8954305 150.5,45 L150.5,118 C150.5,120.209139 148.729293,122 146.545015,122 L79.9611293,122 C77.7768512,122 76.006144,120.209139 76.006144,118 L76.006144,103.054688 L76.006144,99 M76.006144,94.8974609 L76.006144,90.3935547"
              id="bag"
              stroke={color}
              strokeWidth="2.5"
              fill={theme.palette.background.level1}
              strokeLinecap="round"
            />
            <path
              d="M148,29 L148,41 C148,42.1045695 147.196409,43 146.205128,43 L79.7948718,43 C78.8035915,43 78,42.1045695 78,41 L78,29"
              id="Rectangle"
              stroke={color}
              strokeWidth="2.5"
              transform="translate(113.000000, 36.000000) rotate(-180.000000) translate(-113.000000, -36.000000) "
            />
            <circle
              id="Oval"
              stroke={color}
              strokeWidth="2.5"
              fill={theme.palette.background.level1}
              cx="96.5"
              cy="60.5"
              r="3.5"
            />
            <circle
              id="Oval"
              stroke={color}
              strokeWidth="2.5"
              fill={theme.palette.background.level1}
              cx="129.5"
              cy="60.5"
              r="3.5"
            />
            <path
              d="M129,80 C129,71.163444 121.836556,64 113,64 C104.163444,64 97,71.163444 97,80"
              id="Oval"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="translate(113.000000, 72.000000) scale(1, -1) translate(-113.000000, -72.000000) "
            />
            <path
              d="M79.0610352,29.9968262 L86.1678387,37.0120856 C86.5608863,37.4000702 86.5649906,38.0332219 86.177006,38.4262694 C86.1098634,38.4942882 86.0333164,38.5523301 85.949701,38.5986241 L78,43"
              id="Path-3"
              stroke={color}
              fill={theme.palette.background.level1}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M140.908305,30.0693359 L147.710048,37.0066365 C148.0967,37.4009947 148.090453,38.0341289 147.696095,38.4207812 C147.630264,38.4853256 147.555824,38.5404564 147.474889,38.5846071 L139.380842,43"
              id="Path-3"
              stroke={color}
              fill={theme.palette.background.level1}
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="translate(144.008474, 36.534668) scale(-1, 1) translate(-144.008474, -36.534668) "
            />
            <path
              d="M139.099609,4.30273438 L128,16.7558594 L139.099609,4.30273438 Z M113,0 L113,16.7558594 L113,0 Z M87,4.30273438 L98.0996094,16.7558594 L87,4.30273438 Z"
              id="lines"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
