'use strict';

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/worknector/'
    : '/',
  lintOnSave: process.env.NODE_ENV !== 'production'
};
