import { expect, type Locator, type Page } from '@playwright/test';

export class practiceExpandTestingPage {
    readonly page: Page;
    readonly cookieConsentButton: Locator;

    // readonly buyUsACoffeeButton: Locator;

    // readonly testCasesButton: Locator;
    // readonly apiTestingButton: Locator;
    // readonly xpathCssButton: Locator;

    // readonly eCommerceBookStoreBadge: Locator;
    // readonly notesReactAppBadge: Locator;
    // readonly notesRestApiBadge: Locator;
    // readonly webParkAppBadge: Locator;
    // readonly cssXpathToolBadge: Locator;
    // readonly mochaRunnerBadge: Locator;

    readonly webInputsPageTryItOutButton: Locator;
    readonly testLoginPageTryItOutButton: Locator;
    readonly testRegisterPageTryItOutButton: Locator;
    readonly forgotPasswordFormPageTryItOutButton: Locator;
    readonly oneTimePasswordFormPageTryItOutButton: Locator;
    readonly dynamicTablePageTryItOutButton: Locator;



    constructor(page: Page){
        this.page = page;
        this.cookieConsentButton = page.getByRole('button', { name: 'Consent' });
        this.webInputsPageTryItOutButton = page.locator('.card').filter({ hasText: 'Web Inputs' }).getByRole('link', { name: 'Try it out' });
        this.testLoginPageTryItOutButton = page.locator('.card').filter({ hasText: 'Test Login Page' }).getByRole('link', { name: 'Try it out' });
        this.testRegisterPageTryItOutButton = page.locator('.card').filter({ hasText: 'Test Register Page' }).getByRole('link', { name: 'Try it out' });
        this.forgotPasswordFormPageTryItOutButton = page.locator('.card').filter({ hasText: 'Forgot Password Form' }).getByRole('link', { name: 'Try it out' });
        this.oneTimePasswordFormPageTryItOutButton = page.locator('.card').filter({ hasText: 'OTP: One Time Password'}).getByRole('link', { name: 'Try it out' });
        this.dynamicTablePageTryItOutButton = page.locator('.card').filter({ hasText: 'Dynamic Table'}).getByRole('link', { name: 'Try it out' });
    }
}