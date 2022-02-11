
import { CardGetter } from './components/CardGetter';
import { Header } from './components/Header';
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <div>
    <Header/>
    <CardGetter/>
    <CardGetter/>
    <CardGetter/>
    
  </div>
  );
}

export default App;
