import Link from "next/link"

const Logo = () => {
	return (
		<Link
			href="/"
			className="flex w-fit gap-2 text-2xl font-bold"
		>
			<span>Vampire</span>
			<span>UI</span>
		</Link>
	)
}

export default Logo
