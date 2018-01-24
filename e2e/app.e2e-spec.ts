import { FormAngularPage } from './app.po';

describe('form-angular App', () => {
  let page: FormAngularPage;

  beforeEach(() => {
    page = new FormAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
