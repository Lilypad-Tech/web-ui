import React, { Children, HTMLAttributes, cloneElement } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'

interface RoadmapItemWrapperProps extends HTMLAttributes<HTMLDivElement> {
    child: React.ReactElement
    index: number
    baseDelay: number
    firstItemDelay: number
    achieved: boolean
}

const RoadmapItemWrapper = ({
    children,
    child,
    index,
    baseDelay,
    firstItemDelay,
    achieved,
}: RoadmapItemWrapperProps) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const delay = index === 0 ? firstItemDelay : index * baseDelay

    const iconSpring = useSpring({
        from: { opacity: 1, transform: 'scale(1)' },
        to: {
            backgroundColor: achieved
                ? 'rgba(20,199,195,1)'
                : 'rgba(9,88,86,1)',
            transform: inView ? 'scale(1)' : 'scale(1)',
        },
        config: { mass: 1, tension: 170, friction: 26 },
        delay,
    })

    const lineSpring = useSpring({
        from: { height: '100%', backgroundColor: '#095856' },
        to: {
            height: inView ? '100%' : '0%',
            backgroundColor: achieved ? 'rgba(20,199,195,1)' : '#095856',
        },
        config: { mass: 1, tension: 170, friction: 26 },
        delay,
    })

    return (
        <div ref={ref} className="space-x-uui-xl max-w-uui-width-md flex">
            <div className="relative flex flex-col items-center">
                <animated.div
                    style={iconSpring}
                    className={`${
                        index === 0 ? 'translate-y-uui-xl' : ''
                    } absolute z-10 h-[1rem] w-[1rem] rounded-full lg:h-[1.25rem] lg:w-[1.25rem]`}
                >
                    <Image
                        fill
                        src={
                            achieved
                                ? '/lilypad-roadmap-icon-finished.svg'
                                : '/lilypad-roadmap-icon-in-progress.svg'
                        }
                        alt="Roadmap icon"
                        className={`top-0 h-full w-full rounded-full ${
                            achieved
                                ? 'shadow-[2px_2px_10px_0px_rgba(20,199,195,0.4)]'
                                : ''
                        }`}
                    />
                </animated.div>
                {index === Children.count(children) - 1 ? null : (
                    <div className="relative h-full w-[0.09375rem] flex-grow">
                        <animated.div
                            style={lineSpring}
                            className="absolute left-0 right-0"
                        />
                    </div>
                )}
            </div>
            <div className={`${index === 0 ? 'py-uui-xl' : 'pb-uui-xl'}`}>
                {cloneElement(child, { index, delay: baseDelay, inView })}
            </div>
        </div>
    )
}

export default RoadmapItemWrapper
