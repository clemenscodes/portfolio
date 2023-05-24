import SkillCategoryList from './skill-category-list';
import { render } from '@testing-library/react';

describe('SkillCategoryList', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategoryList skillCategories={[]} />
        );
        expect(baseElement).toBeTruthy();
    });
});
