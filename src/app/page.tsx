import { Converter } from '@/components/converter';
import { ThemeToggle } from '@/components/theme-toggle';
import { Github } from 'lucide-react';
import { BitsManipulator } from '@/components/bits-manipulator';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-7xl items-center justify-between">
          <Logo />
          <h1 className="font-headline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-3xl">
            SCIT NUMBER CONVERSIONS
          </h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-grow container max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 z-10">
        <Converter />
        <BitsManipulator />
      </main>
      <footer className="w-full py-6 z-10">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p className="mb-2">Developed by Hafiz Muhammad Abubakar for educational purposes.</p>
          <a
            href="https://github.com/firebase/firebase-genkit-samples/tree/main/apps/scit-converter-next"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            aria-label="View on GitHub"
          >
            <Github className="h-4 w-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
