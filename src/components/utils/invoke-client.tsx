'use client';

import React from 'react';
import { castToBoolean, disableReactDevTools } from '~/lib/utils';

const InvokeClient = () => {
  React.useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' ||
      castToBoolean(process.env.NEXT_PUBLIC_REACT_DEVTOOLS)
    ) {
      disableReactDevTools();
    }
  }, []);
  return null;
};
export default InvokeClient;
