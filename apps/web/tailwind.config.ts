import baseConfig from '../../tailwind.config';
import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
    presets: [baseConfig],
    content: [
        join(__dirname, 'pages/**/*!(*.stories|*.spec).{ts,tsx,html}'),
        join(__dirname, '../../libs/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ],
} satisfies Config;
