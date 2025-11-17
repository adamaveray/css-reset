export default {
  ignoreBinaries: [
    'publish', // Bun action
  ],
  ignoreDependencies: [
    // Build tools
    'bumpp',
    'sass',
    'postcss-cli',
    'postcss-scss',
  ],
  entry: ['*.js'],
};
