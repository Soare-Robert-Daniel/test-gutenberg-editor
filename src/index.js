/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//import React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit'
import save from './save'
import './editor.scss'

registerBlockType('tutorial/recipe', {
  title: __('Recipe - Testing', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'common',
  keywords: [
    __('Fooh', 'recipe')
  ],
  support: {
    html: false
  },
  attributes: {
    ingredients: {
      type: 'string',
      source: 'text',
      selector: '.ingredients-ph'
    },
    cooking_time: {
      type: 'string',
      source: 'text',
      selector: '.cooking-time-ph'

    },
    utensils: {
      type: 'string',
      source: 'text',
      selector: '.utensils-ph'

    },
    cooking_experience: {
      type: 'string',
      source: 'text',
      selector: '.cooking-experience-ph',
      default: 'beginner'
    },
    meal_type: {
      type: 'string',
      source: 'text',
      selector: '.meal-type-ph',
      default: 'breakfast'
    },
    text_alignment: {
      type: 'string'
    },
    block_alignment: {
      type: 'string',
      default: 'wide' 
    }
  },
  getEditWrapperProps: ({block_alignment}) => {
    if('left' === block_alignment || 'right' === block_alignment || 'full' === block_alignment) {
      return {'data-align': block_alignment}
    }
  },
  edit,
  save,
});