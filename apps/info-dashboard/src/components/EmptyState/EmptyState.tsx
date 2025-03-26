import { PropsWithChildren, type ReactNode } from 'react'

export default function EmptyState({
    children,
    header,
    description,
}: PropsWithChildren<{
    header: string
    description: ReactNode
}>) {
    return (
        <div className="space-y-uui-lg flex h-[70vh] w-full flex-col items-center justify-center">
            <div className="max-w-uui-width-xxs px-uui-xs md:max-w-uui-width-xs flex h-full flex-col items-center justify-center">
                {children}
                <span className="mt-uui-md text-uui-text-md text-uui-text-primary-900 text-center font-semibold">
                    {header}
                </span>
                <span className="text-uui-text-sm font-regular text-uui-text-tertiary-600 text-center">
                    {description}
                </span>
            </div>
        </div>
    )
}
