const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: 'rgb(187, 195, 208)',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#112833',
    heading: 'rgb(245, 247, 249)',
    text: 'rgb(245, 247, 249)',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
};

export { lightTheme, darkTheme };
