import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const Robot = () => {
  const mousePosition = useMousePosition();
  const scriptInjected = useRef(false);
  const messagesEndRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const BOT_ID = '6a08f54dd176280ef5365073';
  const API_URL = 'https://commitbot-ws0p.onrender.com';

  // Fetch config + greeting, hide CommitBot's own UI
  useEffect(() => {
    if (scriptInjected.current) return;
    scriptInjected.current = true;

    // Hide CommitBot's native bubble & window — robot replaces them
    const style = document.createElement('style');
    style.id = 'commitbot-hide';
    style.textContent = `
      #sitebot-bubble, #sitebot-window { display: none !important; }
    `;
    document.head.appendChild(style);

    // Fetch greeting from config
    fetch(`${API_URL}/api/chat/${BOT_ID}/config`)
      .then(res => res.json())
      .then(config => {
        const greeting = config?.greetingMessage || 'Hi! How can I help you today?';
        setMessages([{ role: 'bot', content: greeting }]);
      })
      .catch(() => {
        setMessages([{ role: 'bot', content: 'Hi! How can I help you today?' }]);
      });

    return () => {
      document.getElementById('commitbot-hide')?.remove();
      scriptInjected.current = false;
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    try {
      // ✅ Exact endpoint from widget.js source
      const res = await fetch(`${API_URL}/api/chat/${BOT_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: 'Sorry, something went wrong. Please try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  const rotateX = ((mousePosition.y - centerY) / centerY) * 10;
  const rotateY = ((mousePosition.x - centerX) / centerX) * 10;
  const eyeShiftX = ((mousePosition.x - centerX) / centerX) * 30;
  const eyeShiftY = ((mousePosition.y - centerY) / centerY) * 30;

  return (
    <>
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
        .robot-arm { animation: wiggle 2s ease-in-out infinite; }

        .chat-panel {
          position: fixed;
          bottom: 110px;
          right: 24px;
          width: 340px;
          height: 480px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 99998;
          transform-origin: bottom right;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
        }
        .chat-panel.closed {
          transform: scale(0.85);
          opacity: 0;
          pointer-events: none;
        }
        .chat-header {
          background: linear-gradient(135deg, #ec4899, #a855f7);
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .chat-header-left { display: flex; align-items: center; gap: 10px; }
        .chat-avatar {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.25);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .chat-title { color: white; font-weight: 600; font-size: 14px; }
        .chat-subtitle { color: rgba(255,255,255,0.75); font-size: 11px; }
        .chat-close {
          background: rgba(255,255,255,0.2);
          border: none; border-radius: 50%;
          width: 28px; height: 28px;
          cursor: pointer; color: white; font-size: 16px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .chat-close:hover { background: rgba(255,255,255,0.35); }

        .chat-messages {
          flex: 1; overflow-y: auto;
          padding: 16px;
          display: flex; flex-direction: column; gap: 10px;
          background: #f9f9fb;
        }
        .chat-messages::-webkit-scrollbar { width: 4px; }
        .chat-messages::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }

        .msg-bubble {
          max-width: 80%; padding: 10px 14px;
          font-size: 13px; line-height: 1.5;
          word-break: break-word; border-radius: 18px;
        }
        .msg-bot {
          background: #ffffff; color: #1f2937;
          border: 1px solid #e5e7eb;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
        }
        .msg-user {
          background: linear-gradient(135deg, #ec4899, #a855f7);
          color: white;
          border-bottom-right-radius: 4px;
          align-self: flex-end;
        }
        .typing-dots { display: flex; gap: 4px; align-items: center; }
        .dot {
          width: 7px; height: 7px; background: #9ca3af;
          border-radius: 50%; animation: bounce 1.2s ease-in-out infinite;
        }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce {
          0%,80%,100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }

        .chat-footer {
          padding: 12px; background: #ffffff;
          border-top: 1px solid #f0f0f0;
          display: flex; gap: 8px; align-items: center; flex-shrink: 0;
        }
        .chat-input {
          flex: 1; border: 1.5px solid #e5e7eb; border-radius: 24px;
          padding: 9px 14px; font-size: 13px; outline: none;
          background: #f9f9fb; color: #1f2937;
          transition: border-color 0.15s;
        }
        .chat-input:focus { border-color: #a855f7; background: #fff; }
        .chat-input::placeholder { color: #9ca3af; }
        .chat-send {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #ec4899, #a855f7);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: opacity 0.15s, transform 0.15s;
        }
        .chat-send:hover { opacity: 0.9; transform: scale(1.05); }
        .chat-send:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .chat-powered {
          text-align: center; font-size: 10px; color: #9ca3af;
          padding: 4px 0 6px; background: #fff;
        }
        .chat-powered a { color: #a855f7; text-decoration: none; }
      `}</style>

      {/* Chat Panel */}
      <div className={`chat-panel ${isOpen ? '' : 'closed'}`}>
        <div className="chat-header">
          <div className="chat-header-left">
            <div className="chat-avatar">🤖</div>
            <div>
              <div className="chat-title">Portfolio Buddy</div>
              <div className="chat-subtitle">● Online</div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`msg-bubble ${msg.role === 'user' ? 'msg-user' : 'msg-bot'}`}>
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="msg-bubble msg-bot">
              <div className="typing-dots">
                <div className="dot" /><div className="dot" /><div className="dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-footer">
          <input
            className="chat-input"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button
            className="chat-send"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <div className="chat-powered">
          Powered by <a href="https://commitbot.com" target="_blank" rel="noreferrer">CommitBot</a>
        </div>
      </div>

      {/* Robot Toggle */}
      <div
        className="fixed bottom-6 right-6 z-[99999] cursor-pointer select-none"
        onClick={() => setIsOpen(o => !o)}
        title={isOpen ? 'Close chat' : 'Chat with us'}
      >
        <div
          className="w-20 h-20 transform transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
          }}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto relative shadow-lg shadow-pink-400/30">
              <div className="flex justify-center items-center pt-3 space-x-2">
                {[0, 1].map(i => (
                  <div key={i} className="w-3.5 h-3.5 bg-white rounded-full relative overflow-hidden">
                    <div
                      className="w-1.5 h-1.5 bg-black rounded-full absolute transition-all duration-75"
                      style={{
                        left: `calc(50% + ${eyeShiftX * 0.15}px)`,
                        top: `calc(50% + ${eyeShiftY * 0.15}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-1">
                {isOpen
                  ? <div className="w-5 h-2.5 border-b-2 border-white/80 rounded-b-full" />
                  : <div className="w-4 h-1.5 bg-white/80 rounded-full" />
                }
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="w-0.5 h-3 bg-gradient-to-t from-pink-300 to-yellow-300 rounded-full mx-auto" />
                <div className="w-2 h-2 bg-yellow-300 rounded-full mx-auto -mt-1 animate-ping" />
              </div>
            </div>
            <div className="w-10 h-7 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl mx-auto mt-1 shadow-lg animate-pulse" />
            <div className="robot-arm absolute top-5 -left-1.5 w-2.5 h-5 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full" />
            <div className="robot-arm absolute top-5 -right-1.5 w-2.5 h-5 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Robot;