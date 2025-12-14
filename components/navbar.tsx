"use client";

import { Menu } from "lucide-react";

import Image from "next/image";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

//todo: add actual animated links
//todo: add proper styling for the links

export default function Navbar() {
	return (
		<div className={"w-full flex bg-background h-20 border-b border-white/20"}>
			<div className="max-w-7xl px-4 md:px-8 lg:px-0 w-full flex items-center justify-between mx-auto">
				{/* //TODO: home link */}
				<Image
					className="md:h-[47.33px] md:w-19"
					width={64.23}
					height={40}
					src="/logo.png"
					alt="DSEC logo"
				/>

				{/*this is shown if the screen is large enough else hidden */}
				<ul className="gap-8 items-center hidden lg:flex w-fit font-sans rounded-2xl">
					<li>Home</li>
					<li>About Us</li>
					<li>Projects</li>
					<li>Events</li>
					<li>Contact Us</li>
				</ul>

				<ul className="gap-8 items-center hidden lg:flex w-fit font-sans rounded-2xl">
					<li className="flex items-center"><AnimatedThemeToggler /></li>
					<li><a href="/join-us" className="bg-primary rounded-full px-4 py-2">Join Now</a></li>
				</ul>

				{/*hamburger for phones / small screens :)*/}
				<Menu className={"lg:hidden cursor-pointer"} size="32" />
			</div>
		</div>
	);
}
