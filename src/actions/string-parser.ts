'use server'

import Equation from "@/model/equation";

/**
 * Parses a string of linear equations and returns an array of Equation objects.
 * @param equationsString - The string containing the linear equations separated by semicolons.
 * @returns A Promise that resolves to an array of Equation objects.
 */
export async function parseLinearEquations(equationsString: string): Promise<Equation[]> {
        const listOfEquations = equationsString.split(';');
        const equations: Equation[] = [];

        console.log("\nEquações Recebidas:")
        for (let equation of listOfEquations) {
                equation = equation.replace(/\s+/g, '');

                console.log(equation);

                const equationParts = equation.split('=');
                const parts = equationParts[0].trim().split(/(?=[+-/])/);

                let mountedEquation: Equation = {
                        parts: parts,
                        result: equationParts[1]
                };

                equations.push(mountedEquation);
        }
        return equations;
}

/**
 * Parses the parts of linear equations and returns an array of coefficients.
 * 
 * @param parts - An array of string parts representing the linear equations.
 * @param variables - An array of string variables used in the linear equations.
 * @returns An array of numbers representing the coefficients of the linear equations.
 */
export async function parseLinearEquationsParts(parts: string[], variables: string[]): Promise<number[]> {
        const coefficients = new Array(variables.length).fill(0);

        for (const part of parts) {
                for (let i = 0; i < variables.length; i++) {
                        if (part.includes(variables[i])) {
                                let coefficient = part.replace(variables[i], '');
                                if (coefficient === '+' || coefficient === '') {
                                        coefficient = '1';
                                } else if (coefficient === '-') {
                                        coefficient = '-1';
                                }
                                coefficients[i] = parseFloat(coefficient);
                                break;
                        }
                }
        }

        return coefficients;
}

