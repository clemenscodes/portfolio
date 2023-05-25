import SkillCategorySkillList from './skill-category-skill-list';
import { skills } from '@config';
import { render } from '@testing-library/react';

describe('SkillCategorySkillList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategorySkillList
                softwareSkills={skills.skillCategories[0].softwareSkills}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
