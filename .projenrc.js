const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Kaizen Conroy',
  authorAddress: 'zen.conroy@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'CdklabsConstructLibraryTemplate',
  repositoryUrl: 'https://github.com/kaizencc/cdklabs-construct-library-tempate.git',
  pakcageName: 'cdklabs-construct-library-template',
  deps: ['projen'],
  peerDeps: ['projen'],
});

project.synth();