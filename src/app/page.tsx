import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Hero
        title={{
          name: "Agda Lopes",
          role: "Engenharia de software",
        }}
        portrait={{
          src: "/images/agda-lopes-desk.png",
          alt: "Ilustração de Agda Lopes no escritório, com fones de orelha de gato, dois gatos e monitores com código.",
          width: 821,
          height: 576,
        }}
      />
    </main>
  );
}
