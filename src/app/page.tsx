import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

export default function Home() {
  return (
    <section>
      <Navigation />
      <Header heading="Coming Soon" />
      <div className="blog w-full flex flex-col items-center justify-center">
        <div>
          <h1 className="uppercase text-yellow-500 font-spicy py-2 md:text-3xl">
            events
          </h1>
        </div>
        <div className="p-2 flex md:flex-row flex-col w-full gap-2">
          <div className="bg-gray-200 w-full flex h-[200px] rounded items-center justify-center uppercase">
            event 1
          </div>
          <div className="bg-gray-200 w-full flex h-[200px] rounded items-center justify-center uppercase">
            event 2
          </div>
          <div className="bg-gray-200 w-full flex h-[200px] rounded items-center justify-center uppercase">
            event 3
          </div>
        </div>
      </div>
    </section>
  );
}
