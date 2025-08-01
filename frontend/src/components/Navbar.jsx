import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a] z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-start items-center px-6 py-4">
        

        {/* Navigation links aligned to the left */}
        <div className="bg-[#0f172a] rounded-xl px-6 py-2 shadow-lg">
          <ul className="flex space-x-6 items-center text-white font-medium text-sm sm:text-base">
            <li>
              <Link to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">
                Skills
              </Link>
            </li>
            <li>
              
              <Link to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
