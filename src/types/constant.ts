export const screen = {
  mobile: 600,
  tablet: 1279,
  desktop: 1280,
} as const;

export const breakpoints = {
  mobile: `${screen.mobile}px`,
  tablet: `${screen.tablet}px`,
  desktop: `${screen.desktop}px`,
} as const;

export const localStorageKey = {
  applyUserInfo: 'apply-user-info',
  applyContestName: 'apply-contest-name',
} as const;
