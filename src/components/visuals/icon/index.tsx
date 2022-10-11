import React, { CSSProperties } from 'react';
import styles from './style.scss';

export interface Props {
  type: TIcon;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large';
  style?: CSSProperties;
  lat?: number;
  lng?: number;
  text?: string;
  display?: 'block' | 'inline';
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<Props> = ({ display, size, type, className, style, onClick }) => {
  const getClassNames = () => {
    return [
      styles.icon,
      styles[type],
      styles[`size-${size}`],
      styles[`display-${display}`],
      onClick && styles.clickable,
      className,
    ]
      .filter((style) => style)
      .join(' ');
  };

  return <div className={getClassNames()} style={style} onClick={onClick} />;
};

export type TIcon =
  | 'home'
  | 'pencil'
  | 'droplet'
  | 'image'
  | 'bell'
  | 'bubble2'
  | 'user'
  | 'users'
  | 'user-plus'
  | 'user-minus'
  | 'user-check'
  | 'user-tie'
  | 'spinner4'
  | 'spinner5'
  | 'search'
  | 'bookmark'
  | 'plus'
  | 'minus'
  | 'cross'
  | 'checkmark'
  | 'play3'
  | 'eject'
  | 'arrow-right'
  | 'circle-up'
  | 'make-group'
  | 'mail4';
