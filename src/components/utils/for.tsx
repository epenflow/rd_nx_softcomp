import { withMemo } from '~/lib/utils';

type ForProps<T> = {
  each?: T[];
  children?: (value: T, index: number) => React.ReactNode;
};
const For = withMemo(<T,>({ each, children }: ForProps<T>): React.ReactNode => {
  return each?.map((value, index) => children?.(value, index));
});
export default For;
