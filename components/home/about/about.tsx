import GradientText from "@/components/ui/gradientText";
import Button from "@/components/button";
import SellingPoint from "@/components/home/about/sellingPoint";

export default function About() {
    return (
        <section className={"h-screen w-full flex flex-col justify-center relative py-32"}>
            <div className={"flex flex-col relative pointer-events-none h-full justify-around max-h-[70vh] "}>
                <div className={"flex flex-col"}>
                    <GradientText className={"text-sm md:text-base font-semibold font-cta"}>WHY DSEC EXISTS</GradientText>
                    <h1 className={"text-3xl lg:text-7xl"}>More Than a Regular Coding Club</h1>
                </div>
                <p className={"text-base lg:text-xl sm:max-w-[60vw]"}>
                    The Deakin Software Engineering Club is the official home for students who want to turn
                    lectures into real software experience.
                </p>
                <div className={"grid grid-cols-2 gap-8 md:gap-16 sm:max-w-[60vw]"}>
                    <SellingPoint
                        className={"col-span-1"}
                        num={"01"}
                        forWho={"For Students"}
                        body={`Build portfolio ready software in project teams, not just solo assignments.`}
                    />
                    <SellingPoint
                        className={"col-span-1"}
                        num={"02"}
                        forWho={"For Industry"}
                        body={`Meet motivated Deakin students who are already working in project teams.`}
                    />
                </div>
                <div className={"mt-2"}>
                    <Button type={"accent2"}>Become a Partner</Button>
                </div>
{/*                <div className={"absolute right-10 bottom-36"}>
                    <CircularText
                        text="DEAKIN &middot; SOFTWARE &middot; ENGINEERING &middot; CLUB &middot; "
                        onHover="pause"
                        spinDuration={20}
                        className="custom-class"
                    />
                </div>*/}
            </div>
        </section>
    )
}