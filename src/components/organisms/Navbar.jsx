import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Logo from "../atoms/Logo"
import ThemeToggle from "../atoms/ThemeToggle"
import { Button } from "../ui/button"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"

const Navbar = () => {
	return (
		<header className="flex w-full">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-2">
				<div className="flex w-fit">
					<Logo />
				</div>
				<div className="hidden flex-1 md:flex">
					<ul className="mx-auto flex w-fit gap-4">
						{LinkList.map(list => (
							<li
								key={list.id}
								className="w-fit"
							>
								<Button
									variant="ghost"
									asChild
								>
									<Link
										href={list.link}
										className="px-4 py-1.5"
									>
										{list.label}
									</Link>
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div className="flex w-fit gap-4">
					<div className="flex w-fit">
						<ThemeToggle />
					</div>
					<div className="flex md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="outline"
									size="icon"
								>
									<HamburgerMenuIcon />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>
										<Logo />
									</SheetTitle>
								</SheetHeader>
								<div className="flex w-full p-4">
									<ul className="flex w-full flex-col gap-4">
										{LinkList.map(list => (
											<li
												key={list.id}
												className="w-full"
											>
												<Button
													variant="ghost"
													asChild
													className="flex w-full justify-start"
												>
													<Link
														href={list.link}
														className="flex w-full px-4 py-1.5"
													>
														{list.label}
													</Link>
												</Button>
											</li>
										))}
									</ul>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar

const LinkList = [
	{
		id: 1,
		link: "/components",
		label: "Components",
	},
	{
		id: 2,
		link: "/blogs",
		label: "Blogs",
	},
	{
		id: 3,
		link: "/contact",
		label: "Contact",
	},
]
