import Emoji from './emoji';
import { render, screen } from '@testing-library/react';

describe('Emoji', () => {
    it('renders the emoji and label', () => {
        const props = {
            emoji: '🚀',
            label: 'rocket',
        };
        render(<Emoji {...props} />);
        const spanElement = screen.getByRole('img');
        expect(spanElement).toBeInTheDocument();
        expect(spanElement).toHaveTextContent(props.emoji);
        expect(spanElement).toHaveAccessibleName(props.label);
        expect(spanElement).toHaveAttribute('aria-hidden', 'false');
    });

    it('checks that aria-hidden is true', () => {
        const props = {
            emoji: '🚀',
            label: '',
        };
        render(<Emoji {...props} />);
        const spanElement = screen.queryByRole('img');
        expect(spanElement).not.toBeInTheDocument();
    });

    it('checks that aria-hidden is true if no label is given', () => {
        const props = {
            emoji: '🚀',
            label: '',
        };
        render(<Emoji {...props} />);
        const spanElement = screen.queryByRole('img', { hidden: true });
        expect(spanElement).toBeInTheDocument();
        expect(spanElement).toHaveTextContent(props.emoji);
        expect(spanElement).toHaveAccessibleName(props.label);
        expect(spanElement).toHaveAttribute('aria-hidden', 'true');
    });
});
