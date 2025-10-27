import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Converter } from '@/components/converter';

export const metadata: Metadata = {
  title: 'Binary to Decimal Converter | SCIT',
  description: 'Easily convert binary numbers to decimal with our free online tool. Includes a step-by-step guide and examples. Perfect for students and developers.',
};

export default function BinaryToDecimalPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Binary to Decimal Conversion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Use the converter below to instantly see the decimal equivalent of any binary number.</p>
        </CardContent>
      </Card>
      
      <Converter />

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-accent">How to Convert Binary to Decimal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            Converting a number from binary (base-2) to decimal (base-10) is a straightforward process. Each digit in a binary number is called a bit. The position of each bit represents a power of 2, starting from the rightmost bit which is 2<sup>0</sup>.
          </p>
          <p>
            To convert, you multiply each bit by its corresponding power of 2 and then sum up all the results.
          </p>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Example: Convert 1101<sub>2</sub> to Decimal</h4>
            <ol className="list-decimal list-inside space-y-2">
                <li>Write down the binary number: <code className="font-code p-1 bg-background rounded">1101</code></li>
                <li>Assign powers of 2 from right to left:
                    <ul className="font-code mt-2 space-y-1">
                        <li>1 &rarr; 2<sup>0</sup> = 1</li>
                        <li>0 &rarr; 2<sup>1</sup> = 2</li>
                        <li>1 &rarr; 2<sup>2</sup> = 4</li>
                        <li>1 &rarr; 2<sup>3</sup> = 8</li>
                    </ul>
                </li>
                <li>Multiply each bit by its power of 2:
                    <p className="font-code mt-2">(1 × 8) + (1 × 4) + (0 × 2) + (1 × 1)</p>
                </li>
                <li>Sum the results:
                    <p className="font-code mt-2">8 + 4 + 0 + 1 = 13</p>
                </li>
            </ol>
            <p className="mt-4">So, <strong>1101<sub>2</sub></strong> is equal to <strong>13<sub>10</sub></strong>.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
