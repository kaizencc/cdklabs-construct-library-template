import { UpdateSnapshot } from 'projen/lib/javascript';

export const cdklabsCommonProps = {
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
};
