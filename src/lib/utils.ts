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

export const disableReactDevTools = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const DEVTOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (typeof DEVTOOLS === 'object') {
      for (const [key, value] of Object.entries(DEVTOOLS)) {
        DEVTOOLS[key] = typeof value === 'function' ? Function.prototype : null;
      }
    }
  }
};

export const castToBoolean: (value?: string | number) => boolean = (value) => {
  const BOOLEAN_POSITIVES = ['1', 1, 'true', true];
  const BOOLEAN_NEGATIVES = ['0', 0, 'false', false];

  if (typeof value !== 'undefined') {
    if (BOOLEAN_NEGATIVES.includes(value)) {
      return false;
    }

    if (BOOLEAN_POSITIVES.includes(value)) {
      return true;
    }
  }

  return false;
};
