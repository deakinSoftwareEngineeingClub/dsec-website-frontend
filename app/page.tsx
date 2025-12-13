import Hero from "@/components/home/hero/hero";
import About from "@/components/home/about/about";

export default function Home() {
    return (
        <div className={"flex flex-col"}>
            {/* TODO: uncomment this: <PreLoader />*/}
            <Hero />
            <About />
        </div>
    );
}
