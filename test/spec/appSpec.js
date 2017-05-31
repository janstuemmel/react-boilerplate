import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { mount, render } from 'enzyme';

import App from '../../app/app';

describe('app tests', () => {


  it('should mount', () => {

    // when
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );

    // then
    expect(wrapper.exists()).toBe(true);
  });


  it('should display route /', () => {

    // when
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );

    // then
    expect(wrapper.find('Home').text()).toBe('Home');
  });


  it('should display route /hello/tom', () => {

    // when
    const wrapper = mount(
      <Router initialEntries={[ '/hello/Tom' ]}>
        <App />
      </Router>
    );

    // then
    expect(wrapper.find('Hello').text()).toBe('Hello Tom');
  });


  it('should route from / to /hello/Tom', () => {

    // given
    const wrapper = mount(
      <Router>
        <App />
      </Router>
    );

    // when
    wrapper.instance().history.push('/hello/Tom');

    // then
    expect(wrapper.find('Hello').text()).toBe('Hello Tom');
  });


  it('should get notFound on other routes', () => {

    // when
    const wrapper = mount(
      <Router initialEntries={[ '/idonotexist' ]}>
        <App />
      </Router>
    );

    // then
    expect(wrapper.find('NotFound').text()).toMatch(/404.*/);
  });

});
