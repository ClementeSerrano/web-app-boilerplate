import { VectorProps } from '../../theme/theme.types';

export default function CircledClosedEyeIcon({
  height = 48,
  style,
  className,
  color = 'currentcolor',
  format = 'outline',
}: VectorProps) {
  let d = '';

  switch (format) {
    case 'outline':
      d =
        'M24 48C37.1268 48 48 37.15 48 24C48 10.8732 37.1268 0 23.9768 0C10.85 0 0 10.8732 0 24C0 37.15 10.8732 48 24 48ZM24 43.2836C13.3127 43.2836 4.73959 34.6873 4.73959 24C4.73959 13.3127 13.2894 4.73959 23.9768 4.73959C34.6641 4.73959 43.2604 13.3127 43.2836 24C43.2836 34.6873 34.6873 43.2836 24 43.2836ZM34.4782 36.1278C34.9197 36.5692 35.6631 36.5924 36.1045 36.1278C36.5692 35.6631 36.5692 34.9661 36.1045 34.5015L13.4521 11.849C13.0106 11.3843 12.2672 11.3843 11.8025 11.849C11.3611 12.2904 11.3611 13.0339 11.8025 13.4753L34.4782 36.1278ZM30.1801 25.9748L34.7338 30.5518C38.0329 28.182 39.9845 25.3011 39.9845 24C39.9845 21.6302 33.5024 13.94 23.9768 13.94C22.1878 13.94 20.4918 14.2188 18.9351 14.7067L22.0252 17.8199C22.6292 17.5876 23.303 17.4714 23.9768 17.4714C27.6012 17.4714 30.5286 20.3756 30.5286 24.0232C30.5286 24.697 30.4124 25.3475 30.1801 25.9748ZM29.0649 33.3166L25.9516 30.1801C25.3243 30.4124 24.6738 30.5518 23.9768 30.5518C20.3524 30.5518 17.425 27.5547 17.4017 24.0232C17.4017 23.3262 17.5411 22.6292 17.7735 22.0252L13.243 17.4947C9.94385 19.8412 7.96902 22.7222 7.96902 24C7.96902 26.393 14.544 34.0833 23.9768 34.0833C25.789 34.0833 27.5082 33.7812 29.0649 33.3166ZM24.697 20.4918L27.485 23.2798C27.4385 21.8161 26.2304 20.5382 24.697 20.4918ZM23.2798 27.5082L20.4685 24.697C20.4453 26.1375 21.6999 27.5082 23.2798 27.5082Z';
      break;

    case 'fill':
      d =
        'M24 48C37.1268 48 48 37.15 48 24C48 10.8732 37.1268 0 23.9768 0C10.85 0 0 10.8732 0 24C0 37.15 10.8732 48 24 48ZM34.8732 36.6157L11.3379 13.1036C10.8964 12.6389 10.8964 11.849 11.3379 11.3843C11.849 10.9197 12.6157 10.9197 13.1036 11.3843L36.5924 34.8964C37.0571 35.3843 37.0571 36.1278 36.5924 36.6157C36.1278 37.0571 35.3379 37.0571 34.8732 36.6157ZM30.4589 26.0445C30.6912 25.394 30.8074 24.7202 30.8074 24.0232C30.8074 20.2362 27.7638 17.2159 24 17.2159C23.303 17.2159 22.606 17.3553 22.0019 17.5644L18.7493 14.3349C20.3756 13.8703 22.1413 13.545 24 13.545C33.8974 13.545 40.635 21.5373 40.635 24.0232C40.635 25.3708 38.6137 28.3679 35.1752 30.8074L30.4589 26.0445ZM29.274 33.6883C27.6476 34.1762 25.8819 34.5015 24 34.5015C14.1955 34.5015 7.36496 26.486 7.36496 24.0232C7.36496 22.6757 9.40949 19.6786 12.8248 17.2391L17.5411 21.9787C17.3088 22.606 17.1694 23.303 17.1694 24.0232C17.1926 27.7173 20.2362 30.8074 24 30.8074C24.7202 30.8074 25.394 30.6912 26.0213 30.4356L29.274 33.6883ZM24.7667 20.3524C26.3233 20.3988 27.6012 21.7464 27.6476 23.2333L24.7667 20.3524ZM23.2565 27.6709C21.6302 27.6476 20.3291 26.2536 20.3291 24.7435L23.2565 27.6709Z';
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
      <g clipPath="url(#clip0_1007_43)">
        <path d={d} fill={color} />
      </g>

      <defs>
        <clipPath id="clip0_1007_45">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
