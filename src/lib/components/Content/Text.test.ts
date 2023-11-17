import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Text from './Text.svelte';

const props = {
    text: "Test",
    appearance: {
        type: 'header',
        color: "#fff",
        size: "80px"
    }
} as Editor.TextElementProps;

describe('Text Component', () => {
    it('shows default text', () => {
        render(Text, { props });

        expect(screen.getByText("This is an DIV text element")).toBeInTheDocument();
    })
});