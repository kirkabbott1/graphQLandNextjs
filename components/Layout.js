import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className="bg-Zbackground w-full h-full bg-left-top bg-cover">
      <Head>
        <title>Kirk Abbott</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,500&display=swap');
        </style>
        <script src="https://kit.fontawesome.com/b62258abbb.js" crossorigin="anonymous"></script>
      </Head>
      <Header />
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
