/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CONSTANT from './utils/constants/index';
import { Footer, Header, SideBar } from './components';
import { Home } from './pages';

function App() {
  console.log('[Env]', CONSTANT.API_URL);

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<SideBar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
