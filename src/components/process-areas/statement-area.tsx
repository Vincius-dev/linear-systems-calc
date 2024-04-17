
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Equation from "@/model/equation";


interface StatementAreaProps {
    equations: Equation[];
    matrix: number[][];
    solution: number[];
}

export default function StatementArea({ equations, matrix, solution }: StatementAreaProps) {
    return (
        <div className="w-4/6">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Equations</AccordionTrigger>
                    <AccordionContent>
                        <Card className="bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle>Equations:</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xl italic text-center">
                                {equations.map((equation, index) => (
                                    <p key={index}>{equation.parts + " = " + equation.result}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Matrix Transformation</AccordionTrigger>
                    <AccordionContent>
                        <Card className="bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle>Matrix:</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xl italic text-center">
                                {matrix.map((row, rowIndex) => (
                                    <div key={rowIndex}>
                                        {row.map((value, columnIndex) => (
                                            <span key={columnIndex}>{value.toFixed(2)} </span>
                                        ))}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Solution</AccordionTrigger>
                    <AccordionContent>
                        <Card className="bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle>Solution Obtained by Gauss Elimination:</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xl italic text-center">
                                {solution.map((value, index) => (
                                    <p key={index} > var {index + 1} = {value.toFixed(2)}</p>
                                ))}
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}