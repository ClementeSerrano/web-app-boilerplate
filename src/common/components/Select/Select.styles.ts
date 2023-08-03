import { Theme } from '../../theme/theme.types';

import { SelectInputStyles } from './Select.types';

export function getSelectInputStyles({
  style,
  theme,
}: {
  style?: SelectInputStyles;
  theme: Theme;
}) {
  return {
    //@ts-ignore
    menuPortal(base) {
      return { ...base, zIndex: 1, ...style?.menuPortal };
    },
    //@ts-ignore
    control(base) {
      return {
        ...base,
        backgroundColor: theme.palette.background.level2,
        fontSize: theme.typography.fontSizes.md,
        color: theme.palette.text.level3,
        border: `1px solid ${theme.palette.background.level3}`,
        borderRadius: theme.shape.borderRadius.sm,
        padding: `0 ${theme.spacing.xs}px`,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus': { border: 'none', boxShadow: 'none' },
        '&:active': { border: 'none', boxShadow: 'none' },
        ...style?.control,
      };
    },
    //@ts-ignore
    container(base) {
      return {
        ...base,
        width: '100%',
        border: '1px solid transparent',
        borderRadius: theme.shape.borderRadius.sm,
        '&:hover': {
          border: `1px solid ${theme.palette.primary.main}`,
        },
        ...style?.container,
      };
    },
    //@ts-ignore
    valueContainer(base) {
      return {
        ...base,
        padding: '8px 0',
        color: theme.palette.text.level3,
        ...style?.valueContainer,
      };
    },
    indicatorContainer() {
      return style?.indicatorContainer;
    },
    indicatorSeparator() {
      return { display: 'none', ...style?.indicatorSeparator };
    },
    dropdownIndicator() {
      return style?.dropdownIndicator;
    },
    //@ts-ignore
    singleValue(base) {
      return {
        ...base,
        marginLeft: '0',
        color: theme.palette.text.level3,
        ...style?.singleValue,
      };
    },
    //@ts-ignore
    placeholder(base) {
      return { ...base, marginLeft: '0', ...style?.placeholder };
    },
    //@ts-ignore
    menu(base) {
      return {
        ...base,
        border: `1px solid ${theme.palette.background.level3}`,
        color: 'hsl(221,22%,66%)',
        fontSize: 14,
        padding: 16,
        backgroundColor: theme.palette.background.level2,
        boxShadow:
          '0px 0px 7px 20px rgba(0,0,0,0), 0 3px 5px 5px rgba(0,0,0,0.03)',
        minWidth: 180,
        ...style?.menu,
      };
    },
    //@ts-ignore
    option(base, state) {
      return {
        ...base,
        border: 'none',
        color: state.isSelected
          ? theme.palette.primary.contrastText
          : theme.palette.text.level3,
        backgroundColor: state.isSelected
          ? theme.palette.primary.main
          : state.isFocused
          ? theme.palette.background.level3
          : 'transparent',
        borderRadius: 5,
        cursor: 'pointer',
        padding: '12px 20px',
        '&:hover': {
          color: theme.palette.primary.contrastText,
        },
        ...style?.option,
      };
    },
  };
}
