"use client"

import { gaussMethod } from "@/actions/gauss";
import { convertToMatrix } from "@/actions/matrix-handler";
import CalcArea from "@/components/process-areas/calc-area";
import StatementArea from "@/components/process-areas/statement-area";
import Equation from "@/model/equation";
import { useState } from "react";

export default function LinearSystemCalc() {

  const [ equationsRead, setEquations ] = useState<Equation[]>();
  const [ matrix, setMatrix ] = useState<number[][]>();
  const [ solutionsVar, setSolutions ] = useState<number[]>();

  async function calculate(equations: Equation[]) {
    console.log(equations);
    let matrixOfEquations = await convertToMatrix(equations);
    setMatrix(matrixOfEquations);
    console.log(matrixOfEquations);
    let solutions = await gaussMethod(matrixOfEquations);
    setSolutions(solutions);
    console.log(solutions);
  }

  return (
    <main>
      <div className="flex justify-center mt-32">
        <CalcArea onSubmitResult={(equations) => {
          setEquations(equations);          
          console.log(equationsRead)
          calculate(equations);
        }} />
        
      </div>
      <div className="flex justify-center">
        <StatementArea equations={equationsRead ?? []} matrix={matrix ?? []} solution={ solutionsVar ?? []}/>
      </div>
    </main>
  );
}
