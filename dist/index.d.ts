import { Plugin } from "vite";
declare global {
    var __coverage__: any;
}
interface IstanbulPluginOptions {
    include?: string | string[];
    exclude?: string | string[];
    extension?: string | string[];
    requireEnv?: boolean;
    cypress?: boolean;
    checkProd?: boolean;
    cwd?: string;
    forceBuildInstrument?: boolean;
}
declare const _default: (opts?: IstanbulPluginOptions) => Plugin;
export = _default;
//# sourceMappingURL=index.d.ts.map