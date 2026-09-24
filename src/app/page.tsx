import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <LoadingScreen>
      <main className="flex min-h-svh items-center justify-center bg-white text-black">
        <h1 className="text-4xl">Olá</h1>
      </main>
    </LoadingScreen>
  );
}
