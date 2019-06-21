import 'babel-polyfill';
import _ from 'lodash';

import './../sass/styles.scss';

const getHeader = () => {
  const element = document.createElement('h1');

  element.innerHTML = helloWebpack;

  return element;
};

document.body.appendChild(getHeader());

const o = {
  foo: {
    bar: null
  }
};

console.log(o?.foo?.bar?.baz ?? 'default');
