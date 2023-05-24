import SkillCategorySkill from './skill-category-skill';
import { render } from '@testing-library/react';

describe('SkillCategorySkill', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategorySkill
                softwareSkill={{
                    name: 'Category skill name',
                    src: '/category-skill-source',
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
