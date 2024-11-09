import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-900 ">
      <main className="flex flex-col justify-center items-center mx-auto text-center max-w-5xl h-dvh">
        <div className="bg-slate-700 flex flex-col gap-6 p-12 rounded-xl text-white w-4/5 sm:max-w-96 sm:text-2xl">
          <h1 className="text-5xl mb-6">REI Shop</h1>
          <address>
            1790 Expo Pkwy <br />
            Sacramento, CA 95815
          </address>
          <p>Open daily: 9am to 6pm</p>
          <Link href="tel:916 924 8900" className="hover:underline">
            916 924 8900
          </Link>
        </div>
      </main>
    </div>
  );
}
