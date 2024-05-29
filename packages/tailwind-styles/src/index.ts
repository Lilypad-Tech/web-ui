import { getPreset } from "@frontline-hq/uui-tailwind";

export const preset: ReturnType<typeof getPreset> = getPreset({
	foundations: {
		color: {
			colorModes: {
				root: {
					darkModes: {
						"bg-background-section": "var(--color-uui-brand-400)",
						"border-primary": "var(--color-uui-brand-700)",
						"border-secondary": "var(--color-uui-brand-800)",
						"border-tertiary": "var(--color-uui-brand-800)",
						"fg-quaternary-500": "var(--color-uui-brand-300)",
						"fg-quarterary-500": "var(--color-uui-brand-300)",
						"fg-quinary-400": "var(--color-uui-brand-400)",
						"text-brand-secondary-700":
							"var(--color-uui-brand-300)",
						"text-placeholder": "var(--color-uui-brand-600)",
						"text-primary-900": "var(--color-uui-brand-50)",
						"text-primary_on-brand": "var(--color-uui-base-white)",
						"text-quaternary-500": "var(--color-uui-brand-400)",
						"text-quarterary-500": "var(--color-uui-brand-400)",
						"text-secondary-700": "var(--color-uui-brand-100)",
						"text-secondary_hover": "var(--color-uui-brand-50)",
						"text-secondary_on-brand":
							"var(--color-uui-base-white)",
						"text-tertiary-600": "var(--color-uui-brand-200)",
						"button-primary-bg": "var(--color-uui-brand-50)",
						"button-primary-border": "var(--color-uui-brand-600)",
						"button-primary-border_hover":
							"var(--color-uui-brand-700)",
						"button-primary-fg": "var(--color-uui-brand-900)",
						"button-secondary-color-border":
							"var(--color-uui-brand-100)",
						"button-secondary-color-fg":
							"var(--color-uui-brand-100)",
						"button-tertiary-fg": "var(--color-uui-brand-100)",
					},
					/* TODO add and fix light modes */
				},
			},
			colors: {
				Brand: {
					"100": "#c8fff5",
					"200": "#b8f4f3",
					"25": "#f0fffc",
					"300": "#66e1de",
					"400": "#14c7c3",
					"50": "#E0FFF9",
					"500": "#12b0ad",
					"600": "#0f9491",
					"700": "#0c7471",
					"800": "#095856",
					"900": "#074140",
					"950": "#0f172a",
				},
				"Gray dark mode": {
					"100": "#edeff2",
					"200": "#eaedf0",
					"25": "#f9fafb",
					"300": "#cad0d8",
					"400": "#8997a9",
					"50": "#f3f5f6",
					"500": "#77889c",
					"600": "#566476",
					"700": "#38414d",
					"800": "#272d35",
					"900": "#1c2126",
					"950": "#181c21",
				},
			},
		},
	},
});
