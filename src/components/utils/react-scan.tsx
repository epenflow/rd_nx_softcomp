import { castToBoolean } from '~/lib/utils';

const ReactScan = () => {
  return process.env.NODE_ENV === 'development' ||
    castToBoolean(process.env.NEXT_PUBLIC_REACT_SCAN_DEVTOOLS) ? (
    <>
      <script async src="https://unpkg.com/react-scan/dist/auto.global.js" />
      <script
        dangerouslySetInnerHTML={{
          __html:
            'window.ReactScanOptions = { dangerouslyForceRunInProduction: true };'
        }}
      />
    </>
  ) : null;
};

export default ReactScan;
