import { Github } from 'lucide-react';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ConversionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-auto max-w-7xl items-center justify-between">
          <div className="pl-[5%]">
            <Logo />
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-headline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent sm:text-3xl">
              SCIT
            </h1>
            <h2 className="text-lg font-medium text-primary tracking-wider">NUMBER CONVERSIONS TOOL</h2>
            <p className="text-xs text-muted-foreground">developed by Hafiz Muhammad Abubakar</p>
          </div>
          <ThemeToggle />
        </div>
        <MainNav />
      </header>
      <main className="flex-grow container max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 z-10">
        {children}
      </main>
      <footer className="w-full py-6 z-10">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
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
