import { SizeType, VariantType } from '../types';

export function prefixSize(size: SizeType) {
  const PREFIX = 'size';
  return `${PREFIX}-${size}`;
}

export function pickVariant(varaint: VariantType) {
  return `${varaint}`;
}

export function rem(px: string) {
  
}
