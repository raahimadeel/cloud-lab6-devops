import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Converter } from '@/components/converter';

export const metadata: Metadata = {
  title: 'Hexadecimal to Decimal Converter | SCIT',
  description: 'Quickly convert hexadecimal (hex) values to decimal numbers. Our guide provides a simple method with examples for converting any hex code.',
};

export default function HexToDecimalPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Hexadecimal to Decimal Conversion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Convert any hexadecimal value to its decimal counterpart using the universal converter on our platform.</p>
        </CardContent>
      </Card>
      
      <Converter />

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-accent">How to Convert Hexadecimal to Decimal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Converting from hexadecimal (base-16) to decimal (base-10) is similar to converting from binary. Each digit in a hex number represents a power of 16. Remember that the letters A-F represent the numbers 10-15.
          </p>
          <p>
            To convert, multiply each hex digit by its corresponding power of 16 and add the results together.
          </p>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Example: Convert 1A3<sub>16</sub> to Decimal</h4>
            <ol className="list-decimal list-inside space-y-2">
                <li>Write down the hex number: <code className="font-code p-1 bg-background rounded">1A3</code></li>
                <li>Assign powers of 16 from right to left:
                    <ul className="font-code mt-2 space-y-1">
                        <li>3 &rarr; 16<sup>0</sup> = 1</li>
                        <li>A (which is 10) &rarr; 16<sup>1</sup> = 16</li>
                        <li>1 &rarr; 16<sup>2</sup> = 256</li>
                    </ul>
                </li>
                <li>Multiply each hex digit by its power of 16:
                    <p className="font-code mt-2">(1 × 256) + (10 × 16) + (3 × 1)</p>
                </li>
                <li>Sum the results:
                    <p className="font-code mt-2">256 + 160 + 3 = 419</p>
                </li>
            </ol>
            <p className="mt-4">So, <strong>1A3<sub>16</sub></strong> is equal to <strong>419<sub>10</sub></strong>.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
