import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-Thin.woff2') format('woff2');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-UltraLight.woff2') format('woff2');
      font-weight: 200;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-Light.woff2') format('woff2');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-Medium.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-SemiBold.woff2') format('woff2');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-Bold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-Black.woff2') format('woff2');
      font-weight: 800;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Geist';
      src: url('/public/fonts/Geist-UltraBlack.woff2') format('woff2');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }`}
  />
);

export default Fonts;
