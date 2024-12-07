import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const { theme, setTheme } = useTheme();

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
    </div>
  );
};

export default Index;