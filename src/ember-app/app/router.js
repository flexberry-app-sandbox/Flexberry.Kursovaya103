import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-10-вода-l');
  this.route('i-i-s-kursovaya-10-вода-e',
  { path: 'i-i-s-kursovaya-10-вода-e/:id' });
  this.route('i-i-s-kursovaya-10-вода-e.new',
  { path: 'i-i-s-kursovaya-10-вода-e/new' });
  this.route('i-i-s-kursovaya-10-время-l');
  this.route('i-i-s-kursovaya-10-время-e',
  { path: 'i-i-s-kursovaya-10-время-e/:id' });
  this.route('i-i-s-kursovaya-10-время-e.new',
  { path: 'i-i-s-kursovaya-10-время-e/new' });
  this.route('i-i-s-kursovaya-10-кондер-l');
  this.route('i-i-s-kursovaya-10-кондер-e',
  { path: 'i-i-s-kursovaya-10-кондер-e/:id' });
  this.route('i-i-s-kursovaya-10-кондер-e.new',
  { path: 'i-i-s-kursovaya-10-кондер-e/new' });
  this.route('i-i-s-kursovaya-10-моющее-сред-l');
  this.route('i-i-s-kursovaya-10-моющее-сред-e',
  { path: 'i-i-s-kursovaya-10-моющее-сред-e/:id' });
  this.route('i-i-s-kursovaya-10-моющее-сред-e.new',
  { path: 'i-i-s-kursovaya-10-моющее-сред-e/new' });
  this.route('i-i-s-kursovaya-10-отчет-l');
  this.route('i-i-s-kursovaya-10-отчет-e',
  { path: 'i-i-s-kursovaya-10-отчет-e/:id' });
  this.route('i-i-s-kursovaya-10-отчет-e.new',
  { path: 'i-i-s-kursovaya-10-отчет-e/new' });
  this.route('i-i-s-kursovaya-10-режим-l');
  this.route('i-i-s-kursovaya-10-режим-e',
  { path: 'i-i-s-kursovaya-10-режим-e/:id' });
  this.route('i-i-s-kursovaya-10-режим-e.new',
  { path: 'i-i-s-kursovaya-10-режим-e/new' });
  this.route('i-i-s-kursovaya-10-сбои-l');
  this.route('i-i-s-kursovaya-10-сбои-e',
  { path: 'i-i-s-kursovaya-10-сбои-e/:id' });
  this.route('i-i-s-kursovaya-10-сбои-e.new',
  { path: 'i-i-s-kursovaya-10-сбои-e/new' });
  this.route('i-i-s-kursovaya-10-список-програм-l');
  this.route('i-i-s-kursovaya-10-список-програм-e',
  { path: 'i-i-s-kursovaya-10-список-програм-e/:id' });
  this.route('i-i-s-kursovaya-10-список-програм-e.new',
  { path: 'i-i-s-kursovaya-10-список-програм-e/new' });
  this.route('i-i-s-kursovaya-10-температуры-l');
  this.route('i-i-s-kursovaya-10-температуры-e',
  { path: 'i-i-s-kursovaya-10-температуры-e/:id' });
  this.route('i-i-s-kursovaya-10-температуры-e.new',
  { path: 'i-i-s-kursovaya-10-температуры-e/new' });
});

export default Router;
