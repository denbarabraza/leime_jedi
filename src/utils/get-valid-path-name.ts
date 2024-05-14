/**
 * Retrieves a valid path name from the given path.
 * @param pathName - The path name to retrieve the valid name from.
 * @returns Returns the valid path name.
 */
export const getValidPathName = (pathName: string): string => {
  if (pathName === '/') {
    return 'Home';
  }

  const pathFirstSegments = pathName.split('/')[1];
  const firstLetter = pathFirstSegments.charAt(0).toUpperCase();
  const restOfLetters = pathFirstSegments.slice(1).toLowerCase();

  return firstLetter + restOfLetters;
};
