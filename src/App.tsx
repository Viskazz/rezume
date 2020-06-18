import React, { useState } from 'react';
import useScroll from './hooks/useScroll';
import { useFetch } from './hooks/useFetch';
import { Experience3 } from './Experience3';
import { Experience2 } from './Experience2';
import { Experience1 } from './Experience1';
import { Experience0 } from './Experience0';
import { JobName } from './JobName';
// import logo from './logo.svg';
import './App.css';

interface IAppProps {
  name: string,
  job: string,
  phone: string,
  email: string
}

function App(props: IAppProps) {
  // хук useScroll положит в стэйт значение текущей "высоты" страницы
  const { scrollY } = useScroll();

  // это просто хук для экстраполирования имени класса в className
  const [shrink, setShrink] = useState<string>('');

  // каждые 250 мс проверяем высоту скролла, если больше 100 - устанавливаем имя класса, иначе сбрасываем
  (function () {
    setTimeout(() => {
      if (scrollY >= 100) setShrink('shrink')
      else setShrink('');
    }, 250)
  })()

  // 
  // const data = useFetch('https://api.hh.ru/resumes/226e7603ff0809dbab0039ed1f4e67546c7377',{
  //   method: 'GET'
  // })

  // console.log(data)

  return (
    <div className="App">
      <header className={`App-header ${shrink}`}>
        <div className="App-inner">
          <div className={`name ${shrink}`}>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
          </div>
          <nav>
            <p>{props.phone}&nbsp;</p>
            <p className={`${shrink}`}>{props.email}</p>
          </nav>
        </div>

      </header>
      <div className="App-main">
        <JobName />
        <Experience3 />
        <Experience2 />
        <Experience1 />
        <Experience0 />
      </div>
    </div>
  );
}

export default App;
