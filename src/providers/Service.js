import {GET , POST} from "../HttpClient";

export const getCountries = async () => {
    let res;

    try {
        let response = await (await GET(`https://fintech.services.wedeliverapp.com/api/v1/countries/`)).data ;
        res = response;

    } catch (err) {
        let error = err;
        res.httpError = error;
    }

    return res;
};


export const getCities = async (countryId) => {
    let res;

    try {
        let response = await (await GET(`https://fintech.services.wedeliverapp.com/api/v1/cities/${countryId}`)).data ;
        res = response;

    } catch (err) {
        let error = err;
        res.httpError = error;
    }

    return res;
};


export const getVehiclesResponse = async (countryId, cityId) => {
    let res
    let data = {
        filters: {},
        page: null,
        per_page: null,
        order_by: "asc",
    }
    try {
        let response = await (await POST(`https://fintech.services.wedeliverapp.com/api/v1/public/vehicles`, data)).data;
        res = response
    } catch (err) {
        let error = err ;
        res.httpError = error;
    }
    return res;
};

export const getSingleVehicleData = async (vehicleId) => {
    let res;

    try {
        let response = await (await GET(`https://fintech.services.wedeliverapp.com/api/v1/vehicle/${vehicleId}`)).data ;
        res = response;

    } catch (err) {
        let error = err;
        res.httpError = error;
    }

    return res;
};

