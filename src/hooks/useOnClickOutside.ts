import { RefObject, useEffect } from 'react';

/**

 Custom hook that handles click events outside of a specified element.
 @param ref - The reference to the HTML element to monitor for clicks outside.
 @param closeMenu - Function to be called when a click outside the element occurs.
 */

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeMenu: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, closeMenu]);
};
