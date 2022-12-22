import { VectorProps } from '../theme/theme.types';

export default function MenuIcon({
  height = 48,
  style,
  className,
  color = 'currentcolor',
}: VectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 48 48"
      style={style}
      className={className}
      fill="none"
    >
      <g clipPath="url(#clip0_302_3)">
        <path
          d="M32.5457 10.9567H2.48851C1.11311 10.9567 0 9.8481 0 8.47837C0 7.10863 1.11317 6 2.48851 6H32.5457C33.9211 6 35.0342 7.10863 35.0342 8.47837C35.0342 9.84769 33.921 10.9567 32.5461 10.9567H32.5457Z"
          fill={color}
        />
        <path
          d="M45.5115 26.4784H2.48851C1.11311 26.4784 0 25.3697 0 24C0 22.6303 1.11317 21.5216 2.48851 21.5216L45.5115 21.5221C46.8869 21.5221 48 22.6307 48 24.0005C47.9995 25.3698 46.8864 26.4784 45.5115 26.4784V26.4784Z"
          fill={color}
        />
        <path
          d="M32.5457 42H2.48851C1.11311 42 0 40.8914 0 39.5217C0 38.1519 1.11317 37.0433 2.48851 37.0433H32.5457C33.9211 37.0433 35.0342 38.1519 35.0342 39.5217C35.0342 40.8914 33.921 42 32.5461 42H32.5457Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_302_3">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
