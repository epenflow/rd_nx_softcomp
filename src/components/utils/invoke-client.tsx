'use client';

import { castToBoolean, disableReactDevTools } from '~/lib/utils';

const InvokeClient = () => {
  if (
    process.env.NODE_ENV === 'production' ||
    castToBoolean(process.env.NEXT_PUBLIC_REACT_DEVTOOLS)
  ) {
    disableReactDevTools();
  }
  return null;
};
export default InvokeClient;
