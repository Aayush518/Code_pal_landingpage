import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Layout } from './components/layout';
import { Watermark } from './components/watermark';
import { BinaryBackground } from './components/binary-background';
import Home from './pages/home';
import About from './pages/about';
import Pricing from './pages/pricing';
import Technology from './pages/technology';
import WhyCodePal from './pages/why-code-pal';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Watermark />
          <BinaryBackground />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Layout>
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/why-code-pal" element={<WhyCodePal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </Layout>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App