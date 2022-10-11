import React from 'react';
import styles from './style.scss';

interface Props {
  children: React.ReactNode;
  type?: keyof JSX.IntrinsicElements;
  size?: 'small' | 'regular' | 'large' | 'larger';
  weight?: 'bold' | 'semi-bold' | 'normal';
  color?:
    | 'alabaster'
    | 'zircon'
    | 'silver'
    | 'tundora'
    | 'gray'
    | 'denim'
    | 'apple'
    | 'panache'
    | 'red';
  layout?: 'block' | 'inline' | 'flex-center';
  className?: string;
  onClick?: () => void;
  bottomMargined?: boolean;
}

export const TextDisplay: React.FC<Props> = ({
  children,
  type,
  size,
  weight,
  color,
  layout,
  className,
  onClick,
  bottomMargined,
}) => {
  const textStyles = [
    className,
    styles.text,
    styles[`size-${size}`],
    styles[`weight-${weight}`],
    styles[`layout-${layout}`],
    styles[`color-${color}`],
    onClick && styles.clickable,
    bottomMargined && styles['bottom-margined'],
  ].join(' ');

  const CustomTag = type as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={textStyles} onClick={onClick}>
      {children}
    </CustomTag>
  );
};

TextDisplay.defaultProps = {
  size: 'regular',
  color: 'gray',
  weight: 'normal',
  layout: 'block',
  type: 'div',
  bottomMargined: false,
};
