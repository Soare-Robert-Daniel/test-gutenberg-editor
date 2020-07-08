import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';

registerBlockType('gutenberg-examples/links-addon', {
    title: __('links list', 'gutenberg-examples'),
    icon: 'universal-access-alt',
    category: 'layout',
    example: {},
    attributes: {
        links: {
            type: 'array',
            default: []
        }
    },
    edit: (props) => {

        console.log(wp.element)
    
        const { setAttributes } = props;
        const { link, setLink } = useState(" ");

        console.log(setLink)

        return (
            <div>
                <input onChange={event => setLink(event.target.value)} />
                <button onClick={() => setAttributes({ links: [...props.attributes.links, link]})}>Add another link!</button>
                <ul>
                    {
                        props.attributes.links.forEach(link_src => (<li><a href={link_src}>Link</a></li>))
                    }
                </ul>
                
            </div>
        );
    },
    save: () => {
        return (
            <div>
                <ul>
                    {
                        props.attributes.links.forEach(link_src => (<li><a href={link_src}>Link</a></li>))
                    }
                </ul>
            </div>
        );
    },
});


// registerBlockType('gutenberg-examples/imgur-addon', {
//     title: __('Imgur-Img', 'gutenberg-examples'),
//     icon: 'universal-access-alt',
//     category: 'layout',
//     example: {},
//     attributes: {
//         imgurLink: {
//             type: 'string'
//         }
//     },
//     edit(props) {

//         const { setAttributes } = props;

//         return (
//             <div>
//                 <input onChange={event => setAttributes({imgurLink: event.target.value})} placeholder="Insert an Imgur image link!"/>
//                 <img src={props.attributes.imgurLink}/>
//             </div>
//         );
//     },
//     save() {
//         return (
//             <div>
//                 <img src={props.attributes.imgurLink} />
//             </div>
//         );
//     },
// });