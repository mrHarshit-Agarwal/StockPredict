import React from 'react';
import reactDOM from 'react-dom';
import Information from './Information';

import {mount,shallow} from 'enzyme'


describe('App', () => {
    it('should have the title tag', () => {
        expect(shallow(<Information />).contains(<title>Home</title>)).toBe(true);
});
it('should have the LSTM', () => {
    expect(shallow(<Information />).contains(<h4 className="topic-heading">LSTM</h4>)).toBe(true);
});
});
