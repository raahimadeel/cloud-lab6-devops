import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Converter } from '@/components/converter';

export const metadata: Metadata = {
  title: 'Decimal to Binary Converter | SCIT',
  description: 'Convert decimal numbers to binary effortlessly with our free online tool. Our guide explains the "division by 2" method with clear, step-by-step examples.',
};

export default function DecimalToBinaryPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">Decimal to Binary Conversion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p>Use the main converter on our homepage to instantly see the binary equivalent of any decimal number.</p>
        </CardContent>
      </Card>

      <Converter />

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-accent">How to Convert Decimal to Binary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg">
          <p>
            The most common method for converting a decimal (base-10) number to binary (base-2) is the "division by 2" method. You repeatedly divide the decimal number by 2 and record the remainder at each step. The binary equivalent is the sequence of these remainders read from the last one to the first.
          </p>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Example: Convert 13<sub>10</sub> to Binary</h4>
            <ol className="list-decimal list-inside space-y-2 font-code">
                <li>13 ÷ 2 = 6 with a remainder of <strong>1</strong></li>
                <li>6 ÷ 2 = 3 with a remainder of <strong>0</strong></li>
                <li>3 ÷ 2 = 1 with a remainder of <strong>1</strong></li>
                <li>1 ÷ 2 = 0 with a remainder of <strong>1</strong></li>
            </ol>
            <p className="mt-4">
              Once the quotient is 0, you stop. Reading the remainders from bottom to top gives you the binary number.
            </p>
            <p className="mt-2">So, <strong>13<sub>10</sub></strong> is equal to <strong>1101<sub>2</sub></strong>.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
