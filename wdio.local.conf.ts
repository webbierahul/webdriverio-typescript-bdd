import { config as sharedConfig } from "./wdio.shared.conf.ts";
import {ReportGenerator, HtmlReporter} from 'wdio-html-nice-reporter';
const {
	PLATFORM: platform,
	ENVIRONMENT: env,
	WL: wl,
	HEADLESS: headless,
	TEAM: team
} = process.env;

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
