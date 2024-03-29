import SkillCategoryList from './skill-category-list';
import { skills } from '@config';
import { render } from '@testing-library/react';

describe('SkillCategoryList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategoryList skillCategories={skills.skillCategories} />
        );
        expect(baseElement).toBeTruthy();
    });
});
