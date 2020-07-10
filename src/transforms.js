
import { createBlock } from '@wordpress/blocks';

import { name } from './block.json';

const transforms = {
	from: [
		{
			type: 'block',
			isMultiBlock: true,
			blocks: [ 'core/paragraph' ],
			transform: ( paragraphs ) =>
				// Creates the paragraphs block
				createBlock(
					name,
					{},
					// Loop the selected paragraphs
					paragraphs.map( ( attributes ) =>
						// Create singular button in the paragraphs block
						createBlock( 'core/paragraph', attributes )
					)
				),
		},
	],
};

export default transforms;