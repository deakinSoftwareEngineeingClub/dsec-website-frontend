import PixelBlast from "@/components/home/hero/PixelBlast"
import GradientText from "@/components/ui/gradientText";
import Button from "@/components/button";

export default function Hero() {
    return (
        <section className={"h-screen w-full flex flex-col justify-center items-start relative"}>
            <div className={"flex flex-col relative pointer-events-none h-full justify-around max-h-[50vh] sm:max-h-[60vh]"}>
                <div className={"flex flex-col "}>
                    <GradientText className={"text-sm md:text-base font-semibold font-cta"}>JOIN US OR T1 STALL</GradientText>
                    <h1 className={"text-4xl sm:5xl md:text-6xl lg:text-8xl max-w-[80vw]"}>Deakin's Home for Software Engineers</h1>
                </div>
                <p className={"text-base lg:text-xl max-w-[70vw]"}>
                    Join the Deakin Software Engineering Club at Burwood to design,
                    build, and ship real software with other students.
                </p>
                <div className={"flex gap-4"}>
                    <Button type={"primary"}>Join Now</Button>
                    <Button  type={"outline"}>Learn More</Button>
                </div>
            </div>
        </section>
    );
}