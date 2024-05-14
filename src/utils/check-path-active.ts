/**
 * Checks if the given path is active.
 * @param pathName - The path name to check.
 * @param path - The specified path for comparison.
 * @returns Returns true if the specified path is active, otherwise false.
 */
export const checkPathActive = (pathName: string, path: string) => {
  return pathName.replace(/ru(\/)?|en(\/)?/, '') === path;
};
