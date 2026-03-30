import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import BookNow from './pages/BookNow';
import CarService from './pages/CarService';
import MeetGreetService from './pages/MeetGreetService';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/book-now/" element={<BookNow />} />
          <Route path="/services/" element={<MeetGreetService />} />
          <Route path="/car-service/" element={<CarService />} />
          <Route path="/meet-greet-services/" element={<MeetGreetService />} />
          <Route path="/faq-2/" element={<FAQ />} />
          <Route path="/contact-us/" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
