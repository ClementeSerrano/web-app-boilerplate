import { NavlinkContainer } from './Navlink.styles';
import { NavlinkProps } from './Navlink.types';

export default function Navlink({
  children,
  variant = 'primary',
  container = false,
  size = 'md',
  className,
  ...props
}: NavlinkProps) {
  return (
    <NavlinkContainer
      {...props}
      variant={variant}
      container={container.toString()}
      size={size}
      className={({ isActive }) =>
        [className, isActive ? 'active' : null].filter(Boolean).join(' ')
      }
    >
      {children}
    </NavlinkContainer>
  );
}
