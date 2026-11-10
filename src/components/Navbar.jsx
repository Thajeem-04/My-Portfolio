
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="nav-logo">
          MT<span>.</span>
        </a>

        <nav className={`nav-links ${open ? 'active' : ''}`}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk ↗
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}
