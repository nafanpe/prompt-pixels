-- Create table for storing generated images
CREATE TABLE public.generated_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prompt TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.generated_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view images
CREATE POLICY "Anyone can view generated images" 
ON public.generated_images 
FOR SELECT 
USING (true);

-- Create policy to allow anyone to insert images
CREATE POLICY "Anyone can insert generated images" 
ON public.generated_images 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_generated_images_created_at ON public.generated_images(created_at DESC);