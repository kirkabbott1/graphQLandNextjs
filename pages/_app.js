import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-free/css/all.css";
// config.autoAddCss = false;
// import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
