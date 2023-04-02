import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {

  return (
    <>
    <Navbar logoName='Text Case Convertor' value='Tech'/>

    <div className="container">
      <div className="row">
        <div className="col">
        

          <Textarea type='text'/>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
