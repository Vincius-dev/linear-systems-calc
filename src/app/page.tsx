"use client"

import CalcArea from "@/components/calcarea";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center mt-32">

        <CalcArea onSubmitResult={(result) => {
          console.log("Result from CalcArea:", result);
        }} />

      </div>
    </main>
  );
}
