// app/page.tsx
import Chat from "@/components/Chat";

export const metadata = {
  title: 'AI Chat Assistant',
  description: 'Chat with AI and generate images',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            AI Chat Assistant
          </h1>
        </header>
        <main className="py-6">
          <Chat />
        </main>
      </div>
    </div>
  );
}