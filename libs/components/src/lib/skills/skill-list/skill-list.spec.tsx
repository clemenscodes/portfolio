import { skills } from '@config';
import { render } from '@testing-library/react';
import SkillList from './skill-list';

describe('SkillList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SkillList skills={skills.skills} />);
        expect(baseElement).toBeTruthy();
    });
});
