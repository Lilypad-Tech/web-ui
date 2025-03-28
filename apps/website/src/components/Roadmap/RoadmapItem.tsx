import React, { HTMLProps } from 'react'
import { useSpring, animated } from '@react-spring/web'

interface RoadmapItemProps extends HTMLProps<HTMLDivElement> {
    header: string
    subtitle: string
    title: string
    achieved?: boolean
    inView?: boolean
}

const RoadmapItem = ({
    header,
    title,
    subtitle,
    achieved = false,
    inView = false,
}: RoadmapItemProps) => {
    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateY(100%)' },
        to: {
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0%)' : 'translateY(100%)',
        },
        config: { mass: 1, tension: 170, friction: 26 },
    })

    return (
        <animated.div
            style={springProps}
            className="space-y-uui-md flex flex-col"
        >
            <p className="uui-text-xs lg:uui-text-sm text-uui-bg-brand-secondary font-semibold antialiased">
                {header}
            </p>
            <h3 className="uui-text-lg lg:uui-text-xl text-uui-text-primary-900 font-semibold antialiased">
                {title}
            </h3>
            <p className="uui-text-sm lg:uui-text-md text-uui-text-tertiary-600 font-regular antialiased">
                {subtitle}
            </p>
        </animated.div>
    )
}

export default RoadmapItem
