/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import classnames from 'classnames';



import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor'
import {
    PanelBody, TextareaControl,
    CheckboxControl,
    RadioControl, RangeControl
} from '@wordpress/components'

registerBlockType('udemy/inspector-controls-example', {
    title: __('Inspector Controls', 'recipe'),
    description: __('Inspector Controls.', 'recipe'),
    category: 'common',
    icon: 'universal-access-alt',
    attributes: {
        textarea_input: {
            type: 'text',
        },
        checkbox_input: {
            type: 'boolean',
            default: true,
        },
        radio_input: {
            type: 'string',
            default: 'foo',
        },
        range_input: {
            type: 'number',
            default: '5',
        }
    },
    edit: (props) => {
        return (<div>
            <InspectorControls>
                <PanelBody title={__('Input Examples', 'recipe')}>
                    <TextareaControl
                        label={__('Text Area Control', 'recipe')}
                        help={__('Help Text', 'recipe')}
                        value={props.attributes.textarea_input}
                        onChange={(new_val) => {
                            props.setAttributes({ textarea_input: new_val })
                        }} />

                    <CheckboxControl
                        heading={__('Checkbox Control', 'recipe')}
                        label={__('Click me!', 'recipe')}
                        help={__('Help Text', 'recipe')}
                        checked={props.attributes.checkbox_input}
                        onChange={(new_val) => {
                            props.setAttributes({ checkbox_input: new_val })
                        }}
                    />

                    <RadioControl
                        label={__('Radio Control', 'recipe')}
                        selected={props.attributes.radio_input}
                        options={[
                            { label: 'Foo', value: 'foo' },
                            { label: 'Bar', value: 'bar' },
                        ]}
                        onChange={(new_val) => {
                            props.setAttributes({ radio_input: new_val })
                        }} />

                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={__('Range Control', 'recipe')}
                        min={1}
                        max={10}
                        value={props.attributes.range_input}
                        onChange={(new_val) => {
                            props.setAttributes({ range_input: new_val })
                        }} />
                </PanelBody>
            </InspectorControls>,
            <div className={props.className}>
                <ul>
                    <li><strong>Textarea Input</strong> - {props.attributes.textarea_input}</li>
                    <li><strong>Checkbox Input</strong> - {props.attributes.checkbox_input.toString()}</li>
                    <li><strong>Radio Input</strong> - {props.attributes.radio_input}</li>
                    <li><strong>Range Input</strong> - {props.attributes.range_input}</li>
                </ul>
            </div>
        </div>)
    },
    save: (props) => {
        return (
            <div>
                <ul>
                    <li><strong>Textarea Input</strong> - {props.attributes.textarea_input}</li>
                    <li><strong>Checkbox Input</strong> - {props.attributes.checkbox_input.toString()}</li>
                    <li><strong>Radio Input</strong> - {props.attributes.radio_input}</li>
                    <li><strong>Range Input</strong> - {props.attributes.range_input}</li>
                </ul>
            </div>
        )
    },

});
