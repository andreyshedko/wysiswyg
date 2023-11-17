import { expect, test } from 'vitest';
import { replaces, transformCSSString } from './utils.ts';
test('transformCSSString', () => {
    expect(transformCSSString('px', '7px')).toBe(7);
    expect(transformCSSString('px', '7rem')).toBe('7rem');
});
test('replaces', () => {
    expect(replaces('size')).toBe('font-size');
    expect(replaces('wheight')).toBe('font-weight');
});
