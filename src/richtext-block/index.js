/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */

import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n';

registerBlockType( 'tutorial/rich-text', {
    title:                              __( 'Rich Text Example', 'recipe' ),
    description:                        __( 'Rich text example', 'recipe' ),
    category:                           'common',
    icon:                               'universal-access-alt',
    attributes: {
        message: {
            type: 'array',
            source: 'children',
            selector: '.message-ctr'
        }
    },
    edit: ( props ) => {
        return (
            <div className={ props.className }>
                <h3>Rich Text Example Block</h3>
                <RichText 
                    tagName="div"
                    multiline="p" 
                    placeholder={__('Add your content here.', 'recipe')}
                    onChange= {(val) => {
                        props.setAttributes({message: val})
                    }}
                    value={props.attributes.message}/>
            </div>
        );
    },
    save: ( props ) => {
        return (
            <div>
                <h3>
                    Rich text
                </h3>
                <div className="message-ctr">
                    {props.attributes.message}
                </div>
            </div>
        )
    }
});