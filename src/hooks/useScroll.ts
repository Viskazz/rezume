import React, {useState, useEffect} from 'react';

// кастомный хук
export default function useScroll(){
    const [scrollY, setScrollY] = useState(document.body.getBoundingClientRect().top);
  
    const listener = ()=> {
      setScrollY(-document.body.getBoundingClientRect().top);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });
  
    return {scrollY}
  }