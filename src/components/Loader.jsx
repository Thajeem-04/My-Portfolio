
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="portfolio-loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="loader-logo"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            MT<span>.</span>
          </motion.div>

          <div className="loader-track">
            <motion.div
              className="loader-progress"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5 }}
            />
          </div>

          <p>INITIALIZING DIGITAL EXPERIENCE...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
