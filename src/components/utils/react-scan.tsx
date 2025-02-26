import { castToBoolean } from '~/lib/utils';

const ReactScan = () => {
  if (
    castToBoolean(process.env.NEXT_PUBLIC_REACT_SCAN_DEVTOOLS) &&
    typeof window !== 'undefined'
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reactScan = (window as any).reactScan;
    if (typeof reactScan === 'function') {
      reactScan({ dangerouslyForceRunInProduction: true });
    }
  }

  return process.env.NODE_ENV === 'development' ||
    castToBoolean(process.env.NEXT_PUBLIC_REACT_SCAN_DEVTOOLS) ? (
    <script async src="https://unpkg.com/react-scan/dist/auto.global.js" />
  ) : null;
};

export default ReactScan;
