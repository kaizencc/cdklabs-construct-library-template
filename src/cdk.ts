import { awscdk, typescript } from 'projen';
import { Stability } from 'projen/lib/cdk';
import { requiredPropertyOverrides } from './cdk-properties';

export interface CdkConstructLibraryOptions extends awscdk.AwsCdkConstructLibraryOptions {
}

/**
 * Create a Cdk Construct Library Project
 *
 * @pjid cdk-construct-lib
 */
export class CdkConstructLibrary extends awscdk.AwsCdkConstructLibrary {
  private readonly options: CdkConstructLibraryOptions;
  constructor(options: CdkConstructLibraryOptions) {
    super({
      ...options,
      ...requiredPropertyOverrides,
    });

    this.options = options;

    if (options.stability === Stability.STABLE) {
      const errors = this.stabilityRequirements();
      if (errors.length > 0) {
        throw new Error(`The project does not pass stability requirements due to the following errors:\n${errors}`);
      }
    }
  }

  private stabilityRequirements(): string[] {
    const errors: string[] = [];
    if (!this.options.publishToPypi) {
      errors.push('Publishing Error: project not configured to publish to Python');
    }
    if (!this.options.publishToMaven) {
      errors.push('Publishing Error: project not configured to publish to Maven');
    }
    if (!this.options.publishToNuget) {
      errors.push('Publishing Error: project not configured to publish to Nuget');
    }
    if (!this.options.publishToGo) {
      errors.push('Publishing Error: project not configured to publish to Go');
    }
    return errors;
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
    super({
      ...options,
      ...requiredPropertyOverrides,
    });
  }
}
