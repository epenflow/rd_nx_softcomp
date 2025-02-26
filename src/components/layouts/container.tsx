import type React from 'react';
import { cn } from '~/lib/utils';

/**
 * @todo - add - variant
 */
type ContainerProps = React.ComponentProps<'section'>;
const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        'h-container flex overflow-x-hidden',
        'border-b border-dashed',
        'bg-background',
        className
      )}
      {...props}>
      <span className="block [--diagonal-rotation:45deg] diagonal h-auto w-full shrink" />
      {children}
      <span className="block [--diagonal-rotation:-45deg] diagonal h-auto w-full shrink" />
    </section>
  );
};
export default Container;

type InnerContainerProps = React.ComponentProps<'div'>;
export const InnerContainer: React.FC<InnerContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'container h-full border-x border-dashed shrink-0 bg-card',
        className
      )}
      {...props}
    />
  );
};
