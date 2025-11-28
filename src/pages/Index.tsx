import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageGenerator } from "@/components/ImageGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="container px-4 py-16 md:py-24">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            AI Image Generator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into stunning visuals with AI
          </p>
        </div>

        <ImageGenerator />
      </main>
    </div>
  );
};

export default Index;
