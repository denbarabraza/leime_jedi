export const checkPathActive = (pathName: string, path: string) => {
  return pathName.replace(/ru(\/)?|en(\/)?/, '') === path;
};
