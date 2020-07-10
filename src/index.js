/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//import React from 'react';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import edit from './edit'
import save from './save'


import transforms from './transforms';

registerBlockType('gutenberg-examples/links-addon', {
  title: __('Notes - Testing', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  transforms,
  edit,
  save,
});