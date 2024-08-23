import { FadeText } from "../atoms/FadeText"
import ShadowText from "../atoms/ShadowText"
import { Button } from "../ui/button"

const Hero = () => {
	return (
		<div className="relative flex h-full w-full overflow-y-clip">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-14">
				<div className="flex h-fit w-full flex-col items-center justify-center gap-4">
					<h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl xl:text-8xl">
						<FadeText
							className={"space-x-2"}
							direction="up"
							framerProps={{
								show: { transition: { delay: 0.2 } },
							}}
						>
							<ShadowText className="from-orange-400 dark:from-orange-400">
								Vampire UI
							</ShadowText>
							<ShadowText>Elevate Your Web Design</ShadowText>
						</FadeText>
					</h1>
				</div>
				<div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-6 text-center">
					<FadeText
						className="text-center text-base md:text-lg"
						direction="up"
						framerProps={{
							show: { transition: { delay: 0.3 } },
						}}
					>
						Transform your projects with our sleek, customizable UI
						components. Designed for effortless integration and
						stunning visuals.
					</FadeText>
					<FadeText
						className="text-xl md:text-2xl lg:text-3xl"
						direction="up"
						framerProps={{
							show: { transition: { delay: 0.4 } },
						}}
					>
						<ShadowText>Start Building with Vampire UI</ShadowText>
					</FadeText>
				</div>
				<FadeText
					className="text-xl md:text-2xl lg:text-3xl"
					direction="up"
					framerProps={{
						show: { transition: { delay: 0.5 } },
					}}
				>
					<div className="grid w-fit grid-cols-2 gap-4">
						<Button className="relative">Explore Components</Button>
						<Button variant="outline">Explore Components</Button>
					</div>
				</FadeText>
			</div>
		</div>
	)
}

export default Hero
