import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, MessageSquare, Upload, History, Layout, Plus } from "lucide-react";
import { useState } from "react";
import { Chat } from "@/components/Chat";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const currentContent = {
    type: "video" as const,
    title: "Introduction to Machine Learning",
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 h-full w-64 border-r bg-sidebar transition-all duration-300 ease-in-out">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold text-sidebar-foreground">LearnFlow</h1>
        </div>
        <nav className="space-y-1 p-4">
          <Button variant="ghost" className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Plus className="h-4 w-4" />
            Add Content
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <History className="h-4 w-4" />
            History
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Layout className="h-4 w-4" />
            Spaces
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 min-h-screen">
        {/* Header */}
        <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex h-16 items-center justify-between px-6">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(true)}
                className="relative"
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
        </header>

        {/* Content */}
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">What do you want to learn today?</h1>
            <p className="text-muted-foreground">Upload content or choose from your recent materials to start learning.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upload PDF</h3>
              <p className="text-muted-foreground">
                Upload your PDF documents for AI-powered learning
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">YouTube Link</h3>
              <p className="text-muted-foreground">
                Add YouTube videos to your learning space
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Record Lecture</h3>
              <p className="text-muted-foreground">
                Record and transcribe your lectures
              </p>
            </div>
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