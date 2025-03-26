import { SpringValue, useInView } from '@react-spring/web'
import { RefObject } from 'react'

type FadeInViewReturn = [
    RefObject<HTMLDivElement>, // First element
    {
        opacity: SpringValue<number>
        transform: SpringValue<string>
    }, // Second element
]

function useFadeInView(
    config: {
        mass: number
        tension: number
        friction: number
    } = { mass: 5, tension: 200, friction: 65 }
): FadeInViewReturn {
    const [ref, springs] = useInView(
        () => ({
            from: { opacity: 0, transform: 'translateY(50%)' },
            to: { opacity: 1, transform: 'translateY(0)' },
            config: config,
        }),
        { once: true }
    )

    return [ref, springs]
}

export default useFadeInView
