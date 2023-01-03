import Navbar from "../layout/Navbar";

const HeroSection = () => {
    return (
        <div className="bg-hero">
            <Navbar />
            <div className="container mx-auto px-16 hero-backg">
                <div className=" my-16">
                    <div className="flex flex-col lg:mt-16 lg:w-1/2">
                        <h2
                            className="text-white text-xl font-bold text-center lg:text-4xl lg:text-left leading-10"
                        >
                            Get behind the wheel and <br /> boost your income
                        </h2>
                        <p className="text-gray-300 text-bold">
                            Join our growing fleet and enjoy the easiest way to be financially  <br /> independent with a path to vehicle ownership at same time.
                        </p>
                        <button className="p-4 w-56 text-sm font-semibold text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
                            Start Earning Now
                        </button>
                    </div>
                    <div className="flex space-x-10 p-12 lg:mt-4 bg-blurBg bg-blured rounded my-16">
                        <div className="w-1/4">
                            <p
                                className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10"
                            >
                                Work With Multiple Clients
                            </p>
                            <p className="text-gray-400 text-bold">
                                Get paid through one platform
                            </p>
                        </div>
                        <div className="w-1/4">
                            <p
                                className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10"
                            >
                                Access to Vehicle Financing
                            </p>
                            <p className="text-gray-400 text-bold">
                                Fast credit scoring decision within 48 hours
                            </p>
                        </div>
                        <div className="w-1/4">
                            <p
                                className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10"
                            >
                                Easy Repayments
                            </p>
                            <p className="text-gray-400 text-bold">
                                Affordable financial services with path to ownership
                            </p>
                        </div>
                        <div className="w-1/4">
                            <p
                                className="text-white text-lg font-bold text-center lg:text-xl lg:text-left leading-10"
                            >
                                Flexible working hours
                            </p>
                            <p className="text-gray-400 text-bold">
                                Get paid through one platform
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HeroSection;