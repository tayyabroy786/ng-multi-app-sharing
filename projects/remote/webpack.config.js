const ModuleFederationPlugin = require("@module-federation/webpack");

module.exports = {
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./projects/remote/src/app/remote-app.component.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "shared-lib": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      }
    }),
  ],
};