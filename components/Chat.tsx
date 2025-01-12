"use client";

import React, { useState } from 'react';
import { useChat } from 'ai/react';
import { Camera, Send, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
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
    <div className="flex flex-col w-full max-w-4xl mx-auto h-[calc(100vh-6rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col p-4 rounded-lg ${
              message.role === 'assistant'
                ? 'bg-white shadow-sm ml-4'
                : 'bg-blue-50 shadow-sm mr-4'
            }`}
          >
            <span className="text-sm font-medium mb-2 text-gray-600">
              {message.role === 'assistant' ? 'AI Assistant' : 'You'}
            </span>
            <p className="text-gray-800 leading-relaxed">{message.content}</p>
          </div>
        ))}
        {generatedImage && (
          <div className="bg-white p-4 rounded-lg shadow-sm ml-4">
            <span className="text-sm font-medium mb-2 text-gray-600 block">Generated Image</span>
            <div className="mt-2 relative aspect-square w-full max-w-xl mx-auto">
              <Image 
                src={generatedImage}
                alt="AI Generated" 
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        )}
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Start a conversation or generate an image
          </div>
        )}
      </div>

      {error && (
        <Alert
          variant="destructive"
          className="m-4"
          onClick={clearError}
        >
          <AlertTitle>{error.title}</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <div className="p-4 bg-white border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message or describe an image..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            disabled={isLoading || isGeneratingImage}
          />
          <Button
            type="button"
            onClick={handleImageGeneration}
            disabled={isLoading || isGeneratingImage || !input}
            variant="outline"
            size="icon"
            className="transition-all"
          >
            {isGeneratingImage ? (
              <Camera className="h-5 w-5 animate-spin" />
            ) : (
              <ImageIcon className="h-5 w-5" />
            )}
          </Button>
          <Button 
            type="submit" 
            disabled={isLoading || isGeneratingImage || !input}
            size="icon"
            className="transition-all"
          >
            {isLoading ? (
              <Send className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;