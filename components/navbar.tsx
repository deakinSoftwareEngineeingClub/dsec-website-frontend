"use client";

import { useViewTransition } from "@/hooks/useViewTransition";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

//todo: needs to be cleaned up

const Navbar = () => {
	const { navigateWithTransition } = useViewTransition();

	return (
		<header className="flex justify-center">
			<nav className="flex items-center justify-between max-w-7xl py-4 w-full px-4">
				<div>
					<img src="logo.png" alt="DSEC logo" className="h-12" />
				</div>

				<div className="bg-linear-to-b from-background to-card border-2 border-border rounded-full px-4 py-3">
					<ul className="flex">
						<li>
							<a href="/home" className="nav-link">
								Home
							</a>
						</li>
						<li>
							<a
								href="/about"
								onClick={(e) => {
									e.preventDefault();
									navigateWithTransition("/about");
								}}
								className="nav-link"
							>
								About
							</a>
						</li>
						<li>
							<a href="/work-with-us" className="nav-link">
								Work With Us
							</a>
						</li>
						<li>
							<a href="/events" className="nav-link">
								Events
							</a>
						</li>
						<li>
							<a href="/projects" className="nav-link">
								Projects
							</a>
						</li>
					</ul>
				</div>

				<div className="flex items-center gap-4">
					<AnimatedThemeToggler duration={600} />
					<a
						href="/join-us"
						className="px-4 py-2 bg-primary text-background rounded-full"
					>
						Join Us
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
