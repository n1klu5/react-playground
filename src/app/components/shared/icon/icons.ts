import { lazy as _lazy } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lazy(importFn: () => Promise<any>) {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  Spinner: lazy(() => import('./icons/spinner.svg')),
};
