import {
    CSSProperties,
    Dispatch,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
} from 'react'
import { SectionContainer } from '@lilypad/shared-components'
import rocket01 from 'rocket-01.svg'
import { twMerge } from 'tailwind-merge'

export default function CustomAlert({
    text,
    supportingText,
    reactivity,
    actions,
}: PropsWithChildren<{
    text: ReactNode
    supportingText: ReactNode
    reactivity: {
        isOpen: boolean
        setIsOpen: Dispatch<SetStateAction<boolean>>
    }
    actions: ReactNode
}>) {
    return (
        <div
            className={twMerge(
                'bg-uui-brand-500 py-uui-xl uui-desktop:py-uui-lg uui-desktop:relative uui-desktop:border-t-0 uui-desktop:border-b-[1px] border-uui-border-primary fixed bottom-0 w-full border-t-[1px]',
                reactivity.isOpen ? '' : 'hidden'
            )}
        >
            <SectionContainer className="uui-desktop:items-center gap-uui-xl uui-desktop:flex-row flex flex-col">
                <span className="w-uui-2xl h-uui-2xl uui-desktop:block relative hidden">
                    <span className="border-uui-fg-white absolute left-1/2 top-1/2 h-[1.75rem] w-[1.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-30" />
                    <span className="border-uui-fg-white absolute left-1/2 top-1/2 h-[2.375rem] w-[2.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-10" />
                    <span
                        style={
                            {
                                '--icon-url': `url(${rocket01})`,
                            } as CSSProperties
                        }
                        className="w-uui-2xl h-uui-2xl bg-uui-fg-white block [mask-image:var(--icon-url)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
                    />
                </span>
                <div className="text-uui-text-primary-900 uui-text-sm uui-desktop:flex-row uui-desktop:gap-uui-sm mr-auto flex flex-col gap-[var(--uui-spacing-0.5)]">
                    <span className="font-semibold">{text}</span>
                    <span className="font-regular">{supportingText}</span>
                </div>
                <div className="gap-uui-lg flex">{actions}</div>
            </SectionContainer>
        </div>
    )
}
