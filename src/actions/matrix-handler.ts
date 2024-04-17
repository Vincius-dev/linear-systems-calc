'use server'

import Equation from "@/model/equation";

import { parseLinearEquationsParts } from "./string-parser";

/**
 * Converts an array of equations into a matrix representation.
 * Each equation is represented as an array of coefficients, with the last element being the result.
 * @param equations - An array of Equation objects representing the linear equations.
 * @returns A Promise that resolves to a 2D array representing the matrix.
 */
export async function convertToMatrix(equations: Equation[]): Promise<number[][]> {
    const variables = getVariables(equations);
    const matrix = [];

    for (const equation of equations) {
            const coefficients = await parseLinearEquationsParts(equation.parts, variables);
            coefficients.push(parseFloat(equation.result));
            matrix.push(coefficients);
    }

    return matrix;
}

function getVariables(equations: Equation[]): string[] {
    const variables = new Set<string>();

    for (const equation of equations) {
            for (const part of equation.parts) {
                    const variable = part.replace(/[^a-z]/gi, ''); // remove all non-letter characters
                    variables.add(variable);
            }
    }

    return Array.from(variables);
}