
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Github } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Guides | SCIT Number Converter',
    description: 'Explore our guides and articles on number systems, conversions, bitwise operations, and other computer science topics.',
};

const guides = [
    {
        title: "Understanding Binary Numbers",
        description: "A beginner's guide to the binary system and why it's the foundation of modern computing.",
        href: "/guides/understanding-binary",
        tags: ["Binary", "Computer Science 101"],
    },
    {
        title: "Mastering Hexadecimal",
        description: "Learn how to read and use hexadecimal numbers, the compact language of memory addresses and color codes.",
        href: "/guides/mastering-hexadecimal",
        tags: ["Hexadecimal", "Programming"],
    },
    {
        title: "Bitwise Operations Explained",
        description: "An introduction to bitwise operators like AND, OR, XOR, and bit shifting.",
        href: "/guides/bitwise-operations",
        tags: ["Bit Manipulation", "Advanced"],
    },
];

export default function GuidesPage() {
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
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-headline text-primary">Conversion Guides & Articles</h1>
                        <p className="mt-2 text-lg text-muted-foreground">Deepen your understanding of number systems and related concepts.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {guides.map((guide) => (
                            <Link href={guide.href} key={guide.title} className="block group">
                                <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-accent">{guide.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{guide.description}</p>
                                        <div className="mt-4 flex gap-2">
                                            {guide.tags.map(tag => (
                                                <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
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
