import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya_10ВодаLForm from './forms/i-i-s-kursovaya-10-вода-l';
import IISKursovaya_10ВремяLForm from './forms/i-i-s-kursovaya-10-время-l';
import IISKursovaya_10КондерLForm from './forms/i-i-s-kursovaya-10-кондер-l';
import IISKursovaya_10МоющееСредLForm from './forms/i-i-s-kursovaya-10-моющее-сред-l';
import IISKursovaya_10ОтчетLForm from './forms/i-i-s-kursovaya-10-отчет-l';
import IISKursovaya_10РежимLForm from './forms/i-i-s-kursovaya-10-режим-l';
import IISKursovaya_10СбоиLForm from './forms/i-i-s-kursovaya-10-сбои-l';
import IISKursovaya_10СписокПрограмLForm from './forms/i-i-s-kursovaya-10-список-програм-l';
import IISKursovaya_10температурыLForm from './forms/i-i-s-kursovaya-10-температуры-l';
import IISKursovaya_10ВодаEForm from './forms/i-i-s-kursovaya-10-вода-e';
import IISKursovaya_10ВремяEForm from './forms/i-i-s-kursovaya-10-время-e';
import IISKursovaya_10КондерEForm from './forms/i-i-s-kursovaya-10-кондер-e';
import IISKursovaya_10МоющееСредEForm from './forms/i-i-s-kursovaya-10-моющее-сред-e';
import IISKursovaya_10ОтчетEForm from './forms/i-i-s-kursovaya-10-отчет-e';
import IISKursovaya_10РежимEForm from './forms/i-i-s-kursovaya-10-режим-e';
import IISKursovaya_10СбоиEForm from './forms/i-i-s-kursovaya-10-сбои-e';
import IISKursovaya_10СписокПрограмEForm from './forms/i-i-s-kursovaya-10-список-програм-e';
import IISKursovaya_10температурыEForm from './forms/i-i-s-kursovaya-10-температуры-e';
import IISKursovaya_10ВодаModel from './models/i-i-s-kursovaya-10-вода';
import IISKursovaya_10ВремяModel from './models/i-i-s-kursovaya-10-время';
import IISKursovaya_10КондерModel from './models/i-i-s-kursovaya-10-кондер';
import IISKursovaya_10МоющееСредModel from './models/i-i-s-kursovaya-10-моющее-сред';
import IISKursovaya_10ОтчетModel from './models/i-i-s-kursovaya-10-отчет';
import IISKursovaya_10РежимModel from './models/i-i-s-kursovaya-10-режим';
import IISKursovaya_10СбоиModel from './models/i-i-s-kursovaya-10-сбои';
import IISKursovaya_10СписокПрограмModel from './models/i-i-s-kursovaya-10-список-програм';
import IISKursovaya_10температурыModel from './models/i-i-s-kursovaya-10-температуры';
import IISKursovaya_10ТчПрограмModel from './models/i-i-s-kursovaya-10-тч-програм';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-10-вода': IISKursovaya_10ВодаModel,
    'i-i-s-kursovaya-10-время': IISKursovaya_10ВремяModel,
    'i-i-s-kursovaya-10-кондер': IISKursovaya_10КондерModel,
    'i-i-s-kursovaya-10-моющее-сред': IISKursovaya_10МоющееСредModel,
    'i-i-s-kursovaya-10-отчет': IISKursovaya_10ОтчетModel,
    'i-i-s-kursovaya-10-режим': IISKursovaya_10РежимModel,
    'i-i-s-kursovaya-10-сбои': IISKursovaya_10СбоиModel,
    'i-i-s-kursovaya-10-список-програм': IISKursovaya_10СписокПрограмModel,
    'i-i-s-kursovaya-10-температуры': IISKursovaya_10температурыModel,
    'i-i-s-kursovaya-10-тч-програм': IISKursovaya_10ТчПрограмModel
  },

  'application-name': 'Kursovaya_10',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_10',
          title: 'Kursovaya_10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'kursovaya-10': {
          caption: 'Kursovaya_10',
          title: 'Kursovaya_10',
          'i-i-s-kursovaya-10-вода-l': {
            caption: 'Вода',
            title: ''
          },
          'i-i-s-kursovaya-10-список-програм-l': {
            caption: 'Список програм',
            title: ''
          },
          'i-i-s-kursovaya-10-сбои-l': {
            caption: 'Сбои',
            title: ''
          },
          'i-i-s-kursovaya-10-время-l': {
            caption: 'Время',
            title: ''
          },
          'i-i-s-kursovaya-10-кондер-l': {
            caption: 'Кондер',
            title: ''
          },
          'i-i-s-kursovaya-10-режим-l': {
            caption: 'Режим',
            title: ''
          },
          'i-i-s-kursovaya-10-отчет-l': {
            caption: 'Отчет',
            title: ''
          },
          'i-i-s-kursovaya-10-моющее-сред-l': {
            caption: 'Моющее сред',
            title: ''
          },
          'i-i-s-kursovaya-10-температуры-l': {
            caption: 'Температуры',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-10-вода-l': IISKursovaya_10ВодаLForm,
    'i-i-s-kursovaya-10-время-l': IISKursovaya_10ВремяLForm,
    'i-i-s-kursovaya-10-кондер-l': IISKursovaya_10КондерLForm,
    'i-i-s-kursovaya-10-моющее-сред-l': IISKursovaya_10МоющееСредLForm,
    'i-i-s-kursovaya-10-отчет-l': IISKursovaya_10ОтчетLForm,
    'i-i-s-kursovaya-10-режим-l': IISKursovaya_10РежимLForm,
    'i-i-s-kursovaya-10-сбои-l': IISKursovaya_10СбоиLForm,
    'i-i-s-kursovaya-10-список-програм-l': IISKursovaya_10СписокПрограмLForm,
    'i-i-s-kursovaya-10-температуры-l': IISKursovaya_10температурыLForm,
    'i-i-s-kursovaya-10-вода-e': IISKursovaya_10ВодаEForm,
    'i-i-s-kursovaya-10-время-e': IISKursovaya_10ВремяEForm,
    'i-i-s-kursovaya-10-кондер-e': IISKursovaya_10КондерEForm,
    'i-i-s-kursovaya-10-моющее-сред-e': IISKursovaya_10МоющееСредEForm,
    'i-i-s-kursovaya-10-отчет-e': IISKursovaya_10ОтчетEForm,
    'i-i-s-kursovaya-10-режим-e': IISKursovaya_10РежимEForm,
    'i-i-s-kursovaya-10-сбои-e': IISKursovaya_10СбоиEForm,
    'i-i-s-kursovaya-10-список-програм-e': IISKursovaya_10СписокПрограмEForm,
    'i-i-s-kursovaya-10-температуры-e': IISKursovaya_10температурыEForm
  },

});

export default translations;
