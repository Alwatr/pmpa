// https://modern-web.dev/docs/dev-server/cli-and-configuration/#configuration-file
/** @type {import('@web/dev-server').DevServerConfig} */
const config = {
  hostname: 'localhost',
  port: 8080,
  open: true,
  watch: true,
  // appIndex: 'index.html',
  nodeResolve: {
    exportConditions: ['development'],
  },
  // esbuildTarget: 'auto',
  // in a monorepo you need to set set the root dir to resolve modules
  rootDir: 'dist',
  // debug: false,
  plugins: [],
  middleware: [],
  clearTerminalOnReload: false,
};

module.exports = config;
