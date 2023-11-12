/// <reference types="svelte" />
import { type Writable } from 'svelte/store';
export declare const unsusbcribe: Writable<string>;
export declare const locales: string[];
export declare const setLocale: (language: string) => void;
export declare const t: import("svelte/store").Readable<(key: any, vars?: {}) => string>;
