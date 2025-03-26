import React from 'react'

export const LoadingIcon = () => {
    return (
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-gray-600 bg-[#181c21] shadow-md ring-0 ring-offset-0">
            <img
                src="/loading-icon.svg"
                className="h-6 w-6 animate-spin invert filter"
                alt="Loading Icon"
            />
        </div>
    )
}
