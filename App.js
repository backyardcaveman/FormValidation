import { useState } from 'react';
import Form from './components/Form/Form';

import './App.css'
import Header from './components/Header';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div>
      <Header/>
      {!formSubmitted && <Form submitted={setFormSubmitted}/>}
      {formSubmitted && <h1>Welcome back!</h1>}
    </div>
  );
}

export default App;


