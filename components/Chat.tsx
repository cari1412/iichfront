"use client";

import React, { useState } from 'react';
import { useChat } from 'ai/react';
import { Camera, Send, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface ErrorMessage {
  title: string;
  message: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://web.cari1412.online';

const Chat = () => {
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [error, setError] = useState<ErrorMessage | null>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: `${API_URL}/api/chat`,
    headers: {
      'Content-Type': 'application/json',
      'Origin': typeof window !== 'undefined' ? window.location.origin : '',
    },
    onError: (error) => {
      setError({
        title: 'Chat Error',
        message: error.message
      });
    },
  });

  const handleError = (error: Error) => {
    setError({
      title: 'Error',
      message: error.message
    });
    setTimeout(() => setError(null), 5000);
  };

  const handleImageGeneration = async () => {
    if (!input) return;
    
    setIsGeneratingImage(true);
    try {
      const response = await fetch(`${API_URL}/api/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': typeof window !== 'undefined' ? window.location.origin : '',
        },
        body: JSON.stringify({ prompt: input }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setGeneratedImage(data.imageUrl);
    } catch (error) {
      handleError(error instanceof Error ? error : new Error('Failed to generate image'));
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const clearError = () => setError(null);

  return (
    <div className="w-full h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg ${
              message.role === 'assistant'
                ? 'bg-blue-50'
                : 'bg-white'
            }`}
          >
            <p className="text-sm font-semibold">
              {message.role === 'assistant' ? 'AI' : 'You'}:
            </p>
            <p className="text-gray-700">{message.content}</p>
          </div>
        ))}
        {generatedImage && (
          <div className="py-2">
            <img 
              src={generatedImage}
              alt="Generated" 
              className="rounded-lg shadow-md max-w-full max-h-96 object-contain"
            />
          </div>
        )}
      </div>

      {error && (
        <div className="px-4">
          <Alert
            variant="destructive"
            className="mb-2"
            onClick={clearError}
          >
            <AlertTitle>{error.title}</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        </div>
      )}

      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message or image prompt..."
            className="flex-1 p-2 border rounded-md"
            disabled={isLoading || isGeneratingImage}
          />
          <Button
            type="button"
            onClick={handleImageGeneration}
            disabled={isLoading || isGeneratingImage || !input}
            variant="outline"
            size="icon"
          >
            {isGeneratingImage ? (
              <Camera className="h-4 w-4 animate-spin" />
            ) : (
              <ImageIcon className="h-4 w-4" />
            )}
          </Button>
          <Button 
            type="submit" 
            disabled={isLoading || isGeneratingImage || !input}
            size="icon"
          >
            {isLoading ? (
              <Send className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;