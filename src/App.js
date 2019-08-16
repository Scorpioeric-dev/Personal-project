import React from 'react';
import './App.css';
import routes from './routes'
import Header from './Header/Header'
// import Dashboard from './Dashboard/Dashboard'
import UploadVid from './UploadVid/UploadVid'
import Video from './Video/Video'

function App() {

  return (
    <div className="App">
    <Header/> 
    {routes}
    

     </div>
  );
}

export default App;
