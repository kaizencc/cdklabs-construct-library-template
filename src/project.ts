import { awscdk } from 'projen';
// import { UpdateSnapshot } from 'projen/lib/javascript';

export interface CdklabsConstructLibraryOptions extends Omit<awscdk.AwsCdkConstructLibraryOptions, 'repositoryUrl' | 'authorAddress'> {
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
      authorAddress: 'aws-cdk-dev@amazon.com', // recently renamed from authorEmail
      authorName: 'Amazon Web Services',
      authorOrganization: true,
      repositoryUrl: '',

      // this is the value add, imo. this feature was added in 2 months ago to projen
      // the default is UpdateSnapshot.ALWAYS, which is a testing risk
      // https://github.com/projen/projen/pull/2129
      // jestOptions: {
      //   updateSnapshot: UpdateSnapshot.NEVER,
      // },
      ...options,
    });

    if (!options.name.startsWith('cdk')) {
      throw new Error(`cdklabs projects must start with cdk prefix, but got ${options.name}`);
    }
  }
}