import logo from './logo.svg';
import './App.css';
import {Folder} from './Components/Folder'
import Explorer from './data/folderData';
function App() {
  return (
    <div className="App">
      <Folder Explorer={Explorer}/>
    </div>
  );
}

export default App;
