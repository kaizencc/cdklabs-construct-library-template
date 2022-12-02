import { awscdk, typescript } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';

export enum Stability {
  EXPERIMENTAL = 'experimental',
  STABLE = 'stable',
}

export interface CdkConstructLibraryOptions extends awscdk.AwsCdkConstructLibraryOptions {
}

/**
 * Create a Cdk Construct Library Project
 *
 * @pjid cdk-construct-lib
 */
export class CdkConstructLibrary extends awscdk.AwsCdkConstructLibrary {
  constructor(options: CdkConstructLibraryOptions) {
    super({
      autoApproveUpgrades: true,
      autoApproveOptions: {
        allowedUsernames: ['cdklabs-automation'],
        secret: 'GITHUB_TOKEN',
      },
      authorOrganization: true,
      minNodeVersion: '14.17.0',
      jestOptions: {
        updateSnapshot: UpdateSnapshot.NEVER,
      },
      ...options,
    });
  }
}

export interface CdkTypeScriptProjectOptions extends typescript.TypeScriptProjectOptions {
}

/**
 * Create a Cdk TypeScript Project
 *
 * @pjid cdk-ts-proj
 */
export class CdkTypeScriptProject extends typescript.TypeScriptProject {
  constructor(options: CdkTypeScriptProjectOptions) {
    super(options);
  }
}