export function cons(a: number, b: number) {

    function pair(f: (a: number, b: number) => number): number {
        return f(a, b);
    }

    return pair;
}

export function car(pair: (f: (a: number, b: number) => number) => number): number {
    return pair((a: number) => a);
}
export function cdr(pair: (f: (a: number, b: number) => number) => number): number {
    return pair((_: number, b: number) => b);
}
