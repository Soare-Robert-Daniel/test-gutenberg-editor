/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { __ } from '@wordpress/i18n';
import React from 'react';
import { registerBlockType } from '@wordpress/blocks';

import Editor from './Components/Editor'
import Notes from './Components/Notes'


registerBlockType('gutenberg-examples/links-addon', {
  title: __('links list', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'layout',
  example: {},
  attributes: {
    notes: {
      type: 'array',
      default: [],
    },
  },
  edit: (props) => (<Editor {...props}/>),
  save: (props) => (<Notes {...props}/>),
});