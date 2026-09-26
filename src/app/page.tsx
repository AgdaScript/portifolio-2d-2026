import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <LoadingScreen>
      <main>
        <Hero
          media={{
            src: "/videos/hero-agda.mp4",
            width: 1920,
            height: 1080,
          }}
        />
      </main>
    </LoadingScreen>
  );
}
