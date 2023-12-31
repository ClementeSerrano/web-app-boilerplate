import { VectorProps } from '../../interfaces/theme.interfaces';

export default function CheckCircleIcon({
  height = 48,
  style,
  className,
  color = 'currentcolor',
  format = 'outline',
}: VectorProps) {
  let children;

  switch (format) {
    case 'outline':
      children = (
        <>
          <path
            d="M23.9884 48C37.1426 48 48 37.1373 48 24C48 10.8627 37.1194 0 23.9652 0C10.8342 0 0 10.8627 0 24C0 37.1373 10.8574 48 23.9884 48ZM23.9884 43.2186C13.3398 43.2186 4.82552 34.6538 4.82552 24C4.82552 13.3462 13.3398 4.80464 23.9652 4.80464C34.6138 4.80464 43.1745 13.3462 43.1977 24C43.2209 34.6538 34.637 43.2186 23.9884 43.2186Z"
            fill={color}
          />
          <path
            d="M21.3179 33.568C22.1299 33.568 22.849 33.1734 23.313 32.4307L32.4305 17.8079C32.6857 17.3901 32.9641 16.8562 32.9641 16.2992C32.9641 15.185 31.9897 14.3495 30.8297 14.3495C30.1105 14.3495 29.4377 14.744 28.9969 15.51L21.2251 28.392L17.2811 23.3553C16.8403 22.7518 16.2371 22.4268 15.518 22.4268C14.3812 22.4268 13.4532 23.332 13.4532 24.4926C13.4532 25.0264 13.6388 25.5371 14.0332 26.0245L19.2299 32.4539C19.8099 33.2199 20.4827 33.568 21.3179 33.568Z"
            fill={color}
          />
        </>
      );
      break;

    // TODO: Get correct SVG without filling white.
    case 'fill':
      children = (
        <>
          <path
            d="M23.9884 48C37.1426 48 48 37.1373 48 24C48 10.8627 37.1194 0 23.9652 0C10.8342 0 0 10.8627 0 24C0 37.1373 10.8574 48 23.9884 48Z"
            fill={color}
          />
          <path
            d="M21.3179 33.568C22.1299 33.568 22.849 33.1734 23.313 32.4307L32.4305 17.8079C32.6857 17.3901 32.9641 16.8562 32.9641 16.2992C32.9641 15.185 31.9897 14.3495 30.8297 14.3495C30.1105 14.3495 29.4377 14.744 28.9969 15.51L21.2251 28.392L17.2811 23.3553C16.8403 22.7518 16.2371 22.4268 15.518 22.4268C14.3812 22.4268 13.4532 23.332 13.4532 24.4926C13.4532 25.0264 13.6388 25.5371 14.0332 26.0245L19.2299 32.4539C19.8099 33.2199 20.4827 33.568 21.3179 33.568Z"
            fill="white"
          />
        </>
      );
      break;

    default:
      break;
  }
  return (
    <svg
      height={height}
      viewBox="0 0 48 48"
      style={style}
      className={className}
      fill="none"
    >
      <g clipPath="url(#clip0_911_34)">{children}</g>

      <defs>
        <clipPath id="clip0_911_34">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
