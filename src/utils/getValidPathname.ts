export const getValidPathname = (pathName: string): string => {
  if (pathName === '/') {
    return 'Home';
  }

  const pathFirstSegments = pathName.split('/')[1];
  const firstLetter = pathFirstSegments.charAt(0).toUpperCase();
  const restOfLetters = pathFirstSegments.slice(1).toLowerCase();

  return firstLetter + restOfLetters;
};
