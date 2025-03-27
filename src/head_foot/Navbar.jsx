// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           MyApp
//         </Link>

//         {/* Desktop Menu */}
//         <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/about" className="nav-link">About</Link>

//           {/* ✅ Desktop Dropdown */}
//           <div 
//             className="dropdown"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <span className="dropdown-btn">
//               Products <ChevronDown size={18} className={`icon ${dropdownOpen ? 'rotate' : ''}`} />
//             </span>
//             <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
//               <Link to="/curd" className="dropdown-item">Curd</Link>
//               <Link to="/ghee" className="dropdown-item">Ghee</Link>
//               <Link to="/milk" className="dropdown-item">Milk</Link>
//             </div>
//           </div>

//           <Link to="/contact" className="nav-link">Contact</Link>
//         </div>

//         {/* ✅ Mobile Menu Button */}
//         <button onClick={toggleMenu} className="menu-btn">
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* ✅ Mobile Menu */}
//       <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
//         <Link to="/" className="mobile-link">Home</Link>
//         <Link to="/about" className="mobile-link">About</Link>

//         {/* ✅ Mobile Dropdown */}
//         <div>
//           <span className="mobile-link" onClick={toggleDropdown}>
//             Products <ChevronDown size={18} className={`icon ${dropdownOpen ? 'rotate' : ''}`} />
//           </span>
//           <div className={`mobile-dropdown-content ${dropdownOpen ? 'show' : ''}`}>
//             <Link to="/curd" className="mobile-dropdown-item">Curd</Link>
//             <Link to="/ghee" className="mobile-dropdown-item">Ghee</Link>
//             <Link to="/milk" className="mobile-dropdown-item">Milk</Link>
//           </div>
//         </div>

//         <Link to="/contact" className="mobile-link">Contact</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // ✅ Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">MyApp</Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>

          <div 
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-btn">
              Products <ChevronDown size={18} className={`icon ${dropdownOpen ? 'rotate' : ''}`} />
            </span>
            <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/curd" className="dropdown-item">Curd</Link>
              <Link to="/ghee" className="dropdown-item">Ghee</Link>
              <Link to="/milk" className="dropdown-item">Milk</Link>
            </div>
          </div>

          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <button onClick={toggleMenu} className="menu-btn">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="mobile-link">Home</Link>
        <Link to="/about" className="mobile-link">About</Link>

        <div>
          <span className="mobile-link" onClick={toggleDropdown}>
            Products <ChevronDown size={18} className={`icon ${dropdownOpen ? 'rotate' : ''}`} />
          </span>
          <div className={`mobile-dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <Link to="/curd" className="mobile-dropdown-item">Curd</Link>
            <Link to="/ghee" className="mobile-dropdown-item">Ghee</Link>
            <Link to="/milk" className="mobile-dropdown-item">Milk</Link>
          </div>
        </div>

        <Link to="/contact" className="mobile-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
