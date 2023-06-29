import { skills } from '@config';
import { render } from '@testing-library/react';
import SkillCategoryList from './skill-category-list';

describe('SkillCategoryList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategoryList skillCategories={skills.skillCategories} />
        );
        expect(baseElement).toBeTruthy();
    });
});
