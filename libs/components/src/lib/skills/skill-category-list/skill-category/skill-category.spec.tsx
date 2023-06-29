import { skills } from '@config';
import { render } from '@testing-library/react';
import SkillCategory from './skill-category';

describe('SkillCategory', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategory category={skills.skillCategories[0]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
