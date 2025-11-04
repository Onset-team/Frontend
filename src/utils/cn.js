import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwind 클래스 병합 유틸
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
