
import { motion } from 'framer-motion';

export default function ProfileVisual() {
  return (
    <motion.div
      className="profile-visual"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="profile-orbit orbit-one" />
      <div className="profile-orbit orbit-two" />

      <div className="profile-photo">
        <img src="./public/images/profile.jpeg" alt="Mohamed Thajeem" className="profile-image"/>
      </div>

      <div className="floating-tag tag-top">
        ✦ Creative Developer
      </div>

      <div className="floating-tag tag-bottom">
        <span className="status-dot" />
        Available for Opportunities
      </div>
    </motion.div>
  );
}
