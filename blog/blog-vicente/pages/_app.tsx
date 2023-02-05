import "normalize-css/normalize.css";
import { Raleway } from "@next/font/google";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSun } from "@fortawesome/free-solid-svg-icons";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <div className="wrapper">
        <header>
          <div className="tools">
            <button className="btn-theme">
            <FontAwesomeIcon icon={faSun} />
            </button>
            <div className="search">
              <input type="text" />
              <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </header>
        <nav>
          <div className="logo">Olá, eu sou o Vicente.</div>
          <img
            className="avatar"
            src="https://pps.whatsapp.net/v/t61.24694-24/322210519_3394370600814906_7383493973695114102_n.jpg?ccb=11-4&oh=01_AdSysqbJakeitjyVwsREsvG_VnqTyld_1p2iBxVaZ7ANlw&oe=63E612FB"
          />
        </nav>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
