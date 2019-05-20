export function cons<T>(a: T, b: T) {

    function pair(f: (a: T, b: T) => T): T {
        return f(a, b);
    }

    return pair;
}

export function car<T>(pair: (f: (a: T, b: T) => T) => T): T {
    return pair((a: T) => a);
}
export function cdr<T>(pair: (f: (a: T, b: T) => T) => T): T {
    return pair((_: T, b: T) => b);
}
