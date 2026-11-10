
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

import {
  Mail,
  Send,
  MapPin,
  MessageCircle,
  Download,
  LoaderCircle
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Thajeem-04'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://in.linkedin.com/in/mohamed-thajeem-082715413'
  }
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      );

      setStatus('success');
      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      setStatus('error');

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">

      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            LET'S CONNECT
          </span>

          <h2 className="section-title">
            Get In <span className="gradient-text">
              Touch
            </span>
          </h2>

          <p className="section-subtitle">
            Have an opportunity, project or idea?
            Let's create something amazing together.
          </p>
        </div>

        <div className="contact-layout">

          {/* CONTACT INFORMATION */}

          <motion.div
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3>Let's talk about your project.</h3>

            <p>
              I'm always interested in learning,
              collaborating and exploring new
              development opportunities.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">
                <Mail />
              </div>
              <div>
                <span>Email</span>
                <strong>mohdthjm@gmail.com</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div>
                <span>Location</span>
                <strong>Nagercoil, Tamil Nadu, India</strong>
              </div>
            </div>

            <div className="contact-socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    <Icon size={21} />
                  </a>
                );
              })}
            </div>

            <a
              href="https://wa.me/9498095508"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              <MessageCircle size={19} />
              Connect on WhatsApp
            </a>

            <a
              href="/resume.pdf"
              download
              className="resume-button"
            >
              <Download size={18} />
              Download My CV
            </a>

          </motion.div>

          {/* CONTACT FORM */}

          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3>Send Me a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="primary-button send-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle className="spin-icon" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={17} />
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="form-success">
                Message sent successfully!
              </p>
            )}

            {status === 'error' && (
              <p className="form-error">
                Something went wrong. Please try again.
              </p>
            )}

          </motion.form>

        </div>

      </div>

    </section>
  );
}
