import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const { email, emailType } = body

        if (!email || !emailType) {
            return NextResponse.json(
                { message: 'Email and email type are required' },
                { status: 400 }
            )
        }

        const response = await fetch(
            'https://updates.lilypad.tech/members/api/send-magic-link/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, emailType }),
            }
        )

        if (response.status === 201) {
            return NextResponse.json(
                { message: 'Email successfully sent!' },
                { status: 201 }
            )
        } else if (response.status === 429) {
            return NextResponse.json(
                {
                    message:
                        'Too many requests. Please wait a few minutes and try again.',
                },
                { status: 429 }
            )
        } else {
            const errorData = await response.json()
            const errorMessage =
                errorData.errors?.[0]?.message ||
                'Mail failed. Please try again later.'
            return NextResponse.json(
                { message: errorMessage },
                { status: response.status }
            )
        }
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            {
                message:
                    'There was an error while processing your request. Please try again later.',
            },
            { status: 500 }
        )
    }
}
