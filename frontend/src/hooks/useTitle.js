import { useEffect } from 'react';

// set title for component
function useTitle(title = 'English Website', isOverride = false) {
  useEffect(() => {
    //lejojme ndryshimin e titullit vetem kur kemi override
    if (isOverride) { 
      document.title = title;
    } 
  }, []);

  return null;
}

export default useTitle;
