//// [mappedTypes1.ts]

type Item = { a: string, b: number, c: boolean };

type T00 = { [P in "x" | "y"]: number };
type T01 = { [P in "x" | "y"]: P };
type T02 = { [P in "a" | "b"]: Item[P]; }
type T03 = { [P in keyof Item]: Date };

type T10 = { [P in keyof Item]: Item[P] };
type T11 = { [P in keyof Item]?: Item[P] };
type T12 = { readonly [P in keyof Item]: Item[P] };
type T13 = { readonly [P in keyof Item]?: Item[P] };

type T20 = { [P in keyof Item]: Item[P] | null };
type T21 = { [P in keyof Item]: Array<Item[P]> };

type T30 = { [P in keyof any]: void };
type T31 = { [P in keyof string]: void };
type T32 = { [P in keyof number]: void };
type T33 = { [P in keyof boolean]: void };
type T34 = { [P in keyof undefined]: void };
type T35 = { [P in keyof null]: void };
type T36 = { [P in keyof void]: void };
type T37 = { [P in keyof symbol]: void };
type T38 = { [P in keyof never]: void };

type T40 = { [P in string]: void };
type T41 = { [P in number]: void };
type T42 = { [P in string | number]: void };
type T43 = { [P in "a" | "b" | 0 | 1]: void };
type T44 = { [P in "a" | "b" | "0" | "1"]: void };
type T45 = { [P in "a" | "b" | "0" | "1" | 0 | 1]: void };
type T46 = { [P in number | "a" | "b" | 0 | 1]: void };
type T47 = { [P in string | number | "a" | "b" | 0 | 1]: void };

declare function f1<T1>(): { [P in keyof T1]: void };
declare function f2<T1 extends string>(): { [P in keyof T1]: void };
declare function f3<T1 extends number>(): { [P in keyof T1]: void };

let x1 = f1();
let x2 = f2();
let x3 = f3();

//// [mappedTypes1.js]
var x1 = f1();
var x2 = f2();
var x3 = f3();


//// [mappedTypes1.d.ts]
declare type Item = {
    a: string;
    b: number;
    c: boolean;
};
declare type T00 = {
    [P in "x" | "y"]: number;
};
declare type T01 = {
    [P in "x" | "y"]: P;
};
declare type T02 = {
    [P in "a" | "b"]: Item[P];
};
declare type T03 = {
    [P in keyof Item]: Date;
};
declare type T10 = {
    [P in keyof Item]: Item[P];
};
declare type T11 = {
    [P in keyof Item]?: Item[P];
};
declare type T12 = {
    readonly [P in keyof Item]: Item[P];
};
declare type T13 = {
    readonly [P in keyof Item]?: Item[P];
};
declare type T20 = {
    [P in keyof Item]: Item[P] | null;
};
declare type T21 = {
    [P in keyof Item]: Array<Item[P]>;
};
declare type T30 = {
    [P in keyof any]: void;
};
declare type T31 = {
    [P in keyof string]: void;
};
declare type T32 = {
    [P in keyof number]: void;
};
declare type T33 = {
    [P in keyof boolean]: void;
};
declare type T34 = {
    [P in keyof undefined]: void;
};
declare type T35 = {
    [P in keyof null]: void;
};
declare type T36 = {
    [P in keyof void]: void;
};
declare type T37 = {
    [P in keyof symbol]: void;
};
declare type T38 = {
    [P in keyof never]: void;
};
declare type T40 = {
    [P in string]: void;
};
declare type T41 = {
    [P in number]: void;
};
declare type T42 = {
    [P in string | number]: void;
};
declare type T43 = {
    [P in "a" | "b" | 0 | 1]: void;
};
declare type T44 = {
    [P in "a" | "b" | "0" | "1"]: void;
};
declare type T45 = {
    [P in "a" | "b" | "0" | "1" | 0 | 1]: void;
};
declare type T46 = {
    [P in number | "a" | "b" | 0 | 1]: void;
};
declare type T47 = {
    [P in string | number | "a" | "b" | 0 | 1]: void;
};
declare function f1<T1>(): {
    [P in keyof T1]: void;
};
declare function f2<T1 extends string>(): {
    [P in keyof T1]: void;
};
declare function f3<T1 extends number>(): {
    [P in keyof T1]: void;
};
declare let x1: {};
declare let x2: {
    [x: number]: void;
    toString: void;
    charAt: void;
    charCodeAt: void;
    concat: void;
    indexOf: void;
    lastIndexOf: void;
    localeCompare: void;
    match: void;
    replace: void;
    search: void;
    slice: void;
    split: void;
    substring: void;
    toLowerCase: void;
    toLocaleLowerCase: void;
    toUpperCase: void;
    toLocaleUpperCase: void;
    trim: void;
    length: void;
    substr: void;
    valueOf: void;
};
declare let x3: {
    toString: void;
    valueOf: void;
    toFixed: void;
    toExponential: void;
    toPrecision: void;
    toLocaleString: void;
};
