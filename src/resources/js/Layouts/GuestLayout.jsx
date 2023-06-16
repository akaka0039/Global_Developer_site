import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import backgroundImage from "/public/images/top_background.jpg";

export default function Guest({ children }) {
    const guestStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    return (
        <div className="min-h-screen" style={guestStyle}>
            <Header />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white bg-opacity-75 shadow">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
