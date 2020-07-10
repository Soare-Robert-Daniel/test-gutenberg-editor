/* eslint-disable react/react-in-jsx-scope */
import {
	__experimentalAlignmentHookSettingsProvider as AlignmentHookSettingsProvider,
	InnerBlocks,
	__experimentalBlock as Block,
} from '@wordpress/block-editor';


import { name as paragraphBlockName } from '@wordpress/block-library/'

const ALLOWED_BLOCKS = [ paragraphBlockName ];
const PARAGRAPHS_TEMPLATE = [ [ 'core/paragraph' ] ];

const alignmentHooksSetting = {
	isEmbedButton: true,
};

const ParagraphList = () => {
    return (
        <Block.div>
			<AlignmentHookSettingsProvider value={ alignmentHooksSetting }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ PARAGRAPHS_TEMPLATE }
					orientation="vertical"
				/>
			</AlignmentHookSettingsProvider>
		</Block.div>
    )
}

export default ParagraphList;