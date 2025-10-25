"use client";

import { useState, useCallback } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bit } from './bit';
import { ArrowLeft, ArrowRight, RotateCcw, Trash2 } from 'lucide-react';

export function BitsManipulator() {
    const [bits, setBits] = useState(Array(32).fill(0));

    const toggleBit = useCallback((index: number) => {
        setBits(currentBits => {
            const newBits = [...currentBits];
            newBits[index] = newBits[index] === 0 ? 1 : 0;
            return newBits;
        });
    }, []);

    const setAll = () => setBits(Array(32).fill(1));
    const clearAll = () => setBits(Array(32).fill(0));

    const shiftLeft = () => {
        setBits(currentBits => [ ...currentBits.slice(1), 0]);
    };

    const shiftRight = () => {
        setBits(currentBits => [0, ...currentBits.slice(0, -1)]);
    };

    const renderBits = (start: number, end: number) => {
        return bits.slice(start, end).map((bit, index) => (
            <Bit key={start + index} bit={bit} onClick={() => toggleBit(start + index)} />
        ));
    };

    return (
        <Card className="w-full max-w-4xl mx-auto mt-8 shadow-lg bg-card/80 backdrop-blur-sm border-border/20">
            <CardHeader>
                <CardTitle className="font-sans text-lg font-medium text-foreground">Binary Bit Manipulation</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-muted/50 rounded-lg">
                   <div className="flex items-center gap-1 p-2 border-r border-border/30 pr-3">
                     <span className="text-xs text-muted-foreground mr-2">31</span>
                     {renderBits(0, 8)}
                     <span className="text-xs text-muted-foreground ml-2">24</span>
                   </div>
                   <div className="flex items-center gap-1 p-2 border-r border-border/30 pr-3">
                     {renderBits(8, 16)}
                     <span className="text-xs text-muted-foreground ml-2">16</span>
                   </div>
                   <div className="flex items-center gap-1 p-2 border-r border-border/30 pr-3">
                     {renderBits(16, 24)}
                      <span className="text-xs text-muted-foreground ml-2">8</span>
                   </div>
                   <div className="flex items-center gap-1 p-2">
                     {renderBits(24, 32)}
                      <span className="text-xs text-muted-foreground ml-2">0</span>
                   </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Button onClick={setAll} variant="outline"><RotateCcw className="mr-2 h-4 w-4"/> Set All</Button>
                    <Button onClick={shiftLeft} variant="outline"><ArrowLeft className="mr-2 h-4 w-4"/> Shift Left</Button>
                    <Button onClick={shiftRight} variant="outline"><ArrowRight className="mr-2 h-4 w-4"/> Shift Right</Button>
                    <Button onClick={clearAll} variant="destructive"><Trash2 className="mr-2 h-4 w-4"/> Clear All</Button>
                </div>
            </CardContent>
        </Card>
    );
}
