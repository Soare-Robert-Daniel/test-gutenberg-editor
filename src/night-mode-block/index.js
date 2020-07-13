/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import classnames from 'classnames';
import btn_icon from './icon';
import './editor.scss';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { BlockControls } from '@wordpress/block-editor'
import { Toolbar, Button, Tooltip } from '@wordpress/components'

registerBlockType( 'udemy/night-mode', {
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
        return (
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
                                onClick={ () => props.setAttributes({night_mode: !props.attributes.night_mode})}>
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
