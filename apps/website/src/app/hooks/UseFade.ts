import { useSpring } from '@react-spring/web'

function useFade(config = { duration: 500 }) {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config,
    })

    return fade
}

export default useFade
