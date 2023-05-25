import SkillCategory from './skill-category';
import { skills } from '@config';
import { render } from '@testing-library/react';

describe('SkillCategory', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategory category={skills.skillCategories[0]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
