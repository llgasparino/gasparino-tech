import '../styles/global.css'; // Importando o CSS global
import '../styles/Home.module.css'; // Se quiser manter o Home.module.css para estilos locais

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
