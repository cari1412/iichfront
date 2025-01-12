import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { XCircle } from 'lucide-react';

interface ToastProps {
  title: string;
  message: string;
}

export function Toast({ title, message }: ToastProps) {
  return (
    <Alert className="fixed bottom-4 right-4 max-w-md animate-in fade-in slide-in-from-bottom-4">
      <XCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}