import { expect, test } from 'vitest';
import { transformCSSString } from './utils.ts';
test('transformCSSString', () => {
    expect(transformCSSString('px', '7px')).toBe(7);
    expect(transformCSSString('px', '7rem')).toBe('7rem');
});
