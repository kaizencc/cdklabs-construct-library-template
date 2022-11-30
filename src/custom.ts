import { github } from 'projen';

export const customWorkflow: github.workflows.Job = {
  runsOn: ['ubuntu-latest'],
  permissions: {
    issues: github.workflows.JobPermission.READ,
  },
  steps: [
    {
      name: 'my custom workflow',
      run: 'echo hello world',
    },
  ],
};

