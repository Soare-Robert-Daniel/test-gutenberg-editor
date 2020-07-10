/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { __ } from '@wordpress/i18n';
const RecipeSave =  (props) => {
	return (
		<div className={`align${props.attributes.block_alignment}`}>
				<ul className="list-unstyled"
					style={{textAlign: props.attributes.text_alignment}}>
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
	)
}

export default RecipeSave