const baseButtonStyle = {
  borderRadius: '5px',
  border: 0,
  padding: '0.5em 1em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

export const theme = {
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    xLarge: '20px',
  },
  buttonVariants: {
    primary: {
      ...baseButtonStyle,
      backgroundColor: '#76b1e2',
      '&:hover': {
        backgroundColor: '#b8dfff',
      },
    },
    secondary: {
      ...baseButtonStyle,
      backgroundColor: '#6dd27d',
      '&:hover': {
        backgroundColor: '#9bf0a9',
      },
    },
  },
  breakpoints: {
    small: '@media (min-width: 30em)',
    medium: '@media (min-width: 40em)',
    large: '@media (min-width: 50em)',
    xLarge: '@media (min-width: 70em)',
  },
};
