import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
.container {
  width: 85vw;
  margin: auto;
  max-width: 1500px;
}

.section {
  min-height: 100vh;
}

.space {
  display: flex;
}

.space > * + * {
  margin-left: var(--space-sm)
}

.space-md {
  display: flex;
}

.space-md > * + * {
  margin-left: var(--space-md)
}

.flow > * + * {
  margin-top: var(--space-sm)
}

`;

export default GlobalStyles;
