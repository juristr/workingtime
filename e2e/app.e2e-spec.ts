import { WorkingtimePage } from './app.po';

describe('workingtime App', () => {
  let page: WorkingtimePage;

  beforeEach(() => {
    page = new WorkingtimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
