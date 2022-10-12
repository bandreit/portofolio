import css from "styled-jsx/css";

export default css.global`
  :root {
    --max-width-content: 1600px;

    --color-white: #FFF;

    --color-primary-light: #ff4d00;
    --color-primary: #cf3e00;
    --color-primary-dark: #832801;

    --color-primary-100: #f4ecff;
    --color-primary-800: #292841;

    --color-secondary-light: #ffffff;
    --color-secondary: #FFE898;
    --color-secondary-dark: #cdd6e6;

    --color-tertiary-light: #e4b443;
    --color-tertiary: #ffbe3d;
    --color-tertiary-dark: #ffad0a;

    --color-dark-light: #3e3d5f;
    --color-dark: #2a2940;
    --color-dark-dark: #12101a;

    --color-danger-light: #ff8fa0;
    --color-danger: #ff5c75;
    --color-danger-dark: #ff294a;

    --color-gradient-primary: linear-gradient(#4f46db 0%, #7871e3 100%);
    --color-gradient-secondary: linear-gradient(#eff2f7 0%, #eff0f7 100%);
    --color-gradient-tertiary: linear-gradient(#ffbe3d 0%, #fff83d 100%);
    --color-gradient-dark: linear-gradient(#273444 0%, #272b44 100%);
    --color-gradient-success: linear-gradient(#2dca8c 0%, #2dcabb 100%);
    --color-gradient-danger: linear-gradient(#ff5c75 0%, #ff745c 100%);
    --color-gradient-info: linear-gradient(#50b5ff 0%, #5081ff 100%);

    --color-gray: #fcfdfe;
    --color-gray-100: #fafbfe;
    --color-gray-200: #eff2f7;
    --color-gray-300: #e5e9f2;
    --color-gray-400: #e0e6ed;
    --color-gray-500: #d3dce6;
    --color-gray-600: #c0ccda;
    --color-gray-700: #a3a3a3;
    --color-gray-800: #8b8b8b;

    --box-shadow-100: 0 20px 32px -8px #ebf2ff, 0 0 1px 0 #a8b9d5;
    --box-shadow-200: 0 10px 30px 0 rgba(37, 48, 51, 0.06);
    --box-shadow-300: 0 0 10px 1px rgba(37, 48, 51, 0.1);

    --border-radius-thin: 1.5px;
    --border-radius: 3px;
    --border-radius-thick: 6px;

    --transition: 0.2s;

    --font-sans: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

    --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

    --font-enabled-features: "tnum", "cvXX";
  }

  body {
    margin: 0;
    padding: 0;
    color: var(--color-dark);
    background: var(--color-gray);
    font-family: var(--font-sans);
    font-feature-settings: var(--font-enabled-features);
  }
`;