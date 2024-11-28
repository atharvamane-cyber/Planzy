import { redirect } from "next/navigation";
import Navbar from "./components/global/Navbar";
import Hero from "./components/global/Hero";
import { auth } from "./lib/auth";
;
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-full mx-auto ">
      <Navbar />
      <Hero />
      
    </div>
  );
}
