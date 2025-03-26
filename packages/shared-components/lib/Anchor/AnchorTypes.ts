export type AnchorDestructive = boolean

export type AnchorColor = 'color' | 'gray'

export type AnchorHierarchy = 'primary' | 'secondary'

export type AnchorSize = 'md' | 'xl' | '2xl'

export type AnchorIcon =
    | { type: 'icon'; leading: string; trailing?: never }
    | { type: 'icon'; trailing: string; leading?: never }

export type Coloring = {
    [D in `${AnchorDestructive}`]: {
        [H in AnchorHierarchy]: {
            color: string[]
            gray: string[]
        }
    }
}
