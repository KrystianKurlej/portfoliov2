import {Inter} from "next/font/google";
import "@css/globals.css";
import {TopNav} from "@ui/Navigation";
import Footer from "@ui/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Krystian Kurlej",
	description: "Portfolio",
};

export default function RootLayout({children}) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<TopNav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
