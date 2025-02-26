'use client';

import React from 'react';
import { scan } from 'react-scan';
import { castToBoolean, disableReactDevTools } from '~/lib/utils';

const InvokeClient = () => {
  React.useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' ||
      castToBoolean(process.env.NEXT_PUBLIC_REACT_DEVTOOLS)
    ) {
      disableReactDevTools();
    }

    scan({
      enabled:
        process.env.NODE_ENV === 'development' ||
        castToBoolean(process.env.NEXT_PUBLIC_REACT_SCAN_DEVTOOLS),
      dangerouslyForceRunInProduction: castToBoolean(
        process.env.NEXT_PUBLIC_REACT_SCAN_DEVTOOLS
      )
    });
  }, []);
  return null;
};
export default InvokeClient;
