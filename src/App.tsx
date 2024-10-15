import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'
import New from './pages/8'
import Urgent from './pages/9'
import VeryNew from './pages/10'
import Midnight from './pages/Midnight'
import Visits from "./pages/visits";
import Test from './pages/111';
import Client from './pages/Client'
import Ip from './pages/ip'
import Newx from './pages/Newx'
import Party from './pages/Party';
import Food from './pages/Food';
import Late from './pages/Late';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import VeryNew1 from './pages/11000'
import Ss from  './pages/SS'
import Ss2 from  './pages/SS2'
import VeryNew2 from './pages/1122'
import Sed from "./pages/open"
import Sed1 from "./pages/open1"
import Unique2 from './pages/Unique2';
import Unique3 from './pages/Unique3';
import Tsf from './pages/Tsf'
import Congrats from './pages/Congrats';
import Unlock from './pages/Unlock';
import Bg from './pages/sfmed_bg';
import SFmedi from './pages/sfmed';

function App() {
 
  return (
    
    <Router>
      <div className="App">
        <Routes>
       


          <Route path = "/engmed-tsf" element = {<Tsf/>} />
          
          <Route  path="/sfmedi-bg"  element = {< Bg/>} />

          <Route  path="/sfmedi-unlock"  element = {< Unlock/>} />
          <Route  path="/sfmedi"  element = {< SFmedi/>} />

          <Route path = "/" element = {<VeryNew2 />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />

       

          <Route path = "/view" element = {<Visits />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
