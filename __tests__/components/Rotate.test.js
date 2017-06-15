/* global describe, it */

import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import {addLocaleData, IntlProvider} from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'phantomjs-polyfill-object-assign';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BoundlessSdk from '../../src/components/BoundlessSdk';
import Rotate from '../../src/components/Rotate';
import configureStore from '../../src/stores/Store';

import polyfills from '../polyfills'; // eslint-disable-line no-unused-vars

import * as mapActions from '../../src/actions/MapActions';

describe('Rotate', function() {

  it('rotates the map back to north', function() {
    var container = document.createElement('div');
    const store = configureStore();

    // render the rotate button
    ReactDOM.render((
      <div>
        <IntlProvider locale="en">
          <BoundlessSdk store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <Rotate />
            </MuiThemeProvider>
          </BoundlessSdk>
        </IntlProvider>
      </div>
    ), container);

    store.dispatch(mapActions.setRotation(0.1));
    expect(store.getState().mapState.view.rotation).to.equal(0.1);

    var buttons = container.querySelectorAll('button');
    var rotate = buttons[0];
    TestUtils.Simulate.touchTap(rotate);

    expect(store.getState().mapState.view.rotation).to.equal(0);

    ReactDOM.unmountComponentAtNode(container);
  });

});