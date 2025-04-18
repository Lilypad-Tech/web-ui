import {
    useFloating,
    useHover,
    useInteractions,
    flip,
    FloatingArrow,
    arrow,
    offset,
    autoPlacement,
} from '@floating-ui/react'
import { CustomCSSProperties } from '@/types'
import icon from './help-circle.svg'
import { PropsWithChildren, useRef, useState } from 'react'

const ARROW_HEIGHT = 7
const GAP = 2

export default function Tooltip({
    text,
    description,
}: PropsWithChildren<{ text: string; description: string }>) {
    const arrowRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const { refs, floatingStyles, context, middlewareData } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            autoPlacement(),
            offset(ARROW_HEIGHT + GAP),
            arrow({
                element: arrowRef,
            }),
        ],
        strategy: 'fixed',
    })
    const hover = useHover(context)

    const { getReferenceProps, getFloatingProps } = useInteractions([hover])

    const spanStyle: CustomCSSProperties = {
        '--icon-url': `url(${icon.src})`,
    }
    return (
        <>
            <span
                style={spanStyle}
                ref={refs.setReference}
                className="w-uui-xl h-uui-xl bg-uui-fg-quinary-400 hover:bg-uui-fg-tertiary-600 [mask-image:var(--icon-url)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
                {...getReferenceProps()}
            />

            {isOpen && (
                <>
                    <div
                        style={floatingStyles}
                        ref={refs.setFloating}
                        {...getFloatingProps()}
                        className="max-w-uui-width-xs p-uui-lg rounded-uui-md border-uui-border-brand border-uui-1 gap-uui-xs bg-uui-bg-secondary z-10 flex flex-col"
                    >
                        <span className="uui-text-xs text-uui-text-primary-900 font-semibold">
                            {text}
                        </span>
                        <span className="uui-text-xs text-uui-text-tertiary-600 whitespace-pre-wrap font-medium">
                            {description}
                        </span>
                        <FloatingArrow
                            className="fill-uui-border-brand"
                            ref={arrowRef}
                            context={context}
                        />
                    </div>
                </>
            )}
        </>
    )
}
