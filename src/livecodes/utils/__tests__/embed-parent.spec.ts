import { isSaveAllowedParent, resolveParentOrigin } from '../embed-parent';

describe('isSaveAllowedParent', () => {
  test.each([
    'https://hellowattson.ca',
    'https://hellowattson-staging.saadmin4.workers.dev',
    'https://workbench-hellowattson-staging.saadmin4.workers.dev',
    'http://localhost:4321',
    'http://localhost:8950',
  ])('allows %s', (origin) => {
    expect(isSaveAllowedParent(origin)).toBe(true);
  });

  test.each([
    'https://evil.example',
    'https://hellowattson.ca.evil.example',
    'http://localhost.evil.example',
    'http://hellowattson.ca',
    'https://hellowattson.ca:8443',
    'http://127.0.0.1:8950',
    'not a url',
  ])('rejects %s', (origin) => {
    expect(isSaveAllowedParent(origin)).toBe(false);
  });

  test('rejects null', () => {
    expect(isSaveAllowedParent(null)).toBe(false);
  });
});

describe('resolveParentOrigin', () => {
  test('prefers ancestorOrigins[0]', () => {
    expect(
      resolveParentOrigin({
        ancestorOrigins: ['https://hellowattson.ca'],
        referrer: 'https://evil.example/x',
      }),
    ).toBe('https://hellowattson.ca');
  });

  test('falls back to referrer origin with path stripped', () => {
    expect(
      resolveParentOrigin({ ancestorOrigins: [], referrer: 'https://hellowattson.ca/a/b?c=1' }),
    ).toBe('https://hellowattson.ca');
    expect(resolveParentOrigin({ referrer: 'http://localhost:4321/x' })).toBe(
      'http://localhost:4321',
    );
  });

  test('returns null for empty or invalid referrer', () => {
    expect(resolveParentOrigin({ referrer: '' })).toBeNull();
    expect(resolveParentOrigin({ referrer: 'nope' })).toBeNull();
    expect(resolveParentOrigin({ ancestorOrigins: null })).toBeNull();
  });
});
