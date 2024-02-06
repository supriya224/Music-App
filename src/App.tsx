/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CONSTANT from './utils/constants/index';
import { Footer, Header } from './components';
import { Home } from './pages';

function App() {
  console.log('[Env]', CONSTANT.API_URL);

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        {/* header */}
        <Header />
        <Routes>
          {/* home router */}
          <Route path="/" element={<Home />} />
        </Routes>
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
