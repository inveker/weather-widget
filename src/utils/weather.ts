export function dewPoint(t: number, rh: number) {
    const a = 17.27;
    const b = 237.7;
    const f = a * t / (b + t) + Math.log(rh / 100)
    const res = b * f / (a - f);
    return res.toFixed(0);
}

enum compassSector {
    N,
    NNE,
    NE,
    ENE,
    E,
    ESE,
    SE,
    SSE,
    S,
    SSW,
    SW,
    WSW,
    W,
    WNW,
    NW,
    NNW
}

export function windDirectionAbbreviation(deg: number) {
    let sector: number = Math.ceil(deg / 22.5);
    if(sector == 16) sector = 0;
    return compassSector[sector];
}