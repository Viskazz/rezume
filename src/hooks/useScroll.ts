import {useState, useEffect} from 'react';

// кастомный хук
export default function useScroll(){
    const [scrollY, setScrollY] = useState<number>(0);
  
    // ф-я -обработчик события onScroll
    const listener = ()=> {
      // pageYOffset на случай если браузер древний
      setScrollY(-document.body.getBoundingClientRect().top || window.pageYOffset);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", listener);
      // useEffect / useLayoutEffect могут возвращать clean-up ф-ю (опционально)
      return () => {
        window.removeEventListener("scroll", listener);
      };
    },[]);
  
    return { scrollY }
  }