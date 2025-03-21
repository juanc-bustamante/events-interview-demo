import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1c1c1e',
    background: '#f0f0f0',
    white: '#ffffff',
    gray: '#666666',
    lightGray: '#e0e0e0',
    darkGray: '#333333',
  },
  fonts: {
    main: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default theme;