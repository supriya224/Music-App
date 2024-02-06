/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        {/* header */}
        <Header />
        <Routes>
          {/* home router */}
          <Route path="/music-app" element={<Home />} />
        </Routes>
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
