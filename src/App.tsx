import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowseMenus } from './components/customer/BrowseMenus';
import { LoginPage } from './components/common/LoginPage';
import { Footer } from './components/common/Footer';
import { DeliveryInstructions } from './components/delivery/DeliveryInstructions';
import { ManageMenus } from './components/restaurant/ManageMenus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/browse-menus" element={<BrowseMenus/>}></Route>
          <Route path="/delivery-instructions" element={<DeliveryInstructions/>}></Route>
          <Route path="/manage-menus" element={<ManageMenus/>}></Route>
          <Route path="/" element={<LoginPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;