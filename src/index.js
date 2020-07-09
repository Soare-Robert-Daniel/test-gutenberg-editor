/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//import React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './Components/Editor'
import save from './Components/Save'


registerBlockType('gutenberg-examples/links-addon', {
  title: __('Notes - Testing', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    notes: {
      type: 'array',
      default: [],
    },
  },
  example: {

    attributes: {
      notes: [
        {
          id: "note_1",
          content: "Buy apples",
          done: false
        },
        {
          id: "note_2",
          content: "Buy toiler paper",
          done: true
        }
      ]
    }
  },
  edit,
  save,
});