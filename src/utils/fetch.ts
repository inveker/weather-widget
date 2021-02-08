
export function status(r: Response) {
    return r.ok ? Promise.resolve(r) : Promise.reject(new Error(r.statusText));
}

export function json(r: Response) {
    return r.json();
}