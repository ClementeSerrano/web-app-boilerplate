import { NavlinkContainer } from './Navlink.styles';
import { NavlinkProps } from './Navlink.types';

export default function Navlink({
  children,
  variant = 'primary',
  format = 'text',
  size = 'md',
  className,
  ...props
}: NavlinkProps) {
  return (
    <NavlinkContainer
      {...props}
      variant={variant}
      format={format}
      size={size}
      className={({ isActive }) =>
        [className, isActive ? 'active' : null].filter(Boolean).join(' ')
      }
    >
      {children}
    </NavlinkContainer>
  );
}
