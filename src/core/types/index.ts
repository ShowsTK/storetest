export interface iProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export enum supportedThemes {
  light = 'light',
  dark = 'dark',
}

export type ThemeType = supportedThemes.light | supportedThemes.dark

export type Theme = keyof typeof supportedThemes

/*
interface iCategories {

}*/
