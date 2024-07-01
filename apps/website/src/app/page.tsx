import ProductCard from "@/components/ProductCard/ProductCard";
import { Anchor, SectionContainer } from "@lilypad/shared-components";

export default function Home() {
	return (
		<main className=" ">
			<SectionContainer>
				<div className=" py-uui-9xl">
					<div className="text-center mx-auto mb-uui-7xl">
						<h5 className="text-uui-text-brand-secondary-700 font-semibold antialiased uui-text-md">
							Innovate. Build. Compute.
						</h5>
						<h2 className="text-uui-text-primary-900 pb-uui-2xl pt-uui-lg uui-display-md font-semibold">
							Use the LilyPad network
						</h2>
						<span className="text-uui-text-tertiary-600 uui-text-xl font-regular">
							We offer three paths of interaction with LilyPad.
						</span>
					</div>
					<div className="flex flex-col md:flex-row space-y-uui-4xl md:space-y-uui-none md:space-x-uui-4xl">
						<ProductCard
							header="Marketplace"
							title="Monetize your GPU - turn power into
										profit"
							subtitle="Small text about. Lorem ipsum dolor sit
										amet, consectetur adipiscing elit. Sed
										do eiusmod tempor incididunt ut labore
										et dolore"
						>
							<Anchor
								color="color"
								destructive={false}
								hierarchy="primary"
								size="xl"
								href="/marketplace"
								target="_blank"
							>
								Learn more
							</Anchor>
						</ProductCard>
						<ProductCard
							header="Compute as a service"
							title="Run compute jobs"
							subtitle="Small text about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore "
						>
							<Anchor
								color="color"
								destructive={false}
								hierarchy="primary"
								size="xl"
								href="/marketplace"
								target="_blank"
							>
								Learn more
							</Anchor>
						</ProductCard>
						<ProductCard
							header="Module marketplace"
							title="Build AI."
							subtitle="Small text about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore "
						>
							<Anchor
								color="color"
								destructive={false}
								hierarchy="primary"
								size="xl"
								href="/marketplace"
								target="_blank"
							>
								Learn more
							</Anchor>
						</ProductCard>
					</div>
				</div>
			</SectionContainer>
		</main>
	);
}
