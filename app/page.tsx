// app/page.tsx
import Chat from "@/components/Chat";

export const metadata = {
  title: 'AI Chat Assistant',
  description: 'Chat with AI and generate images',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="py-4 px-6 border-b bg-white">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          AI Chat Assistant
        </h1>
      </header>
      <div className="container mx-auto px-4 py-6">
        <Chat />
      </div>
    </main>
  );
}