import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const SingleVehicle = () => {
    
    const [singleVehicle, setSingleVehicle] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`https://fintech.services.wedeliverapp.com/api/v1/vehicle/${params.id}`)
            .then(response => response.json())
            .then(data => setSingleVehicle(data))
    })
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <div className="container px-24 py-10 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-10 justify-between">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            {singleVehicle?.manufacturer_model?.manufacturer?.manufacturer_name_en} {singleVehicle?.manufacturer_model?.manufacturer_model_name_en}
                        </h1>
                        <button className="p-4 w-56 text-sm font-semibold mx-auto lg:mx-0 text-white bg-mainOrange rounded border-2 border-none md:text-base">
                            Drive To Own
                        </button>
                    </div>
                    <div className="mx-auto flex gap-x-2">
                        <div className="flex flex-col w-1/4 gap-y-2">
                            {singleVehicle?.images?.map((image) => (
                                <div key={image?.id}>
                                    <img alt="gallery" className="w-full object-cover h-full object-center block" src={image?.url} />
                                </div>
                            ))}
                            
                        </div>
                        <div className="flex flex-wrap w-3/4">
                            <div className="w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={singleVehicle?.main_image?.url} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default SingleVehicle;