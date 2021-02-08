
export function dewPoint(t: number, rh: number) {
    const a = 17.27;
    const b = 237.7;
    const f = a * t / (b + t) + Math.log(rh / 100)
    const res = b * f / (a - f);
    return res.toFixed(0);
}


const compassSector = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

export function windDirectionAbbreviation(deg: number) {
    const sector: number = Math.ceil(deg / 22.5);
    return compassSector[sector];
}