
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Bitwise Operations Explained | SCIT',
    description: 'An introduction to bitwise operators (AND, OR, XOR, NOT, and bit shifts). Learn how these low-level operations are used for performance and data manipulation.',
};

export default function BitwiseOperationsPage() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline text-primary">A Guide to Bitwise Operations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg">
                    <p>
                        Bitwise operations are actions that work on the individual bits of a number. They are incredibly fast because they are performed directly by the CPU. While you may not use them every day, they are essential for low-level programming, graphics, encryption, and performance optimization.
                    </p>
                     <p>
                        Our <Link href="/#bits-manipulator" className="text-primary hover:underline">interactive bit manipulator</Link> is a great way to visualize these concepts in action!
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-semibold text-accent">The Main Bitwise Operators</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p>
                        Bitwise operations compare two numbers bit by bit. Let's look at the most common ones using the numbers a = 5 (<code className="font-code p-1 rounded bg-background">0101</code>) and b = 3 (<code className="font-code p-1 rounded bg-background">0011</code>).
                    </p>

                    <h3 className="text-xl font-semibold pt-4">AND (&)</h3>
                    <p>The bitwise AND operator returns a 1 in a bit position only if both corresponding bits are 1.</p>
                     <pre className="font-code p-4 bg-muted rounded-md text-sm">
                        0101  (a = 5)<br />
                        & 0011  (b = 3)<br />
                        ------<br />
                        = 0001  (Result = 1)
                    </pre>
                    
                    <h3 className="text-xl font-semibold pt-4">OR (|)</h3>
                    <p>The bitwise OR operator returns a 1 if at least one of the corresponding bits is 1.</p>
                     <pre className="font-code p-4 bg-muted rounded-md text-sm">
                        0101  (a = 5)<br />
                        | 0011  (b = 3)<br />
                        ------<br />
                        = 0111  (Result = 7)
                    </pre>

                    <h3 className="text-xl font-semibold pt-4">XOR (^)</h3>
                    <p>The bitwise XOR (exclusive OR) operator returns a 1 only if the corresponding bits are different.</p>
                     <pre className="font-code p-4 bg-muted rounded-md text-sm">
                        0101  (a = 5)<br />
                        ^ 0011  (b = 3)<br />
                        ------<br />
                        = 0110  (Result = 6)
                    </pre>

                    <h3 className="text-xl font-semibold pt-4">NOT (~)</h3>
                    <p>The bitwise NOT operator inverts all the bits of a single number. It flips 1s to 0s and 0s to 1s. This is also known as the complement.</p>
                     <pre className="font-code p-4 bg-muted rounded-md text-sm">
                        ~ 0101  (a = 5)<br />
                        ------<br />
                        = 1010  (In a 4-bit system, this is 10. In a 32-bit signed integer, the result is -6)
                    </pre>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h2 className="text-2xl font-semibold text-accent">Bit Shifting</h2>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                    <p>Bit shifting moves every bit in a number to the left or right. This is a very fast way to multiply or divide by powers of 2.</p>
                    
                    <h3 className="text-xl font-semibold pt-4">Left Shift (&lt;&lt;)</h3>
                    <p>Shifts bits to the left, filling in the empty spaces on the right with zeros. <code className="font-code p-1 rounded bg-background">x &lt;&lt; n</code> is equivalent to multiplying x by 2<sup>n</sup>.</p>
                     <pre className="font-code p-4 bg-muted rounded-md text-sm">
                        5 &lt;&lt; 2  (0101 &lt;&lt; 2)<br/>
                        = 20    (10100)
                    </pre>

                    <h3 className="text-xl font-semibold pt-4">Right Shift (&gt;&gt;)</h3>
                    <p>Shifts bits to the right. <code className="font-code p-1 rounded bg-background">x &gt;&gt; n</code> is equivalent to dividing x by 2<sup>n</sup>.</p>
                     <pre className="font-code p-4 bg-muted rounded-md text-sm">
                        20 &gt;&gt; 2 (10100 &gt;&gt; 2)<br/>
                        = 5     (00101)
                    </pre>
                </CardContent>
            </Card>
        </div>
    );
}
