import { useTheme } from 'styled-components';

import { VectorProps } from '../../theme/theme.types';

export default function ReloLogo({
  height = 48,
  style,
  className,
  variant = 'logo',
}: VectorProps & { variant?: 'logo' | 'isotype' }) {
  const theme = useTheme();

  let children;
  let viewBox;

  switch (variant) {
    case 'logo':
      viewBox = '0 0 364 128';
      children = (
        <>
          <g filter="url(#filter0_f_913_2)">
            <path
              d="M90.4474 108H64.6314C56.0851 108 49.1339 101.472 49.1339 93.4514C49.1339 90.7399 49.9192 88.1483 51.3842 85.8955C48.5338 85.3048 45.9214 83.9617 43.8153 81.9784C37.7806 76.3101 37.7759 67.0789 43.8153 61.4073L56.7907 49.0972L35.4975 49.0928C26.9524 49.0928 20 42.5654 20 34.5442C20 26.523 26.9536 20 35.4987 20H61.3193C69.8657 20 76.8169 26.5241 76.8169 34.5453C76.8169 37.2601 76.0316 39.855 74.5619 42.1078C77.4122 42.7018 80.0258 44.0416 82.1355 46.0216C85.062 48.7683 86.6712 52.4203 86.6712 56.3099C86.6712 60.1907 85.062 63.8482 82.1319 66.5938L69.1554 78.9072H90.4474C98.9937 78.9072 105.95 85.4313 105.95 93.4525C105.95 101.472 98.9937 108 90.4474 108ZM61.4307 86.2398L59.2132 88.3419C57.7482 89.7169 56.9465 91.5286 56.9465 93.4547C56.9465 97.429 60.3911 100.666 64.6314 100.666H90.4474C94.6866 100.666 98.1358 97.4301 98.1358 93.4514C98.1358 89.4727 94.6877 86.2387 90.4474 86.2387L61.4307 86.2398ZM67.7795 49.0972L49.3554 66.5784C46.3492 69.4065 46.3492 73.9825 49.3472 76.7974C50.7888 78.1581 52.7121 78.9072 54.7654 78.9072H58.1678L76.5918 61.4216C78.0604 60.0466 78.8585 58.2349 78.8585 56.3088C78.8585 54.3827 78.0604 52.5677 76.6071 51.2026C75.162 49.8452 73.234 49.0972 71.1783 49.0972H67.7795ZM35.4987 27.3337C31.2642 27.3337 27.815 30.5699 27.815 34.5453C27.815 38.5273 31.263 41.7613 35.4987 41.7613L64.5178 41.7646L66.7387 39.6592C68.2073 38.2842 69.0054 36.4725 69.0054 34.5464C69.0054 30.5721 65.5562 27.3348 61.3205 27.3348L35.4987 27.3337Z"
              fill={theme.palette.primary.main}
              fillOpacity="0.2"
            />
          </g>
          <path
            d="M90.4474 108H64.6314C56.0851 108 49.1339 101.471 49.1339 93.4514C49.1339 90.7399 49.9192 88.1483 51.3842 85.8955C48.5338 85.3048 45.9214 83.9617 43.8153 81.9784C37.7806 76.3101 37.7759 67.0789 43.8153 61.4073L56.7907 49.0972L35.4975 49.0928C26.9524 49.0928 20 42.5654 20 34.5442C20 26.523 26.9536 20 35.4987 20H61.3193C69.8657 20 76.8169 26.5241 76.8169 34.5453C76.8169 37.2601 76.0316 39.855 74.5619 42.1078C77.4122 42.7018 80.0258 44.0416 82.1355 46.0216C85.062 48.7683 86.6712 52.4203 86.6712 56.3099C86.6712 60.1907 85.062 63.8482 82.1319 66.5938L69.1554 78.9072H90.4474C98.9937 78.9072 105.95 85.4313 105.95 93.4525C105.95 101.471 98.9937 108 90.4474 108ZM61.4307 86.2398L59.2132 88.3419C57.7482 89.7169 56.9465 91.5286 56.9465 93.4547C56.9465 97.429 60.3911 100.666 64.6314 100.666H90.4474C94.6866 100.666 98.1358 97.4301 98.1358 93.4514C98.1358 89.4727 94.6877 86.2387 90.4474 86.2387L61.4307 86.2398ZM67.7795 49.0972L49.3554 66.5784C46.3492 69.4065 46.3492 73.9825 49.3472 76.7974C50.7888 78.1581 52.7121 78.9072 54.7654 78.9072H58.1678L76.5918 61.4216C78.0604 60.0466 78.8585 58.2349 78.8585 56.3088C78.8585 54.3827 78.0604 52.5677 76.6071 51.2026C75.162 49.8452 73.234 49.0972 71.1783 49.0972H67.7795ZM35.4987 27.3337C31.2642 27.3337 27.815 30.5699 27.815 34.5453C27.815 38.5273 31.263 41.7613 35.4987 41.7613L64.5178 41.7646L66.7387 39.6592C68.2072 38.2842 69.0054 36.4725 69.0054 34.5464C69.0054 30.5721 65.5562 27.3348 61.3205 27.3348L35.4987 27.3337Z"
            fill="url(#paint0_linear_913_2)"
          />
          <path
            d="M130.031 106.5V21.9492H164.953C171.281 21.9492 176.691 23.0234 181.184 25.1719C185.715 27.3203 189.172 30.4258 191.555 34.4883C193.977 38.5117 195.188 43.3555 195.188 49.0195V49.1367C195.188 54.6836 193.801 59.625 191.027 63.9609C188.293 68.2969 184.582 71.3828 179.895 73.2188L197.707 106.5H177.668L161.906 75.8555C161.789 75.8555 161.652 75.8555 161.496 75.8555C161.34 75.8555 161.184 75.8555 161.027 75.8555H147.727V106.5H130.031ZM147.727 62.4375H163.02C167.434 62.4375 170.871 61.2656 173.332 58.9219C175.832 56.5391 177.082 53.2773 177.082 49.1367V49.0195C177.082 44.957 175.793 41.7344 173.215 39.3516C170.637 36.9688 167.16 35.7773 162.785 35.7773H147.727V62.4375ZM233.449 107.789C227.043 107.789 221.535 106.48 216.926 103.863C212.316 101.207 208.762 97.4375 206.262 92.5547C203.801 87.6719 202.57 81.8906 202.57 75.2109V75.1523C202.57 68.4727 203.801 62.6914 206.262 57.8086C208.762 52.8867 212.258 49.0977 216.75 46.4414C221.281 43.7461 226.613 42.3984 232.746 42.3984C238.879 42.3984 244.172 43.707 248.625 46.3242C253.117 48.9023 256.574 52.5547 258.996 57.2812C261.457 62.0078 262.688 67.5352 262.688 73.8633V79.1367H210.949V68.3555H254.602L246.457 78.4336V71.8711C246.457 68.1992 245.891 65.1328 244.758 62.6719C243.625 60.1719 242.043 58.2969 240.012 57.0469C238.02 55.7969 235.695 55.1719 233.039 55.1719C230.383 55.1719 228.02 55.8164 225.949 57.1055C223.918 58.3945 222.316 60.2891 221.145 62.7891C220.012 65.25 219.445 68.2773 219.445 71.8711V78.4922C219.445 81.9688 220.012 84.9375 221.145 87.3984C222.316 89.8594 223.977 91.7539 226.125 93.082C228.273 94.3711 230.832 95.0156 233.801 95.0156C236.145 95.0156 238.176 94.6445 239.895 93.9023C241.613 93.1602 243.02 92.2227 244.113 91.0898C245.207 89.957 245.949 88.8047 246.34 87.6328L246.457 87.2812H262.16L261.984 87.9258C261.516 90.2305 260.598 92.5547 259.23 94.8984C257.863 97.2422 256.008 99.3906 253.664 101.344C251.359 103.297 248.527 104.859 245.168 106.031C241.848 107.203 237.941 107.789 233.449 107.789ZM271.945 106.5V21.9492H289.055V106.5H271.945ZM329.426 107.789C323.059 107.789 317.551 106.48 312.902 103.863C308.254 101.246 304.66 97.4961 302.121 92.6133C299.582 87.7305 298.312 81.8906 298.312 75.0938V74.9766C298.312 68.2188 299.602 62.418 302.18 57.5742C304.758 52.6914 308.371 48.9414 313.02 46.3242C317.668 43.707 323.117 42.3984 329.367 42.3984C335.656 42.3984 341.125 43.707 345.773 46.3242C350.461 48.9023 354.094 52.6328 356.672 57.5156C359.25 62.3594 360.539 68.1797 360.539 74.9766V75.0938C360.539 81.9297 359.25 87.7891 356.672 92.6719C354.133 97.5547 350.539 101.305 345.891 103.922C341.242 106.5 335.754 107.789 329.426 107.789ZM329.484 94.3711C332.258 94.3711 334.66 93.6289 336.691 92.1445C338.762 90.6211 340.344 88.4336 341.438 85.582C342.57 82.6914 343.137 79.1953 343.137 75.0938V74.9766C343.137 70.9141 342.57 67.457 341.438 64.6055C340.305 61.7539 338.703 59.5859 336.633 58.1016C334.562 56.5781 332.141 55.8164 329.367 55.8164C326.633 55.8164 324.23 56.5781 322.16 58.1016C320.129 59.5859 318.547 61.7539 317.414 64.6055C316.281 67.457 315.715 70.9141 315.715 74.9766V75.0938C315.715 79.1953 316.262 82.6914 317.355 85.582C318.488 88.4336 320.09 90.6211 322.16 92.1445C324.23 93.6289 326.672 94.3711 329.484 94.3711Z"
            fill={theme.palette.text.level1}
          />
          <defs>
            <filter
              id="filter0_f_913_2"
              x="0"
              y="0"
              width="125.95"
              height="128"
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
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_913_2"
              />
            </filter>
            <linearGradient
              id="paint0_linear_913_2"
              x1="62.9748"
              y1="20"
              x2="62.9748"
              y2="108"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme.palette.primary.main} />
              <stop offset="1" stopColor={theme.palette.primary.dark} />
            </linearGradient>
          </defs>
        </>
      );
      break;

    case 'isotype':
      viewBox = '0 0 138 140';
      children = (
        <>
          <g filter="url(#filter0_f_932_6)">
            <path
              d="M100.054 120H70.7175C61.0058 120 53.1067 112.581 53.1067 103.467C53.1067 100.386 53.999 97.4412 55.6638 94.8812C52.4248 94.21 49.4562 92.6838 47.0629 90.43C40.2052 83.9888 40.1999 73.4988 47.0629 67.0538L61.8076 53.065L37.6108 53.06C27.9004 53.06 20 45.6425 20 36.5275C20 27.4125 27.9018 20 37.6122 20H66.9538C76.6655 20 84.5646 27.4137 84.5646 36.5287C84.5646 39.6137 83.6723 42.5625 82.0022 45.1225C85.2412 45.7975 88.2112 47.32 90.6085 49.57C93.9341 52.6912 95.7627 56.8412 95.7627 61.2612C95.7627 65.6712 93.9341 69.8275 90.6045 72.9475L75.8584 86.94H100.054C109.766 86.94 117.67 94.3538 117.67 103.469C117.67 112.581 109.766 120 100.054 120ZM67.0803 95.2725L64.5605 97.6612C62.8957 99.2237 61.9847 101.283 61.9847 103.471C61.9847 107.988 65.899 111.666 70.7175 111.666H100.054C104.871 111.666 108.791 107.989 108.791 103.467C108.791 98.9463 104.872 95.2713 100.054 95.2713L67.0803 95.2725ZM74.2948 53.065L53.3584 72.93C49.9423 76.1438 49.9423 81.3438 53.3491 84.5425C54.9873 86.0887 57.1728 86.94 59.5062 86.94H63.3725L84.3089 67.07C85.9777 65.5075 86.8847 63.4487 86.8847 61.26C86.8847 59.0713 85.9777 57.0088 84.3262 55.4575C82.6841 53.915 80.4932 53.065 78.1572 53.065H74.2948ZM37.6122 28.3337C32.8003 28.3337 28.8807 32.0112 28.8807 36.5287C28.8807 41.0537 32.7989 44.7288 37.6122 44.7288L70.5884 44.7325L73.1122 42.34C74.781 40.7775 75.6879 38.7188 75.6879 36.53C75.6879 32.0138 71.7684 28.335 66.9551 28.335L37.6122 28.3337Z"
              fill={theme.palette.primary.main}
              fillOpacity="0.3"
            />
          </g>
          <path
            d="M100.054 120H70.7175C61.0058 120 53.1067 112.581 53.1067 103.467C53.1067 100.386 53.999 97.4412 55.6638 94.8812C52.4248 94.21 49.4562 92.6838 47.0629 90.43C40.2052 83.9888 40.1999 73.4988 47.0629 67.0538L61.8076 53.065L37.6108 53.06C27.9004 53.06 20 45.6425 20 36.5275C20 27.4125 27.9018 20 37.6122 20H66.9538C76.6655 20 84.5646 27.4137 84.5646 36.5287C84.5646 39.6137 83.6723 42.5625 82.0022 45.1225C85.2412 45.7975 88.2112 47.32 90.6085 49.57C93.9341 52.6912 95.7627 56.8412 95.7627 61.2612C95.7627 65.6712 93.9341 69.8275 90.6045 72.9475L75.8584 86.94H100.054C109.766 86.94 117.67 94.3538 117.67 103.469C117.67 112.581 109.766 120 100.054 120ZM67.0803 95.2725L64.5605 97.6612C62.8957 99.2237 61.9847 101.283 61.9847 103.471C61.9847 107.988 65.899 111.666 70.7175 111.666H100.054C104.871 111.666 108.791 107.989 108.791 103.467C108.791 98.9462 104.872 95.2713 100.054 95.2713L67.0803 95.2725ZM74.2948 53.065L53.3584 72.93C49.9423 76.1438 49.9423 81.3437 53.3491 84.5425C54.9873 86.0887 57.1728 86.94 59.5062 86.94H63.3725L84.3089 67.07C85.9777 65.5075 86.8847 63.4487 86.8847 61.26C86.8847 59.0712 85.9777 57.0088 84.3262 55.4575C82.6841 53.915 80.4932 53.065 78.1572 53.065H74.2948ZM37.6122 28.3337C32.8002 28.3337 28.8807 32.0112 28.8807 36.5287C28.8807 41.0537 32.7989 44.7288 37.6122 44.7288L70.5884 44.7325L73.1122 42.34C74.781 40.7775 75.6879 38.7188 75.6879 36.53C75.6879 32.0138 71.7684 28.335 66.9551 28.335L37.6122 28.3337Z"
            fill="url(#paint0_linear_932_6)"
          />
          <defs>
            <filter
              id="filter0_f_932_6"
              x="0"
              y="0"
              width="137.67"
              height="140"
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
              <feGaussianBlur
                stdDeviation="10"
                result="effect1_foregroundBlur_932_6"
              />
            </filter>
            <linearGradient
              id="paint0_linear_932_6"
              x1="68.835"
              y1="20"
              x2="68.835"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme.palette.primary.main} />
              <stop offset="1" stopColor={theme.palette.primary.dark} />
            </linearGradient>
          </defs>
        </>
      );
      break;

    default:
      break;
  }
  return (
    <svg
      height={height}
      viewBox={viewBox}
      style={style}
      className={className}
      fill="none"
    >
      {children}
    </svg>
  );
}