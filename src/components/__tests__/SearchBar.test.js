import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import SearchBar from '../SearchBar';

let container = null;

beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('SearchBar', () => {
  // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before saving it as a snapshot  SAL we are rending the compent into the searchBar, and we take the output from that container, and we grab the innerHTML and we are 'pretty' it, it will take HTML and make it look structured.  We are doing this to compare it to a previously generated snapshot as found in SearchBar.test.js.snap.  So BootCamp had ran this test previously, grabbed the code and saved it in the ***.test.js.snap snapshots folder.   So this is what we are expecting, we are then comparing it to the snapshot.  We are expecting the html producted in line 27 to match the snapshot.  
  it('should render and match snapshot', () => {
    act(() => {
      // Render the component
      render(<SearchBar />, container);
    });

    // Format the rendered output
    console.assert.log(container.innerHTML);

    const html = pretty(container.innerHTML);

    console.log(html);

    // Verify the output
    expect(html).toMatchSnapshot();
  });
});
