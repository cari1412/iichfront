"use client";

import React, { useState } from 'react';
import { useChat } from 'ai/react';
import { Camera, Send, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ImageResponse {
  imageUrl: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://web.cari1412.online';

const Chat = () => {
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: `${API_URL}/api/chat`,
  });

  const handleImageGeneration = async () => {
    if (!input) return;
    setIsGeneratingImage(true);
    try {
      const response = await fetch(`${API_URL}/api/generate-image`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json() as ImageResponse;
      setGeneratedImage(data.imageUrl);
    } catch (err) {
      const error = err as Error;
      setErrorMessage(error.message || 'An error occurred');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow">
      <div className="h-[600px] overflow-y-auto p-6 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Start a conversation or generate an image
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 p-4 rounded-lg ${
                message.role === 'assistant' 
                  ? 'bg-white' 
                  : 'bg-blue-50'
              }`}
            >
              <p className="font-medium mb-1">
                {message.role === 'assistant' ? 'AI' : 'You'}
              </p>
              <p>{message.content}</p>
            </div>
          ))
        )}
        {generatedImage && (
          <div className="mb-4 p-4 bg-white rounded-lg">
            <Image
              src={generatedImage}
              alt="Generated"
              width={400}
              height={400}
              className="rounded mx-auto"
            />
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {errorMessage}
          </div>
        )}
      </div>

      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message or describe an image..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading || isGeneratingImage}
          />
          <Button
            type="button"
            onClick={handleImageGeneration}
            disabled={!input || isLoading || isGeneratingImage}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isGeneratingImage ? (
              <Camera className="w-5 h-5 animate-spin" />
            ) : (
              <ImageIcon className="w-5 h-5" />
            )}
          </Button>
          <Button
            type="submit"
            disabled={!input || isLoading}
            className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          >
            {isLoading ? (
              <Send className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;