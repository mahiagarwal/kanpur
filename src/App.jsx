
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home'; 
// import About from './pages/About';
// import Services from './pages/Services'; 
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import './App.css'; 

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/signup' element={<Signup/>}/>
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import Navbar from './components/Navbar'; // Adjust this path to where your Navbar.js is located

function App() {
    return (
        <div>
            <Navbar />
            {/* Other components below */}
        </div>
    );
}

export default App;
