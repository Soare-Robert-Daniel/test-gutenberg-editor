/* eslint-disable react/react-in-jsx-scope */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div>
			<InnerBlocks.Content />
		</div>
	);
}