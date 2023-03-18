import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import './tests/i18n';

expect.extend(matchers);

afterEach(cleanup);
afterEach(() => {
  cleanup();
});

global.fetch = fetch;
global.Request = Request;
global.Response = Response;
global.Headers = Headers;
