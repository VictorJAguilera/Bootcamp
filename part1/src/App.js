import './App.css';
import Mensaje from './mensaje.js';

const Description = () => {
  return <p>
  Esta es la app del curso fullstack bootcamp
  </p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un Full Stack Bootcamp' />
      <Mensaje color='yellow' message='De React.' />
      <Description />
      <Description />
      <Description />
    </div>
  )
}

export default App;
