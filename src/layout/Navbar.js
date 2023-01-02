import Logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="container relative mx-auto">
            <div className="flex items-center justify-between my-6">
                <div className="z-30">
                    <img src={Logo} alt="WeDeliver" id="logo" className="w-32"/>
                </div>

                <div
                    className="hidden items-center space-x-10 font-semibold text-grayishBlue md:flex"
                >
                    <a href="#features" className="hover:text-white"
                    >Home</a
                    >
                    <a href="#download" className="hover:text-white"
                    >Captains</a
                    >
                    <a href="#faq" className="hover:text-white">Enterprise</a>

                    <a href="#imp" className="hover:text-white">Impact</a>
                </div>
                <button
                    id="menu-btnp"
                    className="z-30 block md:hidden focus:outline-none hamburger"
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div
                id="menu"
                className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
            >
                <div className="w-full py-3 text-center">
                    <a href="#features" className="block hover:text-mainOrange">Features</a>
                </div>
                <div className="w-full py-3 text-center">
                    <a href="#download" className="block hover:text-mainOrange">Download</a>
                </div>
                <div className="w-full py-3 text-center">
                    <a href="#faq" className="block hover:text-mainOrange">FAQ</a>
                </div>
                <div className="w-full py-3 text-center">
                    <a href="#salem" className="block hover:text-mainOrange">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
