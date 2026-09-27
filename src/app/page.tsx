import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LoadingScreen } from "@/components/loading-screen";

const menu = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Artigos", href: "#artigos" },
];

export default function Home() {
  return (
    <LoadingScreen header={<Header items={menu} />}>
      <main>
        <Hero
          media={{
            src: "/videos/hero-agda.mp4?v=processed",
            width: 1920,
            height: 1080,
          }}
          loop={{
            src: "/videos/typing1.mp4?v=processed",
            width: 1920,
            height: 1080,
          }}
          title={{
            name: "Agda Lopes",
            badge: "Engenheira Informática",
          }}
        />
      </main>
    </LoadingScreen>
  );
}
