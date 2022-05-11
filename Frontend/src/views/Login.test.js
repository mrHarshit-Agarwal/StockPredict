import React from 'react';
import reactDOM from 'react-dom';
import Login from './Login';

import {mount,shallow} from 'enzyme'


describe('Render', () => {
    it('should have the Email tag', () => {
        expect(shallow(<Login />).contains(<label>Password</label>)).toBe(true);
});
it('should have the password tag', () => {
    expect(shallow(<Login />).contains(<label>Password</label>)).toBe(true);
});
});
