import SkillList from './skill-list';
import { render } from '@testing-library/react';

describe('SkillList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SkillList skills={[]} />);
        expect(baseElement).toBeTruthy();
    });
});
