import { CustomCSSProperties } from '@/types'
import icon from './help-circle.svg'

export default function TooltipIcon() {
    const spanStyle: CustomCSSProperties = {
        '--icon-url': `url(${icon.src})`,
    }
    return (
        <span
            style={spanStyle}
            className="w-uui-xl h-uui-xl bg-uui-fg-quinary-400 hover:bg-uui-fg-tertiary-600 [mask-image:var(--icon-url)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
        />
    )
}
