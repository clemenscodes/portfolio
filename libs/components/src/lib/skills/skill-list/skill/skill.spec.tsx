import Skill from './skill';
import { render } from '@testing-library/react';

describe('Skill', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Skill
                skill={{
                    description: 'Skill',
                    name: 'Skill name',
                }}
            />
        );
        expect(baseElement).toBeTruthy();
    });
});
