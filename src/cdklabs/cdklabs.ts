import { CdkConstructLibrary, CdkConstructLibraryOptions, CdkTypeScriptProject, CdkTypeScriptProjectOptions } from '../cdk';
import { cdklabsCommonProps } from './properties';

export interface CdklabsConstructLibraryOptions extends CdkConstructLibraryOptions {
}

/**
 * Create a Cdklabs Construct Library Project
 *
 * @pjid cdklabs-construct-lib
 */
export class CdklabsConstructLibrary extends CdkConstructLibrary {
  constructor(options: CdklabsConstructLibraryOptions) {
    super({
      ...cdklabsCommonProps,
      ...options,
    });
  }
}

export interface CdklabsTypeScriptProjectOptions extends CdkTypeScriptProjectOptions {
}

/**
 * Create a Cdklabs TypeScript Project
 *
 * @pjid cdklabs-ts-proj
 */
export class CdklabsTypeScriptProject extends CdkTypeScriptProject {
  constructor(options: CdklabsTypeScriptProjectOptions) {
    super({
      ...cdklabsCommonProps,
      ...options,
    });
  }
}