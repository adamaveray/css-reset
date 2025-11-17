import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import mergeAtRules from 'postcss-merge-at-rules';

export default {
  parser: 'postcss-scss',
  plugins: [autoprefixer(), mergeAtRules({ atRulePattern: 'layer' }), cssnano({ preset: 'default' })],
};
