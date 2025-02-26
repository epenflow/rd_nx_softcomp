import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const cn: (...args: ClassValue[]) => string = (...args) => {
  return twMerge(clsx(args));
};

export const withMemo: <T>(
  Component: T,
  propsAreEqual?: (prevProps: Readonly<T>, nextProps: Readonly<T>) => boolean
) => T = React.memo;
