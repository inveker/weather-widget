import {status,json} from "@/utils/fetch";
import {GeoLocation} from "@/api/ipGeoLocation/types";

const API_KEY = '51a20da583f34e38ae7584ae03d55dd7';

export function getIpInfo(): Promise<GeoLocation> {
    return fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`)
        .then(status)
        .then(json)
}