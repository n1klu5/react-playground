import { matchRequestUrl, MockedRequest } from 'msw';
import { setupServer } from 'msw/node';

type Input = Parameters<typeof setupServer>;

export const setupMockServer = (...handlers: Input) => {
  const mockServer = setupServer(...handlers);

  const waitForRequest = async (method: string, url: string) => {
    let requestId = '';

    return new Promise<MockedRequest>((resolve, reject) => {
      mockServer.events.on('request:start', (req) => {
        const matchesMethod = req.method.toLowerCase() === method.toLowerCase();
        const matchesUrl = matchRequestUrl(req.url, url).matches;
        if (matchesMethod && matchesUrl) {
          requestId = req.id;
        }
      });
      mockServer.events.on('request:match', (req) => {
        if (req.id === requestId) {
          resolve(req);
        }
      });
      mockServer.events.on('request:unhandled', (req) => {
        if (req.id === requestId) {
          reject(new Error(`The ${req.method} ${req.url.href} request was unhandled.`));
        }
      });
    });
  };

  beforeAll(() => {
    mockServer.listen({
      onUnhandledRequest: 'warn',
    });
  });

  beforeEach(() => {
    mockServer.resetHandlers();
  });

  afterAll(() => {
    mockServer.close();
  });

  return { mockServer, waitForRequest };
};
