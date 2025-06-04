import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                exports: "auto",
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
            {
                file: "dist/umd/index.js",
                format: "umd",
                name: "ReactLogViewer",
                sourcemap: true,
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "jsxRuntime",
                },
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: "dist",
                outputToFilesystem: true, // Required for proper type output in Rollup 4
            }),
            postcss(),
        ],
        external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];
