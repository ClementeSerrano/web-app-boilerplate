import { VectorProps } from '../../theme/theme.types';

export default function LinkedInIcon({
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
      <path
        d="M48 3.52941V44.4706C48 45.4066 47.6282 46.3044 46.9663 46.9663C46.3044 47.6282 45.4066 48 44.4706 48H3.52941C2.59335 48 1.69563 47.6282 1.03374 46.9663C0.371848 46.3044 0 45.4066 0 44.4706L0 3.52941C0 2.59335 0.371848 1.69563 1.03374 1.03374C1.69563 0.371848 2.59335 0 3.52941 0L44.4706 0C45.4066 0 46.3044 0.371848 46.9663 1.03374C47.6282 1.69563 48 2.59335 48 3.52941V3.52941ZM14.1176 18.3529H7.05882V40.9412H14.1176V18.3529ZM14.7529 10.5882C14.7567 10.0543 14.6552 9.52485 14.4543 9.03013C14.2534 8.5354 13.957 8.0851 13.5821 7.70492C13.2071 7.32475 12.761 7.02214 12.2691 6.81439C11.7772 6.60664 11.2492 6.49781 10.7153 6.49412H10.5882C9.50241 6.49412 8.46105 6.92546 7.69326 7.69326C6.92546 8.46105 6.49412 9.50241 6.49412 10.5882C6.49412 11.6741 6.92546 12.7154 7.69326 13.4832C8.46105 14.251 9.50241 14.6824 10.5882 14.6824V14.6824C11.1222 14.6955 11.6536 14.6033 12.1519 14.411C12.6502 14.2187 13.1058 13.9301 13.4925 13.5617C13.8793 13.1933 14.1897 12.7523 14.4059 12.2639C14.6222 11.7755 14.7401 11.2493 14.7529 10.7153V10.5882ZM40.9412 27.2188C40.9412 20.4282 36.6212 17.7882 32.3294 17.7882C30.9242 17.7179 29.5251 18.0172 28.2717 18.6563C27.0182 19.2954 25.9543 20.252 25.1859 21.4306H24.9882V18.3529H18.3529V40.9412H25.4118V28.9271C25.3097 27.6966 25.6973 26.4756 26.4903 25.5293C27.2833 24.5829 28.4177 23.9877 29.6471 23.8729H29.9153C32.16 23.8729 33.8259 25.2847 33.8259 28.8424V40.9412H40.8847L40.9412 27.2188Z"
        fill={color}
      />
    </svg>
  );
}
