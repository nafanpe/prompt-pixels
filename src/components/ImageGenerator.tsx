import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-image", {
        body: { prompt },
      });

      if (error) throw error;

      if (data?.imageUrl) {
        setImageUrl(data.imageUrl);
        toast.success("Image generated successfully!");
      } else {
        throw new Error("No image URL received");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <Textarea
          placeholder="Describe the image you want to create..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] text-lg resize-none bg-card border-border focus:border-primary transition-colors"
          disabled={isLoading}
        />
        <Button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="w-full gradient-primary text-white font-semibold text-lg py-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Image
            </>
          )}
        </Button>
      </div>

      {imageUrl && (
        <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-2xl animate-in fade-in-50 duration-500">
          <img
            src={imageUrl}
            alt="Generated image"
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};
