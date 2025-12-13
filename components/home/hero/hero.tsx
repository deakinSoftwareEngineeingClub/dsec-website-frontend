import PixelBlast from "@/components/home/hero/PixelBlast"
import GradientText from "@/components/ui/gradientText";
import Button from "@/components/button";

export default function Hero() {
    return (
        <section className={"h-screen max-h-[900px] relative"}>


            <div className={"h-full w-full flex flex-col justify-start relative z-20 pointer-events-none overflow-hidden"}>

                {/*background section*/}

                <div className={"fixed left-0 w-full h-full -z-10 pointer-events-auto"}>
                    <PixelBlast
                        variant="circle" // can be square, circle, diamond, triangle
                        pixelSize={6}
                        color="#D63384" // colour of pixels
                        patternScale={3}
                        patternDensity={0.6}
                        pixelSizeJitter={0.5}

                        enableRipples // the click interactivity
                        rippleSpeed={0.4}
                        rippleThickness={0.12}
                        rippleIntensityScale={1.5}

                        // todo: breaks if these props are removed pls customise component to remove any "liquid behaviour"
                        liquid
                        liquidStrength={0}
                        liquidRadius={0}
                        liquidWobbleSpeed={0}

                        speed={0.6}
                        edgeFade={0.25}
                        transparent
                        className={undefined}
                        style={undefined}
                    />
                </div>

                {/*content section*/}

                <div className={"flex flex-col gap-4 lg:gap-8 max-w-[1300px] pt-[24px] md:pt-[48px] lg:pt-[160px]"}>
                    <div className={"flex flex-col"}>
                        <GradientText text={"JOIN US FOR T1 STALL"} className={"text-sm md:text-base font-semibold font-cta"} />
                        {/*<p className={"font-semibold text-sm font-cta"}>JOIN US FOR T1 STALL</p>*/}
                        <h1 className={"text-4xl md:text-6xl lg:text-9xl"}>Deakin's Home for Software Engineers</h1>
                    </div>
                    <p className={"text-xs sm:text-base lg:text-xl max-w-[1200px]"}>Join the Deakin Software Engineering Club at Burwood to design,
                        build, and ship real software with other students. Learn modern
                        tools, work in agile teams, and leave uni with a portfolio that
                        gets you noticed by recruiters.</p>
                    <div>
                    <div className={"flex gap-4"}>
                        <Button className={"text-sm h-[20px] md:h-[30px] lg:text-base lg:h-[40px]"} type={"primary"}>Join Now</Button>
                        <Button className={"text-sm h-[20px] md:h-[30px] lg:text-base lg:h-[40px]"} type={"outline"}>Learn More</Button>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}