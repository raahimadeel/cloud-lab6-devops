"use client";

import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ClipboardCopy, Check, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Base = 'bin' | 'dec' | 'oct' | 'hex';
type NumberValues = Record<Base, string>;

const baseDetails: Record<Base, { label: string; base: number; regex: RegExp }> = {
  dec: { label: 'Decimal', base: 10, regex: /^\d+$/ },
  bin: { label: 'Binary', base: 2, regex: /^[01]+$/ },
  oct: { label: 'Octal', base: 8, regex: /^[0-7]+$/ },
  hex: { label: 'Hexadecimal', base: 16, regex: /^[0-9a-fA-F]+$/ },
};

export function Converter() {
  const [values, setValues] = useState<NumberValues>({ dec: '', bin: '', oct: '', hex: '' });
  const [error, setError] = useState<string | null>(null);
  const [copiedBase, setCopiedBase] = useState<Base | null>(null);
  const { toast } = useToast();

  const handleCopy = (base: Base) => {
    if (!values[base]) return;
    navigator.clipboard.writeText(values[base]);
    setCopiedBase(base);
    toast({
      title: 'Copied to Clipboard',
      description: `${baseDetails[base].label} value: ${values[base]}`,
    });
    setTimeout(() => setCopiedBase(null), 2000);
  };

  const handleChange = (base: Base, value: string) => {
    if (value === '') {
      setValues({ dec: '', bin: '', oct: '', hex: '' });
      setError(null);
      return;
    }

    if (!baseDetails[base].regex.test(value)) {
      const updatedValues = { ...values, [base]: value };
      for (const key in updatedValues) {
        if (key !== base) updatedValues[key as Base] = '';
      }
      setValues(updatedValues);
      setError(`Invalid character for ${baseDetails[base].label} input.`);
      return;
    }

    setError(null);

    try {
      const bigIntValue = BigInt(
        { dec: '', bin: '0b', oct: '0o', hex: '0x' }[base] + value
      );

      setValues({
        dec: bigIntValue.toString(10),
        bin: bigIntValue.toString(2),
        oct: bigIntValue.toString(8),
        hex: bigIntValue.toString(16),
      });
    } catch (e) {
      setError("Number is too large or invalid.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(Object.keys(baseDetails) as Base[]).map((base) => (
          <Card key={base} className="shadow-md dark:shadow-xl dark:shadow-black/20">
            <CardHeader>
              <CardTitle className="font-sans text-sm font-medium text-muted-foreground">{baseDetails[base].label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative flex items-center">
                <Label htmlFor={base} className="sr-only">{baseDetails[base].label}</Label>
                <Input
                  id={base}
                  type="text"
                  value={values[base]}
                  onChange={(e) => handleChange(base, e.target.value)}
                  className="font-code text-lg sm:text-xl md:text-2xl h-14 pr-12"
                  placeholder={`Enter ${baseDetails[base].label}...`}
                  aria-invalid={!!error}
                  aria-describedby={error ? "error-message" : undefined}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-11 w-11 text-muted-foreground hover:text-foreground"
                  onClick={() => handleCopy(base)}
                  aria-label={`Copy ${baseDetails[base].label} value`}
                  disabled={!values[base]}
                >
                  {copiedBase === base ? (
                    <Check className="h-6 w-6 text-primary" />
                  ) : (
                    <ClipboardCopy className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {error && (
        <div id="error-message" role="alert" className="mt-6 flex items-center justify-center gap-2 text-sm text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
