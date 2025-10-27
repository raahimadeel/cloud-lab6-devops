
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Understanding Binary Numbers | SCIT',
    description: "A complete beginner's guide to understanding the binary number system (base-2). Learn why binary is the foundation of all modern computing and how to convert binary to decimal.",
};

export default function UnderstandingBinaryPage() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline text-primary">Understanding Binary Numbers: The Language of Computers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg">
                    <p>
                        Welcome to the world of binary! It might look like a random sequence of 1s and 0s, but the binary system is the fundamental language that powers every computer, smartphone, and digital device you use. Understanding binary is the first step to understanding how computers work at their most basic level.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-semibold text-accent">What is the Binary System?</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p>
                        The number system we use every day is the <strong>decimal system (base-10)</strong>, which has ten digits (0-9). The binary system, on the other hand, is a <strong>base-2</strong> system. It only uses two digits: <strong>0</strong> and <strong>1</strong>.
                    </p>
                    <p>
                        In computing, these two digits can represent the two states of an electrical switch:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>1</strong> represents an "ON" state (electricity is flowing).</li>
                        <li><strong>0</strong> represents an "OFF" state (no electricity is flowing).</li>
                    </ul>
                    <p>
                        Millions or even billions of these tiny switches, called transistors, are combined inside a processor to perform complex calculations. Each '0' or '1' is called a <strong>bit</strong> (short for binary digit), which is the smallest unit of data in a computer.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-semibold text-accent">How to Read Binary Numbers</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p>
                        Just like in the decimal system, the position of a digit in a binary number determines its value. In decimal, we have the ones place, tens place, hundreds place, and so on (powers of 10). In binary, we have the ones place, twos place, fours place, eights place, and so on (powers of 2).
                    </p>
                    <p>
                        To convert a binary number to decimal, you multiply each bit by its corresponding power of 2 (starting from the right at 2<sup>0</sup>) and then add all the results.
                    </p>
                    <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 text-xl">Example: Convert 1011<sub>2</sub> to Decimal</h4>
                        <p className="font-code text-lg mt-4">
                            (1 × 2<sup>3</sup>) + (0 × 2<sup>2</sup>) + (1 × 2<sup>1</sup>) + (1 × 2<sup>0</sup>)
                        </p>
                        <p className="font-code text-lg mt-2">
                            = (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)
                        </p>
                        <p className="font-code text-lg mt-2">
                            = 8 + 0 + 2 + 1
                        </p>
                        <p className="font-code text-lg mt-2">
                            = 11
                        </p>
                        <p className="mt-4 text-lg">So, the binary number <strong>1011<sub>2</sub></strong> is equal to <strong>11<sub>10</sub></strong> in decimal.</p>
                    </div>
                    <p className="mt-4">
                        Feeling ready to try it yourself? Use our <Link href="/conversions/binary-to-decimal" className="text-primary hover:underline">Binary to Decimal converter</Link> to check your work!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
