import Roadmap from "./Roadmap";
import RoadmapItem from "./RoadmapItem";

export default function RoadmapFull() {
	return(
		<Roadmap>
			<RoadmapItem
				achieved={true}
				header="Q3-Q4 2023"
				subtitle="The journey began with the launch of Lilypad v2 Aurora Testnet, a beacon of innovation in the decentralized computing ecosystem. Anyone could contribute their compute power to the network, fueled by ETH and the LP utility token. This early iteration, written in Go, featured modules for Filecoin data preparation, Stable Diffusion, LLM inference, and more. It was the first step towards a truly accessible and powerful compute network."
				title=" Launched Lilypad v2 Aurora Testnet"
			/>

			<RoadmapItem
				achieved={true}
				header="Q1 2024"
				subtitle="With the Aurora Testnet illuminating the path forward, the Lilypad Calibration Net Program emerged. Developers and infrastructure providers joined forces, contributing their machines to stress-test the core network functions. Job scheduling, resource allocation, and data routing were tested, paving the way for a robust and reliable platform."
				title="Launch Lilypad Calibration Net Program for Compute Providers"
			/>
			<RoadmapItem
				achieved={true}
				header="Q2-Q3 2024"
				subtitle="The Incentivized Testnet, affectionately dubbed 'IncentiveNet', took center stage. This phase has engaged the community, rewarding compute providers, module developers, and security experts for their contributions. Game theory mechanics and application development were explored, laying the groundwork for a thriving and sustainable ecosystem."
				title="Lilypad Incentivized Testnet (running until Mainnet)"
			/>
			<RoadmapItem
				header="Q4 2024"
				subtitle="The Lilypad Whitepaper and Tokenomics will be released, providing a detailed roadmap for the future. In partnership with the CryptoEconLab, the Lilypad Research Team will meticulously craft the economic systems that will power Lilypad at Mainnet, ensuring a fair and incentivized environment for all participants."
				title="Whitepaper and tokenomics"
			/>
			<RoadmapItem
				header="Q1 2025"
				subtitle="The focus will shift to empowering developers and users. A comprehensive API, module creation tools, and a full SDK will be forged, enabling seamless integration and a vibrant ecosystem of applications. Partnerships with decentralized storage providers and AI model developers will expand the horizons of possibility. Smart contract audits will commence, ensuring the security and integrity of the platform."
				title="Tooling, audits, integrations and plugins"
			/>
			<RoadmapItem
				header="Q2 2025"
				subtitle="The highly anticipated Lilypad Mainnet launch, accompanied by the Lilypad Token. Compute providers will be rewarded for their contributions, fueling the network's growth. The Module Marketplace will open its doors, offering a curated selection of AI models and programs, accessible to all. The vision of a truly decentralized and accessible compute network will become a reality."
				title="Launch Lilypad Mainnet and Lilypad token plus Module Marketplace"
			/>
			<RoadmapItem
				header="Q3-Q4 2025"
				subtitle="With Lilypad on Mainnet, efforts will be focused on supporting the growing community and expanding the Module Marketplace. A diverse range of GPUs and developer tools will fuel innovation, positioning Lilypad for explosive growth and solidifying its place as a leader in the decentralized computing revolution."
				title="Support Mainnet and grow Lilypad Module Marketplace"
			/>
		</Roadmap>
	)
} 