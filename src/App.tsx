import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BrowseMenus } from './components/customer/BrowseMenus';
import { LoginPage } from './components/common/LoginPage';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { DeliveryInstructions } from './components/delivery/DeliveryInstructions';
import { ManageMenus } from './components/restaurant/ManageMenus';
import { OnlineTracking } from "./components/customer/OnlineTracking";
import { Profile } from "./components/common/profile";
import { RestaurantMenu } from "./components/common/RestaurantMenu";

function AppRoutes() {
  return (
    <>
      <Header />
      <div className="AppRoutes">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<AppRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/browse-menus" element={<BrowseMenus />} />
            <Route path="/restaurant-menus" element={<RestaurantMenu />} />
            <Route path="/delivery-instructions" element={<DeliveryInstructions />} />
            <Route path="/manage-menus" element={<ManageMenus />} />
            <Route path="/online-tracking" element={<OnlineTracking />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;