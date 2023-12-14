import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-10.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-10.title'),
          children: [{
            link: 'i-i-s-kursovaya-10-вода-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-вода-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-вода-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-список-програм-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-список-програм-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-список-програм-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-сбои-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-сбои-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-сбои-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-время-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-время-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-время-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-кондер-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-кондер-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-кондер-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-режим-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-режим-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-режим-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-отчет-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-отчет-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-отчет-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-моющее-сред-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-моющее-сред-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-моющее-сред-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya-10-температуры-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-температуры-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-10.i-i-s-kursovaya-10-температуры-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})