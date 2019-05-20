export function cons<A, B, C>(a: A, b: B) {

    function pair(f: (a: A, b: B) => C): C {
        return f(a, b);
    }

    return pair;
}

export function car<A, B>(pair: (f: (a: A, b: B) => A) => A): A {
    return pair((a: A) => a);
}
export function cdr<A, B>(pair: (f: (a: A, b: B) => B) => B): B {
    return pair((_: A, b: B) => b);
}
