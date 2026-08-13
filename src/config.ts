export const domainName = 'mobileslog.com';
export const email = `hello@${domainName}`;

export const currentYear = new Date().getFullYear();

export const startYear = 2012;
export const yearsOfExperience = currentYear - startYear;

export const productUrls = {
  status: {
    href: `https://status.${domainName}`,
    label: `status.${domainName}`,
  },
  mobileslog: {
    href: `https://${domainName}`,
    label: domainName,
  },
  psx: {
    href: `https://psx.${domainName}`,
    label: `psx.${domainName}`,
  },
  ev: {
    href: `https://ev.${domainName}`,
    label: `ev.${domainName}`,
  },
} as const;
