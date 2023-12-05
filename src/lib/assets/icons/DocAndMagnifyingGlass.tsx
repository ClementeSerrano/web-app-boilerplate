import { VectorProps } from '../../interfaces/theme.interfaces';

export default function DocAndMagnifyingGlass({
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
        d="M11.6672 44.2983H23.2838C22.0567 43.1734 21.0954 41.7827 20.5228 40.2284H12.0354C10.072 40.2284 9.09033 39.2262 9.09033 37.3447V6.99446C9.09033 5.13336 10.072 4.06988 12.0354 4.06988H33.121C35.023 4.06988 36.066 5.11291 36.066 6.99446V24.6647C37.6204 25.2373 39.0111 26.1986 40.1359 27.4256V6.72859C40.1359 2.29058 37.8658 0 33.4687 0H11.6672C7.29058 0 5 2.31104 5 6.72859V37.5697C5 42.0077 7.29058 44.2983 11.6672 44.2983ZM15.1236 12.3937H30.0533C30.7895 12.3937 31.3417 11.821 31.3417 11.0848C31.3417 10.369 30.7895 9.79634 30.0533 9.79634H15.1236C14.3669 9.79634 13.8147 10.369 13.8147 11.0848C13.8147 11.821 14.3669 12.3937 15.1236 12.3937ZM15.1236 19.3677H30.0533C30.7895 19.3677 31.3417 18.7951 31.3417 18.0588C31.3417 17.343 30.7895 16.7703 30.0533 16.7703H15.1236C14.3669 16.7703 13.8147 17.343 13.8147 18.0588C13.8147 18.7951 14.3669 19.3677 15.1236 19.3677ZM31.1577 44.2983C32.896 44.2983 34.5117 43.8074 35.882 42.9689L40.2382 47.3251C40.729 47.8159 41.2199 48 41.813 48C42.856 48 43.6536 47.1819 43.6536 46.0571C43.6536 45.5663 43.4286 45.055 43.0401 44.6664L38.6634 40.2693C39.6042 38.8581 40.1564 37.1402 40.1564 35.32C40.1564 30.3502 36.1274 26.3213 31.1577 26.3213C26.2084 26.3213 22.1589 30.3707 22.1589 35.32C22.1589 40.2693 26.2084 44.2983 31.1577 44.2983ZM31.1577 41.1896C27.9058 41.1896 25.2676 38.5513 25.2676 35.32C25.2676 32.1091 27.9058 29.4504 31.1577 29.4504C34.3686 29.4504 37.0068 32.1091 37.0068 35.32C37.0068 38.5513 34.389 41.1896 31.1577 41.1896Z"
        fill={color}
      />
    </svg>
  );
}