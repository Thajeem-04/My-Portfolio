
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-top ${visible ? 'show' : ''}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={22} />
    </button>
  );
}
