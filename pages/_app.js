import Head from "next/head";
import Navbar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#048fff" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#121212" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<Navbar />
			<div className="ml-8 mr-8 sm:ml-16 sm:mr-16 mt-16">
				<div className="max-w-screen-2xl m-auto">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}

export default MyApp;
