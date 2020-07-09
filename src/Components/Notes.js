/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
    Button,
    CheckboxControl
} from '@wordpress/components';

import {actions} from './Editor'

const Notes = ({notes, dispatch}) => {


    const deleteNote = (id) => {
        dispatch({
            type: actions.DELETE,
            payload: id
        })
    }

    const markNote = (id, value) => {
        dispatch({
            type: actions.MARK,
            payload: {
                id,
                value
            }
        })
    }

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
                        console.log(note)
                        return (
                        <li key={note.id} style={{display: 'list-item'}}>
                            <CheckboxControl
                                style={{display: 'inline-flex'}}
                                checked={ note.done }
                                onChange={ (value) => markNote(note.id, value) }
                                />

                            { 
                                renderText(note)
                            }

                            <Button 
                                onClick={() => deleteNote(note.id)}
                                >Delete</Button>
                        </li>
                    )})}  
        </ui>
    )
};

export default Notes;