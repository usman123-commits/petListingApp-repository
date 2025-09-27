import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import {NoteState} from "./context/notes/NoteState";
import { DashboardContextProvider  } from "./context/notes/DashboardState";
import Alert from "./components/Alert";
import Fav from "./components/Fav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Changepass from "./components/Changepass";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sell from "./components/Sell";
import image from "./images/olx.jpeg";
import Myadds from "./components/Myadds";
import Showinf from "./components/Showinf";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
   
      <NoteState>
      <DashboardContextProvider>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Navbar />
          <Alert />

          <Routes>
            <Route exact path="/" element={<Home image={image} />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Sell" element={<Sell />} />
            <Route exact path="/Myadds" element={<Myadds />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Changepass" element={<Changepass />} />
            <Route path="/Showinf/:id" element={<Showinf />} />
            <Route path="/Fav" element={<Fav />} />
            <Route path="/Dashboard/*" element={<Dashboard/>} />
          </Routes>
          <Footer />
        </Router>
        </DashboardContextProvider>
      </NoteState>
      
    </>
  );
}

export default App;
