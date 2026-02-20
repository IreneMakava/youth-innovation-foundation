import { useState, useRef, useEffect } from "react";
import { knowledge, WELCOME, FALLBACK } from "../data/chatbotKnowledge";

function getReply(userMessage) {
  const lower = userMessage.trim().toLowerCase();
  if (!lower) return FALLBACK;
  for (const { keywords, answer } of knowledge) {
    if (keywords.some((kw) => lower.includes(kw))) return answer;
  }
  return FALLBACK;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    const reply = getReply(text);
    setMessages((prev) => [...prev, { role: "bot", text: reply }]);
  };

  return (
    <>
      {/* Popup chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-[100] w-[calc(100vw-2rem)] sm:w-[380px] max-h-[70vh] flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          aria-label="Chat window"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-accent text-white">
            <span className="font-semibold">YIF Assistant</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[50vh]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === "user"
                      ? "bg-accent text-white rounded-br-md"
                      : "bg-light-gray text-black rounded-bl-md"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about YIF..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent text-sm"
                aria-label="Message"
              />
              <button
                type="submit"
                className="shrink-0 px-4 py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-red-700 transition text-sm"
                aria-label="Send"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating button - red (accent) with label */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-4 sm:right-6 z-[99] flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-accent text-white shadow-lg hover:bg-red-700 transition"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        <span className="text-sm font-semibold whitespace-nowrap hidden sm:inline">
          {open ? "Close" : "Need help? Ask us"}
        </span>
      </button>
    </>
  );
}
