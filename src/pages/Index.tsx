import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Chat } from "@/components/Chat";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Simulated current content state - this would come from your content management system
  const currentContent = {
    type: "video" as const,
    title: "The Map of Chemistry",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 h-full w-64 border-r bg-card">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold">LearnFlow</h1>
        </div>
        <nav className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            Add Content
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            History
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Spaces
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Welcome to LearnFlow</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">Upload PDF</h3>
            <p className="text-muted-foreground">
              Upload your PDF documents for AI-powered learning
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">YouTube Link</h3>
            <p className="text-muted-foreground">
              Add YouTube videos to your learning space
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">Record Lecture</h3>
            <p className="text-muted-foreground">
              Record and transcribe your lectures
            </p>
          </div>
        </div>
      </main>

      {isChatOpen && (
        <Chat 
          onClose={() => setIsChatOpen(false)}
          contentType={currentContent.type}
          contentTitle={currentContent.title}
        />
      )}
    </div>
  );
};

export default Index;