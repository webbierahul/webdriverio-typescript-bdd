import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get loginLink() {
    return $("#login2");
  }
  public get loginModalTitle() {
    return $("#logInModalLabel");
  }

  public get inputUsername() {
    return $("#loginusername");
  }

  public get inputPassword() {
    return $("#loginpassword");
  }

  public get btnSubmit() {
    return $("button=Log in");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.loginLink.click();
    await expect(this.loginModalTitle).toHaveText("Log in");
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("");
  }
}

export default new LoginPage();
