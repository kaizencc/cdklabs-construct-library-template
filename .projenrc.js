const { cdk } = require("projen");
const project = new cdk.JsiiProject({
  author: "Kaizen Conroy",
  authorAddress: "zen.conroy@gmail.com",
  defaultReleaseBranch: "main",
  name: "poc",
  repositoryUrl: "https://github.com/zen.conroy/poc.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();