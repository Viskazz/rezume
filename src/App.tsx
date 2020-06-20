import React, { useState, Fragment } from 'react';
import useScroll from './hooks/useScroll';
import { useFetch } from './hooks/useFetch';
import { Experience3 } from './sections/Experience3';
import { Experience2 } from './sections/Experience2';
import { Experience1 } from './sections/Experience1';
import { Experience0 } from './sections/Experience0';
import { JobName } from './sections/JobName';
import { KeyPractice } from './sections/KeyPractice';
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


  const data = useFetch('https://hn.algolia.com/api/v1/search?query=redux', {
    method: 'GET'
  })

  return (
    <Fragment>
      <div className="App">
        <header className={`App-header ${shrink}`}>
          <div className="App-inner">
            <div className={`name ${shrink}`}>
              <h1>{props.name}</h1>
              <p>{props.job}</p>
            </div>
            <nav>
              <div>
                <p className="phone">{props.phone}&nbsp;</p>
                <p className={`email ${shrink}`}>{props.email}</p>
              </div>
            </nav>
          </div>
        </header>

        {data.error && <div>Ошибка выполнения запроса ...</div>}

            <div className="App-main" >
              <JobName />
              <Experience3 />
              <Experience2 />
              <Experience1 />
              <Experience0 />
              <KeyPractice />
            </div>

      </div>
    </Fragment>
  );
}

export default App;
