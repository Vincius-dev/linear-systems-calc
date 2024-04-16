'use server'

export interface Equation {
    variables: string[];
    result: number;
}


function parseEquations(equationsString: string): Equation[] {
        const equations = equationsString.split(';').map((equationString) => {
                const equationParts = equationString.trim().split('=');
                const variables = equationParts[0].trim().split('+').map((variable) => variable.trim());
                const result = parseFloat(equationParts[1].trim());
                return { variables, result };
        });
        return equations;
}