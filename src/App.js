import './App.css';
import { AllRoute } from './routes/AllRoute';
import { Header , Footer ,  } from './components';
function App() {
  return (
      <div>
        <Header/>

          <AllRoute/>
        <Footer/>
      </div>
  );
}

export default App;
