import { awscdk, github } from 'projen';
import { customWorkflow } from './custom';
// import { UpdateSnapshot } from 'projen/lib/javascript';

// can't use Omit<> or Partial<> because this needs to be jsii compliant :(
// Illegal extends clause for an exported API: MappedType
export interface CdklabsConstructLibraryOptions extends awscdk.AwsCdkConstructLibraryOptions {
}

/**
 * Create a Cdklabs Construct Library Project
 *
 * @pjid cdklabs-construct-lib
 */
export class CdklabsConstructLibrary extends awscdk.AwsCdkConstructLibrary {
  constructor(options: CdklabsConstructLibraryOptions) {
    super({
      autoApproveUpgrades: true,
      autoApproveOptions: {
        allowedUsernames: ['cdklabs-automation'],
        secret: 'GITHUB_TOKEN',
      },
      authorOrganization: true,

      // this is the value add, imo. this feature was added in 2 months ago to projen
      // the default is UpdateSnapshot.ALWAYS, which is a testing risk
      // https://github.com/projen/projen/pull/2129
      // jestOptions: {
      //   updateSnapshot: UpdateSnapshot.NEVER,
      // },
      ...options,
      repositoryUrl: '',
      name: '',
    });

    // if (!options.name.startsWith('cdk')) {
    //   throw new Error(`cdklabs projects must start with cdk prefix, but got ${options.name}`);
    // }

    this.addCustomWorkflow();
  }

  private addCustomWorkflow() {
    let workflows = github.GitHub.of(this);
    if (!workflows) {
      workflows = new github.GitHub(this);
    }
    const custom = workflows.addWorkflow('custom-workflow');
    custom.on({
      issues: {
        types: [
          'labeled',
          'opened',
          'reopened',
        ],
      },
    });
    custom.addJobs({ customJob: customWorkflow });
  }
}