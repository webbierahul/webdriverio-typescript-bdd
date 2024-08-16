import { config as sharedConfig } from "./wdio.shared.conf.ts";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: "chrome",
        "wdio:devtoolsOptions": {
          headless: false,
        },
      },
    ],
  },
};
