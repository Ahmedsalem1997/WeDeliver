import Navbar from "../layout/Navbar";

const HeroSection = () => {
    return (
        <div className="bg-hero py-6">
            <Navbar />
            <div className="container mx-auto my-16 mt-32">
                <div class="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
                    <p
                        className="text-white text-xl font-bold text-center lg:text-4xl lg:text-left leading-10"
                    >
                        Get behind the wheel and <br /> boost your income
                    </p>
                    <p className="text-gray-300 text-bold">
                        Join our growing fleet and enjoy the easiest way to be financially  <br /> independent with a path to vehicle ownership at same time.
                    </p>
                    <button className="p-4 w-56 text-sm font-semibold text-white bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
                        Start Earning Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;