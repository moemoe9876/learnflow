import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatProps {
  onClose: () => void;
  contentType?: "video" | "pdf" | "audio";
  contentTitle?: string;
}

export const Chat = ({ onClose, contentType, contentTitle }: ChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getInitialMessage = () => {
    if (!contentType || !contentTitle) return null;
    return {
      role: "assistant" as const,
      content: `Hi! I'm here to help you learn about "${contentTitle}". What would you like to know?`,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response - Replace this with actual AI integration
    setTimeout(() => {
      let aiResponse = "I'll help you understand this content better. What specific aspect would you like me to explain?";
      
      // Simulate content-aware responses
      if (input.toLowerCase().includes("what is this about") && contentType === "video") {
        aiResponse = "This video explores the fundamentals of chemistry, covering topics from basic atomic structure to complex chemical reactions. Would you like me to explain any specific concept in more detail?";
      }

      const aiMessage: Message = {
        role: "assistant",
        content: aiResponse,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // Set initial message when chat opens
  useState(() => {
    const initial = getInitialMessage();
    if (initial) {
      setMessages([initial]);
    }
  }, [contentType, contentTitle]);

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[600px] flex flex-col shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 border-b">
        <div>
          <CardTitle className="text-xl">AI Learning Assistant</CardTitle>
          {contentTitle && (
            <p className="text-sm text-muted-foreground mt-1">
              Discussing: {contentTitle}
            </p>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg px-4 py-2 flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Thinking...
            </div>
          </div>
        )}
      </CardContent>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about the content..."
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};