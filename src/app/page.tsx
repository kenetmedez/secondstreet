import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

export default function Home() {
  return (
    <section>
      <Navigation />
      <Header
        style="w-full bg-black flex flex-col items-center justify-center h-[100vh]"
        title="Coming Soon"
        description=""
      />
    </section>
  );
}
