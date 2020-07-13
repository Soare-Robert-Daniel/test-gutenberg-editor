/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import classnames from 'classnames';
import btn_icon from './icon';
import './editor.scss';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockControls, InspectorControls } from '@wordpress/block-editor'
import { Toolbar, Button, Tooltip, PanelBody, PanelRow, FormToggle } from '@wordpress/components'

registerBlockType( 'tutorial/night-mode', {
    title:                              __( 'Night Mode', 'recipe' ),
    description:                        __( 'Content with night mode.', 'recipe'),
    category:                           'common',
    icon:                               'universal-access-alt',
    attributes: {
        night_mode: {
            type: 'boolean',
            default: false
        }
    },
    edit: ( props ) => {

        const toggle_night_mode = () => props.setAttributes({night_mode: !props.attributes.night_mode})

        return (
            <div>
                <InspectorControls>
                    <PanelBody title={__('Night Mode', 'recipe')}>
                        <PanelRow>
                            <label htmlFor="tutorial-recipe-night-mode-toggle">
                                {__('Night Mode', 'recipe')}
                            </label>
                            <FormToggle id="tutorial-recipe-night-mode-toggle"
                                        checked={props.attributes.night_mode}
                                        onChange={toggle_night_mode}/>
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div className={ props.className }>
                    <BlockControls>
                        <Toolbar>
                            <Tooltip text={__('Night mode', 'recipe')}>
                                <Button className={
                                    classnames(
                                        'components-icon-buton',
                                        'components-toolbar__control',
                                        {'is-active': props.attributes.night_mode}
                                    )}
                                    onClick={ toggle_night_mode }>
                                        {btn_icon}
                                </Button>
                            </Tooltip>
                        </Toolbar>

                    </BlockControls>
                    <div className={classnames(
                        'content-example',
                        {'night': props.attributes.night_mode}
                    )}>
                        This is an example of a block with night mode.
                    </div>
                </div>
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div>
                <div className={classnames(
                    'content-example',
                    {'night': props.attributes.night_mode}
                )}>
                    This is an example of a block with night mode.
                </div>
            </div>
        )
    },

});
