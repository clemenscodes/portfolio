import SkillCategory from './skill-category';
import { render } from '@testing-library/react';

describe('SkillCategory', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <SkillCategory
                category={{
                    categoryName: 'Frontend',
                    softwareSkills: [],
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
