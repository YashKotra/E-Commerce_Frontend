import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Toaster } from "sonner";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
