import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

import Header from './Components/common/Header';
import Footer from './Components/common/Footer'

import FileInput from './Components/FileInput';
import Home from './Components/home_page/Home';
import NoPage from './Components/no_page/NoPage';
import Download from './Components/Download';

{/* HOWLSAFE : A mobile digital solution to tedious and insecure
                            applications for sensitive data storage, retrieval, sharing and
                            transactions
*/}


function App() {
  return (
    <div>
      <Header />
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/upload' element={<FileInput />}></Route>
          <Route exact path='/download' element={<Download />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
