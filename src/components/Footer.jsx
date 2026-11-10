
import { ArrowUp } from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <a href="#home" className="footer-logo">
          MT<span>.</span>
        </a>

        <p>
          Designed & Developed by
          <strong> Mohamed Thajeem A T</strong>
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/Thajeem-04"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://in.linkedin.com/in/mohamed-thajeem-082715413"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="#home" aria-label="Back to top">
            <ArrowUp />
          </a>
        </div>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Mohamed Thajeem. All rights reserved.
        </span>

      </div>

    </footer>
  );
}
