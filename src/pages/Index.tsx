import { ThemeToggle } from "@/components/ThemeToggle";
import { ImageGenerator } from "@/components/ImageGenerator";
import { ImageGallery } from "@/components/ImageGallery";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="container px-4 py-16 md:py-24 space-y-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-in fade-in-50 slide-in-from-top-10 duration-700">
            AI Image Generator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-top-20 duration-700">
            Transform your ideas into stunning visuals with AI
          </p>
        </motion.div>

        <ImageGenerator />

        <div className="border-t border-border pt-24">
          <ImageGallery />
        </div>
      </main>
    </div>
  );
};

export default Index;
