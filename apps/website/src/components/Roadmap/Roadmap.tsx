import React, { Children, HTMLProps, isValidElement } from 'react'
import RoadmapItemWrapper from './RoadmapItemWrapper'

interface RoadmapProps extends HTMLProps<HTMLDivElement> {}

export default function Roadmap({ children }: RoadmapProps) {
    const baseDelay = 200 // Adjust base delay for sequential animation
    const firstItemDelay = 250 // Small delay for the first item

    return (
        <div>
            {Children.map(children, (child, i) => {
                if (!isValidElement(child)) return null

                const { achieved } = child.props

                return (
                    <RoadmapItemWrapper
                        key={i}
                        child={child}
                        index={i}
                        baseDelay={baseDelay}
                        firstItemDelay={firstItemDelay}
                        achieved={achieved}
                    />
                )
            })}
        </div>
    )
}
