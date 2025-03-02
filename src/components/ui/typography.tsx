import type React from 'react';
import { cn } from '~/lib/utils';

type HeadingProps = React.ComponentProps<'h1'>;
export const Heading: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      className={cn(
        'text-3xl md:text-5xl font-medium text-foreground',
        className
      )}
      {...props}
    />
  );
};

type TextProps = React.ComponentProps<'p'>;
export const Text: React.FC<TextProps> = ({ className, ...props }) => {
  return <p className={cn('text-foreground/80', className)} {...props} />;
};

type BlockProps = React.ComponentProps<'div'> & {
  center?: boolean;
};
export const Block: React.FC<BlockProps> = ({
  className,
  center,
  ...props
}) => {
  return (
    <div
      className={cn(
        'space-y-2.5 max-w-xl text-pretty',
        center && 'mx-auto',
        className
      )}
      {...props}
    />
  );
};
