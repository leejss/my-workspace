import React from 'react';
import './Button.scss';
import clsx from 'clsx';
import { SizeType, VariantType } from '../../types';
import { pickVariant, prefixSize } from '../../utils/css';

export interface ButtonProps {
  varaint?: VariantType;
  size?: SizeType;
  contained?: boolean;
  text?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button = ({
  varaint,
  contained = true,
  outlined,
  size = 'medium',
  text,
  className,
}: ButtonProps) => {
  const classnames = clsx(
    'Button',
    varaint && pickVariant(varaint),
    contained && 'contained',
    outlined && 'outlined',
    size && prefixSize(size),
    text && text,
    className
  );
  return (
    <div>
      <button className={classnames}>Hello?</button>
    </div>
  );
};
