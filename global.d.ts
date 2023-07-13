declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}