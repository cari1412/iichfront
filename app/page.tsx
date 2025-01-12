// app/page.tsx
import Chat from "@/components/Chat";

export const metadata = {
  title: 'AI Chat with Image Generation',
  description: 'Chat interface with AI and image generation capabilities',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-semibold text-center text-foreground">
          AI Chat Assistant
        </h1>
      </header>
      <div className="flex-1">
        <Chat />
      </div>
    </main>
  );
}