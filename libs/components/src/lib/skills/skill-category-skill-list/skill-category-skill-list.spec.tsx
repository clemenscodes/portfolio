import SkillCategorySkillList from './skill-category-skill-list';
import { render } from '@testing-library/react';

describe('SkillCategorySkillList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategorySkillList softwareSkills={[]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
