/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { __ } from '@wordpress/i18n';
import { 
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	BlockAlignmentToolbar
} from '@wordpress/block-editor'
import {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl
} from '@wordpress/components'

const Recipe = (props) => {
	return (
		<div>
			<InspectorControls>
				<PanelBody title="Basics">
					<PanelRow>
						<p>
							{__('Configure the content', 'recipe')}
						</p>
					</PanelRow>
					<TextControl
						label={__('Ingredients', 'recipe')}
						value={props.attributes.ingredients}
						onChange={
							(val) => props.setAttributes({ ingredients: val})
						}
					/>
					<TextControl
						label={__('Cooking Time', 'recipe')}
						value={props.attributes.cooking_time}
						onChange={
							(val) => props.setAttributes({ cooking_time: val})
						}
					/>
					<TextControl
						label={__('Utensils', 'recipe')}
						value={props.attributes.utensils}
						onChange={
							(val) => props.setAttributes({ utensils: val})
						}
					/>
					<SelectControl
						label={__('Cooking', 'recipe')}
						value={props.attributes.cooking_experience}
						options={[
							{ value: 'beginner', label: 'Beginner' },
							{ value: 'intermidiate', label: 'Intermidate' },
							{ value: 'expert', label: 'Expert' },
						]}
						onChange={
							(val) => props.setAttributes({ cooking_experience: val})
						}
					/>
					<SelectControl
						label={__('Meal Type', 'recipe')}
						value={props.attributes.meal_type}
						options={[
							{ value: 'breakfast', label: 'Breakfast' },
							{ value: 'lunch', label: 'Lunch' },
							{ value: 'dinner', label: 'Dinner' },
						]}
						onChange={
							(val) => props.setAttributes({ meal_type: val})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<BlockAlignmentToolbar 
				value={ props.attributes.block_alignment}
				onChange={ (val) => {
					props.setAttributes({block_alignment: val})
					}}	
				/>
				<AlignmentToolbar 
					value={ props.attributes.text_alignment}
					onChange={ (val) => {
						props.setAttributes({text_alignment: val})
						}}/>
			</BlockControls>
			<div className={props.className}
				style={{textAlign: props.attributes.text_alignment}}>
				<ul className="list-unstyled">
					<li><strong>{__('Ingredients', 'recipe')}: </strong>
						<span className="ingredients-ph">

						{props.attributes.ingredients}
						</span>
					</li>
					<li><strong>{__('Cooking Time', 'recipe')}: </strong> 
					<span className="cooking-time-ph">

						{props.attributes.cooking_time}
					</span>
					</li>
					<li><strong>{__('Utensils', 'recipe')}: </strong> 
					<span className="utensils-ph">

						{props.attributes.utensils}
					</span>
					</li>
					<li><strong>{__('Cooking Experience')}: </strong> 
					<span className="cooking-experience-ph">

						{props.attributes.cooking_experience}
					</span>
					</li>
					<li><strong>{__('Meal Type', 'recipe')}: </strong>
					<span className="meal-type-ph">

						{props.attributes.meal_type}	
					</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Recipe