import React, {useState} from 'react';
import useScroll from './hooks/useScroll';
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
   (function() {
    setTimeout(()=>{
      if (scrollY >= 100) setShrink('shrink')
      else setShrink('');
    }, 250)
  })()
  
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
        <h1>Main Block</h1>
        <p>scrollY: {scrollY}</p>
        <p>shrink: {shrink}</p>
        <section>
          <div><p>Cardigan gluten-free photo booth pug, occupy ethnic bicycle rights disrupt ennui jean shorts art party raw denim Carles Tonx artisan. Freegan aesthetic skateboard, forage iPhone ugh umami tumblr McSweeney's chillwave biodiesel vinyl pitchfork gentrify asymmetrical. Sartorial synth wayfarers, freegan pork belly post-ironic ennui salvia direct trade shoreditch Wes Anderson pitchfork. Mumblecore Truffaut american apparel, Austin single-origin coffee post-ironic tofu retro Vice fanny pack narwhal Neutra skateboard 90's. Kogi sartorial post-ironic gentrify helvetica McSweeney's Schlitz, mustache 8-bit polaroid hella flexitarian viral kale chips tote bag. Banh mi PBR typewriter Banksy. Beard messenger bag deep v, keffiyeh lo-fi umami four loko vinyl lomo hoodie wolf banh mi.</p></div>
        </section>
      </div>
    </div>
  );
}

export default App;
