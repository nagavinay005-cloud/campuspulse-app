// Floating PulseAI Assistant Chat Panel for CampusPulse
// Provides role-aware event discovery, QR pass checks, certificate downloads, and archive telemetry queries

import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Bot,
  ChevronDown,
  CornerDownLeft,
  RotateCcw,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { aiService, type ChatMessage } from "@/services/aiService";
import { AI_PROMPTS } from "@/services/promptTemplates";
import { cn } from "@/lib/utils";

export function AiAssistantPanel() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init-1",
      sender: "ai",
      text: AI_PROMPTS.STUDENT_WELCOME,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      quickActions: [
        { label: "Find Events", action: "/events" },
        { label: "My Certificates", action: "/certificates" },
        { label: "Archive Status", action: "/admin/archive-logs" },
        { label: "Today's Events", action: "QUERY_TODAY" },
      ],
    },
  ]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || inputMsg;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInputMsg("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(async () => {
      const aiReply = await aiService.sendMessage(textToSend, "Student");
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: string) => {
    if (action.startsWith("/")) {
      navigate({ to: action as any });
      setIsOpen(false);
    } else if (action === "QUERY_TODAY") {
      handleSend("What events are happening today?");
    } else if (action === "SWEEP") {
      toast.info("Triggered Auto-Archiving sweep via PulseAI!");
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-2xl bg-primary text-primary-foreground px-4 py-6 font-bold text-xs flex items-center gap-2 ring-4 ring-primary/20 hover:scale-105 transition-all"
        >
          <Bot className="size-5" />
          <span className="hidden sm:inline">PulseAI Assistant</span>
          <Badge className="bg-primary-foreground text-primary text-[10px] rounded-full px-1.5 font-extrabold">
            AI
          </Badge>
        </Button>
      ) : (
        <div className="w-[380px] sm:w-[400px] h-[520px] rounded-3xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl">
          {/* HEADER */}
          <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-primary-foreground/20 font-bold">
                <Bot className="size-5" />
              </span>
              <div>
                <h3 className="font-bold text-sm leading-none flex items-center gap-1.5">
                  PulseAI Assistant <Sparkles className="size-3 text-warning fill-warning" />
                </h3>
                <p className="text-[10px] text-primary-foreground/80 mt-1">CampusPulse Event Governance AI</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-primary-foreground/80 hover:bg-primary-foreground/20 rounded-lg"
                title="Clear Chat History"
                onClick={() => {
                  setMessages([]);
                  toast.info("Chat history cleared.");
                }}
              >
                <RotateCcw className="size-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-primary-foreground/80 hover:bg-primary-foreground/20 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex items-start gap-2.5 max-w-[85%]",
                  m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto",
                )}
              >
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold mt-0.5",
                    m.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-soft text-primary border border-primary/20",
                  )}
                >
                  {m.sender === "user" ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
                </span>

                <div className="space-y-2">
                  <div
                    className={cn(
                      "rounded-2xl p-3.5 leading-relaxed text-xs shadow-sm",
                      m.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary/70 border border-border text-foreground rounded-tl-none",
                    )}
                  >
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    <p className="text-[9px] opacity-60 text-right mt-1">{m.timestamp}</p>
                  </div>

                  {/* QUICK ACTIONS PILLS */}
                  {m.quickActions && m.quickActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.quickActions.map((qa) => (
                        <button
                          type="button"
                          key={qa.label}
                          onClick={() => handleActionClick(qa.action)}
                          className="rounded-full border border-primary/30 bg-primary-soft/50 px-3 py-1 text-[10px] font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          {qa.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                <Bot className="size-4 animate-bounce text-primary" /> PulseAI is thinking...
              </div>
            )}
          </div>

          {/* INPUT FORM */}
          <div className="border-t border-border bg-card p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Ask PulseAI about events, certs, or archiving..."
                className="h-10 rounded-xl bg-secondary/40 text-xs pl-3"
              />
              <Button type="submit" size="icon" className="size-10 shrink-0 rounded-xl shadow-glow">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
