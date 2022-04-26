import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import NavMenuList from './nav/NavMenu';

function Router() {
  return (
    <BrowserRouter>
      {/* <NavMenuList></NavMenuList> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
