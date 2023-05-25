import SkillList from './skill-list';
import { skills } from '@config';
import { render } from '@testing-library/react';

describe('SkillList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SkillList skills={skills.skills} />);
        expect(baseElement).toBeTruthy();
    });
});
