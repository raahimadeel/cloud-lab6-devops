"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

const baseDetails = {
    '10': { label: 'Decimal', regex: /^-?\d+$/ },
    '2': { label: 'Binary', regex: /^[01]+$/ },
    '8': { label: 'Octal', regex: /^[0-7]+$/ },
    '16': { label: 'Hexadecimal', regex: /^[0-9a-fA-F]+$/ },
};

type Base = keyof typeof baseDetails;

export function ArithmeticCalculator() {
    const [operation, setOperation] = useState('add');
    const [base, setBase] = useState<Base>('10');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCalculate = () => {
        setError(null);
        setResult(null);

        const numBase = parseInt(base, 10);
        const { regex } = baseDetails[base];

        if (!regex.test(input1) || !regex.test(input2)) {
            setError(`Invalid number for ${baseDetails[base].label} base.`);
            return;
        }

        try {
            const num1 = BigInt( (base === '10' ? '' : `0${{2: 'b', 8: 'o', 16: 'x'}[numBase] ?? ''}`) + input1 );
            const num2 = BigInt( (base === '10' ? '' : `0${{2: 'b', 8: 'o', 16: 'x'}[numBase] ?? ''}`) + input2 );

            let calculationResult: bigint;
            switch (operation) {
                case 'add':
                    calculationResult = num1 + num2;
                    break;
                case 'subtract':
                    calculationResult = num1 - num2;
                    break;
                case 'multiply':
                    calculationResult = num1 * num2;
                    break;
                case 'divide':
                    if (num2 === BigInt(0)) {
                        setError('Division by zero is not allowed.');
                        return;
                    }
                    calculationResult = num1 / num2;
                    break;
                default:
                    setError('Invalid operation.');
                    return;
            }
            setResult(calculationResult.toString(numBase).toUpperCase());
        } catch (e) {
            setError('An error occurred during calculation. The numbers might be too large or invalid.');
        }
    };

    const handleBaseChange = (newBase: Base) => {
        setBase(newBase);
        setInput1('');
        setInput2('');
        setResult(null);
        setError(null);
    }

    return (
        <Card className="w-full max-w-4xl mx-auto mt-8 bg-card/80 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="font-sans text-lg font-medium text-foreground">Arithmetic Calculator</CardTitle>
                <CardDescription>Perform calculations on numbers in different bases.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <Label htmlFor="operation-select">Operation</Label>
                        <Select value={operation} onValueChange={setOperation}>
                            <SelectTrigger id="operation-select">
                                <SelectValue placeholder="Select an operation" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="add">Addition (+)</SelectItem>
                                <SelectItem value="subtract">Subtraction (-)</SelectItem>
                                <SelectItem value="multiply">Multiplication (*)</SelectItem>
                                <SelectItem value="divide">Division (/)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="base-select">Number Base</Label>
                        <Select value={base} onValueChange={(value) => handleBaseChange(value as Base)}>
                            <SelectTrigger id="base-select">
                                <SelectValue placeholder="Select a base" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">Decimal</SelectItem>
                                <SelectItem value="2">Binary</SelectItem>
                                <SelectItem value="8">Octal</SelectItem>
                                <SelectItem value="16">Hexadecimal</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <Label htmlFor="input1">Input 1</Label>
                        <Input
                            id="input1"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                            placeholder={`Enter ${baseDetails[base].label} number`}
                            className="font-code bg-input/50"
                        />
                    </div>
                    <div>
                        <Label htmlFor="input2">Input 2</Label>
                        <Input
                            id="input2"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                            placeholder={`Enter ${baseDetails[base].label} number`}
                            className="font-code bg-input/50"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <Button onClick={handleCalculate}>
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculate
                    </Button>
                </div>
                
                {error && (
                    <div id="error-message" role="alert" className="mt-6 flex items-center justify-center gap-2 text-sm text-destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <span>{error}</span>
                    </div>
                )}
                
                <div className={cn("mt-6 text-center rounded-lg p-4", result !== null && 'glowing-card')}>
                    <Label className="text-sm font-medium text-muted-foreground">Result</Label>
                    {result !== null ? (
                        <p className="font-code text-2xl font-bold text-primary break-all">{result}</p>
                    ) : (
                        <p className="font-code text-lg text-muted-foreground">Result will be shown here</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
