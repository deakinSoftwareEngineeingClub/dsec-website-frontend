import GradientText from "@/components/ui/gradientText";
import Button from "@/components/button";
import SellingPoint from "@/components/home/about/sellingPoint";

export default function About() {
    return (
        <section className={"h-screen max-h-[800px] relative"}>
            <div className={"flex flex-col gap-8 lg:gap-16 max-w-[1300px]"}>
                <div className={"flex flex-col"}>
                    <GradientText className={"text-sm md:text-base font-semibold font-cta"}>WHY DSEC EXISTS</GradientText>
                    <h1 className={"text-4xl lg:text-7xl"}>More Than a Regular Coding Club</h1>
                </div>
                <p className={"text-base lg:text-xl max-w-[1200px]"}>
                    The Deakin Software Engineering Club is the official home for students who want to turn
                    lectures into real software experience. We bring together software engineering, computer
                    science, IT, and design students at the Burwood campus to collaborate on projects, share
                    knowledge, and support each other through uni.
                </p>
                <div className={"grid grid-cols-1 gap-4 lg:grid-cols-2"}>
                    <SellingPoint
                        className={"col-span-1"}
                        num={"01"}
                        forWho={"For Students"}
                        body={`Build portfolio ready software in project teams, not just solo assignments. Learn industry 
                        workflows like Git, code reviews, agile sprints, and CI tools. Join coding nights, technical 
                        workshops, and guest talks with engineers and alumni. Prepare for internships and grad roles with 
                        peer support and practical experience`}
                    />
                    <SellingPoint
                        className={"col-span-1"}
                        num={"02"}
                        forWho={"For Industry & Deakin Staff"}
                        body={`Meet motivated Deakin students who are already working in project teams. Explore 
                        collaboration on hackathons, workshops, and sponsored challenges. Partner with DSEC to share tools, 
                        datasets, or problem statements for student projects. Build a talent pipeline by engaging with 
                        students before they graduate`}
                    />
                </div>
                <div>
                    <Button type={"accent2"}>Become a Partner</Button>
                </div>
            </div>
        </section>
    )
}