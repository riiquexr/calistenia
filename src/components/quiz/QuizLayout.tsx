import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  progress?: number; // 0-100, undefined hides bar
  onBack?: () => void;
  showBack?: boolean;
}

export function QuizLayout({ children, progress, onBack, showBack = true }: Props) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="bg-background border-b border-border sticky top-0 z-10">
        <div className="relative h-14 flex items-center justify-center">
          {showBack && (
            <button
              onClick={onBack}
              aria-label="Voltar"
              className="absolute left-4 text-foreground/70 hover:text-foreground transition"
            >
              <ChevronLeft size={22} />
            </button>
          )}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl italic text-primary tracking-wide">
              CALISTENIA
            </span>
            <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md">
              by Atlas
            </span>
          </div>
        </div>
        {progress !== undefined && (
          <div className="h-1 bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
