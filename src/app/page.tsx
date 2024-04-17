import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center mt-32">
        <Link href="/calc/linear-system">Go to Linear System Calculator</Link>
      </div>
    </main>
  );
}
