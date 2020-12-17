import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-credit-cards/es/styles-compiled.css";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Elegant Mens Wear</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap"
          rel="stylesheet"
        />
 
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <main className="main-wrapper">{children}</main>
      
    </div>
  );
}
