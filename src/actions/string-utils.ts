'use server'

export interface Equation {
    parts: string[];
    result: string;
}


export async function parseEquations(equationsString: string): Promise<Equation[]> {
        const listOfEquations = equationsString.split(';');
        const equations: Equation[] = [];

        for (let equation of listOfEquations) {
                equation = equation.replace(/\s+/g, '');
                const equationParts = equation.split('=');
                const parts = equationParts[0].trim().split(/(?=[+-/])/);

                let mountedEquation: Equation = {
                        parts: parts,
                        result: equationParts[1]
                };

                equations.push(mountedEquation);

                console.log(mountedEquation);
        }
        return equations;
}
