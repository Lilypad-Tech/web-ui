// file generated by the Paraglide-Next init command
import { createI18n } from '@inlang/paraglide-js-adapter-next'
import type { AvailableLanguageTag } from '@/paraglide/runtime'

export const {
    Link,
    middleware,
    useRouter,
    usePathname,
    redirect,
    permanentRedirect,
    localizePath,
} = createI18n<AvailableLanguageTag>()
