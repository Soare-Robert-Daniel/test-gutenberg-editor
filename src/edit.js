import React, { useState } from 'react';

const edit = (props) => {

    const { setAttributes } = props;
    const [link, setLink ] = useState(" ");

    console.log(props.attributes.links)
    
    return (
        <div>
            <input onChange={event => setLink(event.target.value)} />
            <button onClick={() => setAttributes({ links: [...props.attributes.links, link] })}>Add another link!</button>
            <ul>
                {
                    props.attributes.links.forEach(link_src => (<li><a href={link_src}>Link</a></li>))
                }
            </ul>

        </div>
    );
}

export default edit;