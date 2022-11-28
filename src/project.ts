import { typescript } from 'projen';

export interface CdklabsConstructLibraryOptions extends typescript.TypeScriptProjectOptions {
}

/**
 * Create a Cdklabs Construct Library Project
 *
 * @pjid cdklabs-construct-lib
 */
export class CdklabsConstructLibrary extends typescript.TypeScriptProject {
  constructor(options: CdklabsConstructLibraryOptions) {
    super(options);
    // TODO
  }
}