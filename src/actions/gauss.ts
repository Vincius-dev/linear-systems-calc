"use server"

/**
 * Solves a system of linear equations using the Gauss elimination method.
 * 
 * @param equations - The matrix representing the system of linear equations.
 * @returns A promise that resolves to an array of solutions for the system of equations.
 */
export async function gaussMethod(equations: number[][]): Promise<number[]> {
    const n = equations.length;

    for (let i = 0; i < n; i++) {
            // Search for maximum in this column
            let maxEl = Math.abs(equations[i][i]);
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                    if (Math.abs(equations[k][i]) > maxEl) {
                            maxEl = Math.abs(equations[k][i]);
                            maxRow = k;
                    }
            }

            // Swap maximum row with current row
            [equations[maxRow], equations[i]] = [equations[i], equations[maxRow]];

            // Make all rows below this one 0 in current column
            for (let k = i + 1; k < n; k++) {
                    const c = -equations[k][i] / equations[i][i];
                    for (let j = i; j < n + 1; j++) {
                            if (i === j) {
                                    equations[k][j] = 0;
                            } else {
                                    equations[k][j] += c * equations[i][j];
                            }
                    }
            }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    const x = new Array(n).fill(0);
    for (let i = n - 1; i > -1; i--) {
            x[i] = equations[i][n] / equations[i][i];
            for (let k = i - 1; k > -1; k--) {
                    equations[k][n] -= equations[k][i] * x[i];
            }
            x[i] = +x[i].toFixed(2); // limit to 2 decimal places
    }
    return Promise.resolve(x);
}