import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.REACT_APP_API_URL || 'http://localhost:4000/graphql',
  documents: ['src/**/*.ts'],
  generates: {
    './src/api/interfaces/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
