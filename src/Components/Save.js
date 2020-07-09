/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
    CheckboxControl
} from '@wordpress/components';

const Save = ({attributes: {notes}}) => {

    const renderText = (note) => {
        if(note.done === true) {
            return <p style={{display: 'inline-flex'}}><del>{note.content}</del></p>
        }

        return <p style={{display: 'inline-flex'}}>{note.content}</p>
    }

    return (
        <ui>
            {notes.map( 
                (note) => 
                    {
                        return (
                        <li key={note.id} style={{display: 'list-item'}}>
                            <CheckboxControl
                            checked={ note.done }
                            />

                            { 
                                renderText(note)
                            }
                        </li>
                    )})}  
        </ui>
    )
};

export default Save;