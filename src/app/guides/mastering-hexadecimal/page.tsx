
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mastering Hexadecimal (Hex) | SCIT',
    description: 'Learn how to read, write, and use hexadecimal (base-16) numbers. Understand why hex is crucial for web development, memory addressing, and more.',
};

export default function MasteringHexadecimalPage() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline text-primary">Mastering Hexadecimal: A Programmer's Friend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg">
                    <p>
                        If you've ever looked at a color code like <code className="font-code bg-muted p-1 rounded">#FF5733</code> or seen a memory address like <code className="font-code bg-muted p-1 rounded">0x7FFF5FBFFD74</code>, you've encountered hexadecimal numbers. While it might seem complex, "hex" is a powerful system that makes it much easier for programmers to work with binary data.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-semibold text-accent">What is Hexadecimal?</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p>
                        The hexadecimal system is a <strong>base-16</strong> number system. This means it uses sixteen distinct symbols. It uses the familiar digits 0-9 and then uses the letters A, B, C, D, E, and F to represent the values 10 through 15.
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>A</strong> = 10</li>
                        <li><strong>B</strong> = 11</li>
                        <li><strong>C</strong> = 12</li>
                        <li><strong>D</strong> = 13</li>
                        <li><strong>E</strong> = 14</li>
                        <li><strong>F</strong> = 15</li>
                    </ul>
                    <p>
                        The main reason hexadecimal is so useful in computing is its direct relationship with binary. One hexadecimal digit can represent exactly four binary digits (a nibble).
                    </p>
                     <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 text-xl">Example: Hex to Binary</h4>
                        <p className="font-code text-lg mt-4">
                            The hex digit <code className="p-1 rounded bg-background">F</code> is 15 in decimal, which is <code className="p-1 rounded bg-background">1111</code> in binary.
                        </p>
                         <p className="font-code text-lg mt-2">
                            The hex digit <code className="p-1 rounded bg-background">A</code> is 10 in decimal, which is <code className="p-1 rounded bg-background">1010</code> in binary.
                        </p>
                         <p className="font-code text-lg mt-2">
                           So the hex number <code className="p-1 rounded bg-background">A5</code> is <code className="p-1 rounded bg-background">10100101</code> in binary. Much shorter and easier to read!
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-semibold text-accent">How to Convert Hexadecimal to Decimal</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p>
                        Converting from hex to decimal works just like converting from binary, but using powers of 16 instead of powers of 2.
                    </p>
                    <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 text-xl">Example: Convert 2B5<sub>16</sub> to Decimal</h4>
                         <p className="mt-4">
                           Remember: B = 11.
                        </p>
                        <p className="font-code text-lg mt-4">
                            (2 × 16<sup>2</sup>) + (11 × 16<sup>1</sup>) + (5 × 16<sup>0</sup>)
                        </p>
                        <p className="font-code text-lg mt-2">
                            = (2 × 256) + (11 × 16) + (5 × 1)
                        </p>
                        <p className="font-code text-lg mt-2">
                            = 512 + 176 + 5
                        </p>
                        <p className="font-code text-lg mt-2">
                            = 693
                        </p>
                        <p className="mt-4 text-lg">So, the hexadecimal number <strong>2B5<sub>16</sub></strong> is equal to <strong>693<sub>10</sub></strong> in decimal.</p>
                    </div>
                    <p className="mt-4">
                       Want to convert hex codes quickly? Try our <Link href="/conversions/hex-to-decimal" className="text-primary hover:underline">Hexadecimal to Decimal converter</Link>.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
