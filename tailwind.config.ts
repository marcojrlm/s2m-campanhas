import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#235a7d',
                secondary: '#fa968c',
                labs: '#2d7f7b',
                light: '#d3dce6',
                dark: '#101828',
                grayLight: '#FCF7F7',
                gray: '#EAE6E6',
                grayDark: '#474343',
                neutralDark: '#4B5465',
                neutral: '#F7F7F7',
                neutralLight: '#D9D9D9',
                purple: '#9242AE',
                green: '#85D983',
                orange: '#FF7E5F',
                pinkNeutral: '#EAC0C5',
                pinkStrong: '#DFB6C1',
                pinkLight: '#7F3058',
            },
            fontFamily: {
                sans: ['Nunito Sans'],
            },
            fontSize: {
                xs: '8px',
                sm: ['14px', '24px'],
                base: ['16px', '24px'],
                md: ['22px', '22px'],
                lg: ['26px', '38px'],
                xl: ['30px', '38px'],
                head: '48px',
            },
            backgroundImage: {
                backgroundWomens: 'url(/assets/images/womans.png)',
                lgBackgroundWomens: 'url(/assets/images/lgBgWoman.png)',
            },
            borderRadius: {
                'base': '8px',
            },
        },
    },
    plugins: [],
}
export default config
