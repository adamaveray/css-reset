import { makeStylelintConfig } from '@averay/codeformat';

export default {
  ...makeStylelintConfig(),
  ignoreFiles: ['dist/**', 'node_modules/**'],
};
