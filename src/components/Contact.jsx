// src/components/Contact.jsx
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send, Twitter } from 'lucide-react';
import { useState } from 'react';

const TELEGRAM_BOT_TOKEN = "8068941757:AAGKJqtPesev2YX2Wsizl98TRVOMBHyZfvQ";   // <- paste your token from BotFather
const TELEGRAM_CHAT_ID  = "1871966950";      // <- paste your ID from @userinfobot

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const { name, email, subject, message } = formData;
    const text = `📥 New message from your portfolio:\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Subject: ${subject}\n💬 Message:\n${message}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Telegram API error");
      setStatus("ok");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("err");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "rohitdev1604@gmail.com",
      action: "mailto:rohitdev1604@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Bangalore - Karnataka, India",
      action: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: "GitHub", url: "https://github.com/Roweet1604", color: "hover:text-gray-300" },
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", url: "https://www.linkedin.com/in/rohit-raj1604", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-6 h-6" />, name: "X (Twitter)", url: "https://twitter.com/rohit_raj1604", color: "hover:text-cyan-400" },
    { icon: <MessageCircle className="w-6 h-6" />, name: "Discord", url: "https://discord.gg/jEWZwWBa", color: "hover:text-purple-400" }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-enhanced">
            Get In{" "}
            <span className="text-white font-extrabold text-4xl px-4 py-2 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-opacity-20 border border-cyan-500/30 backdrop-blur-md">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-200 text-lg mt-6 max-w-2xl mx-auto text-enhanced">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="content-enhanced rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-enhanced">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Your Email" type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
              <div>
                <label htmlFor="message" className="block text-gray-200 text-sm font-medium mb-2 text-enhanced">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 input-enhanced rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Send className="w-5 h-5" />
                <span>
                  {status === "ok" ? "Sent!" : status === "err" ? "Try Again" : "Send Message"}
                </span>
              </button>
              {status === "ok" && (
                <p className="text-green-400 text-center mt-2">Message delivered to Telegram ✅</p>
              )}
              {status === "err" && (
                <p className="text-red-400 text-center mt-2">Failed to send. Please try later.</p>
              )}
            </form>
          </div>

          {/* Info & Socials */}
          <div className="space-y-8">
            <Block title="Contact Information">
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <InfoLink key={i} {...info} />
                ))}
              </div>
            </Block>

            <Block title="Follow Me">
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((s, i) => (
                  <SocialLink key={i} {...s} />
                ))}
              </div>
            </Block>

            <div className="content-enhanced rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3 text-enhanced">Let's collaborate!</h4>
              <p className="text-gray-200 leading-relaxed text-enhanced">
                I'm currently looking for new opportunities and interesting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- helper components ---------- */
const Input = ({ label, ...props }) => (
  <div>
    <label htmlFor={props.name} className="block text-gray-200 text-sm font-medium mb-2 text-enhanced">
      {label}
    </label>
    <input
      {...props}
      required
      className="w-full px-4 py-3 input-enhanced rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
      placeholder={label}
    />
  </div>
);

const Block = ({ title, children }) => (
  <div>
    <h3 className="text-2xl font-semibold text-white mb-6 text-enhanced">{title}</h3>
    {children}
  </div>
);

const InfoLink = ({ icon, title, details, action }) => (
  <a
    href={action}
    className="flex items-center space-x-4 p-4 content-enhanced rounded-xl hover:bg-white/15 transition-all duration-300 group"
  >
    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/20">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium text-enhanced">{title}</h4>
      <p className="text-gray-200 text-enhanced">{details}</p>
    </div>
  </a>
);

const SocialLink = ({ icon, name, url, color }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center space-x-3 p-4 content-enhanced rounded-xl hover:bg-white/15 text-gray-200 ${color} transition-all duration-300 group`}
  >
    <div className="group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <span className="font-medium text-enhanced">{name}</span>
  </a>
);

export default Contact;
