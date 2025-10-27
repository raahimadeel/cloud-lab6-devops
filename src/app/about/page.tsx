import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { MainNav } from '@/components/main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Github } from 'lucide-react';


export const metadata: Metadata = {
    title: 'About | SCIT Number Converter',
    description: 'Learn more about the SCIT Number Conversion Tool, a powerful and easy-to-use utility for developers, students, and enthusiasts working with different number systems.',
};

export default function AboutPage() {
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
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-headline text-primary">About the SCIT Number Conversion Tool</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-lg">
                        <p>
                            The SCIT Number Conversion Tool is a comprehensive utility designed for developers, computer science students, and tech enthusiasts. Our goal is to provide a fast, accurate, and user-friendly interface for converting numbers between the most common numeral systems used in computing: decimal, binary, octal, and hexadecimal.
                        </p>
                        <section>
                            <h3 className="text-2xl font-semibold text-accent mb-2">Our Features</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Real-time Conversions:</strong> Instantly see the equivalent of a number in all four bases as you type.</li>
                                <li><strong>Interactive Bit Manipulator:</strong> Visualize and manipulate a 32-bit integer, toggle individual bits, and see how it affects the decimal and hexadecimal values. A great tool for learning about data representation.</li>
                                <li><strong>Arithmetic Calculations:</strong> Perform basic arithmetic (add, subtract, multiply, divide) on numbers in any base, a feature not commonly found in other converters.</li>
                                <li><strong>Modern & Responsive Design:</strong> Enjoy a clean, modern interface that works beautifully on both desktop and mobile devices.</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="text-2xl font-semibold text-accent mb-2">Why We Built This</h3>
                            <p>
                                Understanding how data is represented at a low level is fundamental in computer science. Whether you're debugging, learning about network protocols, or studying computer architecture, converting between number bases is a frequent task. We wanted to create a tool that not only performs these conversions but also helps users learn and explore the concepts behind them in an interactive way.
                            </p>
                        </section>
                    </CardContent>
                </Card>
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
