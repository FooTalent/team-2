export interface ButtonActionI {
    titleButton: string
    action: () => void
    colorsForButton: string[]
}

export interface AuthI {
    mod: 'register' | 'login'
}