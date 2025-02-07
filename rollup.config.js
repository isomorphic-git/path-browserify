import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.js",
  plugins: [
    commonjs(),
  ],
  exports: 'named',
  output: [
    {
      file: "index.cjs",
      format: 'cjs',
    },
  ],
};