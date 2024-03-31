import { useState } from "react";
import './App.css';


const App = () => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>TodoList</h1>
      </header>
      <section className='main'>
        <input
          className='new-todo'
          placeholder='O que precisa ser feito?'
          value={value}
          onChange={onChange}
        />
      </section>
    </section>
  );
}

export default App;
