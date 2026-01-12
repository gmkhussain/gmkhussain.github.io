import { useState } from "react";
import { Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  from: "user" | "ai";
};

export default function ChatAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, from: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        text: `AI says: I received your message "${userMsg.text}"!`,
        from: "ai",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Chat with my AI Agent
        </h2>

        <div className="flex flex-col gap-4 mb-4 max-h-[500px] overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-xl max-w-[80%] break-words ${
                msg.from === "user"
                  ? "bg-primary/20 self-end text-right"
                  : "bg-secondary/40 self-start text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="p-4 rounded-xl max-w-[80%] bg-secondary/40 self-start text-left">
              AI is typing...
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-border px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="button"
            onClick={handleSend}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white hover:brightness-110 transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
