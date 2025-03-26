import { useState } from 'react'
import { Button, InputField } from '@lilypad/shared-components'
import { sendEmail } from '@/utils/sendEmail' // Assuming the utility function exists
import { ToastContainer, toast } from 'react-toastify'

export function NewsletterForm() {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (!email) {
            toast.warning('Please enter a valid email.')
            return
        }

        setLoading(true)
        try {
            const successMessage = await sendEmail(email, 'subscribe')
            toast.success(
                successMessage || 'Successfully subscribed to the newsletter!'
            )
            setEmail('')
        } catch (error: any) {
            toast.error(
                error.message || 'Failed to subscribe. Please try again.'
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mb-uui-xl bg-uui-bg-secondary gap-uui-2xl lg:gap-uui-4xl p-uui-6xl lg:p-uui-7xl flex h-full flex-col items-start justify-start rounded-2xl text-left lg:col-span-2 lg:flex-row">
            <div className="lg:w-1/2">
                <h3 className="text-uui-text-primary-900 mb-uui-xl uui-display-xs md:uui-display-sm font-semibold antialiased">
                    Newsletter
                </h3>
                <div className="text-uui-text-tertiary-600 font-regular text-uui-lg md:uui-text-xl flex flex-col antialiased">
                    <span>
                        Subscribe to the Lilypad newsletter for the latest
                        updates.
                    </span>
                </div>
            </div>
            <form className="space-y-uui-2xl md:space-y-uui-none md:space-x-uui-xl w-full md:flex lg:w-1/2">
                <InputField
                    inputSize="md"
                    destructive={false}
                    placeholder="Enter your e-mail"
                    className="flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                    {{
                        hint: (
                            <span className="">
                                We care about your data. See our{' '}
                                <a
                                    href="/privacy-policy"
                                    target="_blank"
                                    className="underline underline-offset-4"
                                >
                                    privacy policy.
                                </a>
                            </span>
                        ),
                    }}
                </InputField>
                <Button
                    type="submit"
                    color="color"
                    destructive={false}
                    hierarchy="primary"
                    size="md"
                    className="[&&]:h-fit [&&]:rounded-full"
                    onClick={handleSubscribe}
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Subscribe'}
                </Button>
            </form>
            {message && (
                <p className="text-uui-text-primary-800 mt-uui-xl text-sm">
                    {message}
                </p>
            )}
            <ToastContainer />
        </div>
    )
}
