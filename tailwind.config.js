module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'open-sans': 'Open Sans',
            },
            colors: {
                gold: '#FFD700',
                'semi-black': '#292929',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
