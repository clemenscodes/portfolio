import { skills } from '@config';
import { render } from '@testing-library/react';
import SkillCategorySkill from './skill-category-skill';

describe('SkillCategorySkill', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategorySkill
                softwareSkill={skills.skillCategories[0].softwareSkills[0]}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
