import { expect, test } from 'vitest';
import { calcInBackground } from '../src/worker-wrapper.js';

test('worker', async () => {
  const result = await calcInBackground(45);
  expect(result).toBe(18);
});
