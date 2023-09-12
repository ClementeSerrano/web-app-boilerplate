import { VectorProps } from '../../interfaces/theme.interfaces';

export default function DownloadIcon({
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
      <rect y="44" width="48" height="4" rx="2" fill={color} />
      <path
        d="M23.4969 0.00120004C22.3786 0.00120004 21.4717 0.904531 21.4717 2.01849V32.3384L13.4132 24.7741C12.6612 23.9744 11.2091 23.9505 10.4599 24.7534C9.69946 25.5681 9.97115 26.9663 10.6285 27.6951L22.104 38.4536C22.4557 38.7833 23.0137 38.9812 23.4964 39C24.0351 39 24.496 38.8218 24.8888 38.4536L36.3643 27.6951C37.0484 26.9958 37.2905 25.5479 36.5328 24.7534C35.7752 23.9589 34.2717 24.086 33.5795 24.7741L25.522 32.3384V2.01729C25.522 0.903366 24.6156 0 23.4968 0L23.4969 0.00120004Z"
        fill={color}
      />
    </svg>
  );
}
