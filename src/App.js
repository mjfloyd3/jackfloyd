import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Sstemplates from './Pages/Sstemplate';
import WebsiteRedesign from './Pages/WebsiteRedesign';
import ProductCommunicationTemplate from './Pages/CommunicationTemplate';
import About from "./Pages/About";
import Footer from "./Pages/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/sstemplates" element={<Sstemplates/>}/>
          <Route path="/websiteredesign" element={<WebsiteRedesign/>}/>
          <Route path="/officialtemplate" element={<ProductCommunicationTemplate/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
        <Footer/>
    </div>
  );
}

export default App;
