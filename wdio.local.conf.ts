import { config as sharedConfig } from "./wdio.shared.conf.ts";
import {ReportGenerator, HtmlReporter} from 'wdio-html-nice-reporter';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: "chrome",        
      },
    ],
  },
};
