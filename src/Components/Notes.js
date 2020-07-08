/* eslint-disable react/prop-types */
import React from 'react';
import {
    Button,
    CheckboxControl
} from '@wordpress/components';

const Notes = ({attributes: {notes}, actions}) => {

    const renderText = (note) => {
        if(note.done === true) {
            return <p style={{display: 'inline-flex'}}><del>note.content</del></p>
        }

        return <p style={{display: 'inline-flex'}}>note.content</p>
    }

    return (
        <ui>
            {notes.map( 
                (note) => 
                    (
                        <li key={note.id}>
                            <CheckboxControl
                            checked={ note.done }
                            onChange={ (value) => actions.markNote(note.id, value) }
                            />

                            {renderText(note)}

                            <Button onClick={() => actions.deleteNote(note.id)}>Delete</Button>
                        </li>
                    ))}  
        </ui>
    )
};

export default Notes;