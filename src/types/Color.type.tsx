export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
export type HUE = `hsl(${number}, ${number}%, ${number}%)`;

export type Color = RGB | RGBA | HEX | HUE;
