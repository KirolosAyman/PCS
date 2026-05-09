import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, Minimize2 } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────
//  AI TEAM INTEGRATION POINT
//  Replace the function below with your actual model call.
//  Expected interface:
//    sendMessageToAI(userMessage: string): Promise<string>
//  The function receives the user's text and must return the bot
//  reply as a plain string.
// ─────────────────────────────────────────────────────────────────
async function sendMessageToAI(userMessage) {
  // TODO: replace this stub with the real AI model call
  // Example (OpenAI-compatible):
  //   const res = await fetch('/api/chat', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ message: userMessage }),
  //   })
  //   const data = await res.json()
  //   return data.reply

  // ── Temporary stub ──────────────────────────────────────────
  await new Promise(r => setTimeout(r, 900)) // simulate latency
  return "Hi! I'm the PCS VoIP assistant. Our AI model is being integrated soon — stay tuned! 🚀"
  // ─────────────────────────────────────────────────────────────
}
// ─────────────────────────────────────────────────────────────────

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'bot',
  text: "👋 Hello! I'm your PCS VoIP virtual assistant. How can I help you today?",
}

export default function ChatbotWidget() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg = { id: Date.now(), role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const reply = await sendMessageToAI(text)
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: reply }])
    } catch {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, role: 'bot', text: '⚠️ Sorry, something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  return (
    <>
      {/* ── Floating Bubble ──────────────────────────────── */}
      <motion.button
        id="chatbot-toggle"
        className="chatbot-fab"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Minimize2 size={22} />
            </motion.span>
          ) : (
            <motion.span key="open"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Bot size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && <span className="chatbot-fab-label">Chat with us</span>}
      </motion.button>

      {/* ── Chat Panel ───────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chatbot-panel"
            className="chatbot-panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={18} />
                  <span className="chatbot-status-dot" />
                </div>
                <div>
                  <p className="chatbot-name">PCS Assistant</p>
                  <p className="chatbot-status-text">Online · AI powered</p>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages" role="log" aria-live="polite">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  className={`chatbot-msg chatbot-msg--${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {msg.role === 'bot' && (
                    <div className="chatbot-msg-avatar"><Bot size={13} /></div>
                  )}
                  <div className="chatbot-bubble">{msg.text}</div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  className="chatbot-msg chatbot-msg--bot"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="chatbot-msg-avatar"><Bot size={13} /></div>
                  <div className="chatbot-bubble chatbot-typing">
                    <span /><span /><span />
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input-row">
              <textarea
                ref={inputRef}
                id="chatbot-input"
                className="chatbot-input"
                placeholder="Ask something…"
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                aria-label="Chat message"
                disabled={loading}
              />
              <button
                id="chatbot-send"
                className="chatbot-send"
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Footer note */}
            <p className="chatbot-footer-note">
              Powered by PCS AI · responses may vary
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
