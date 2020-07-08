/* eslint-disable react/prop-types */
import React from 'react';
import {
    Button,
    TextControl
} from '@wordpress/components';
import {
    useState,
    Fragment
} from '@wordpress/element';
import Notes from './Notes'
import uniqueId from 'lodash/uniqueId'

const Editor = (props) => {

    const [note, setNote] = useState({ id: null, content: "", done: false })

    const addNote = () => {
        const newNote = { ...note, id: uniqueId('note_') }
        props.setAttributes({ notes: [...props.attributes.notes, newNote] });
        setNote({ ...note, content: "" });
    }

    const deleteNote = (idNote) => {
        console.log(`delete ${idNote}`)
        props.setAttributes({ notes: props.attributes.notes.filter(({ id }) => id !== idNote) });
    }

    const markNote = (idNote, value) => {
        console.log(`mark ${idNote}`)
        const index = props.attributes.notes.findIndex(({ id }) => id === idNote)
        props.attributes.notes[index].done = value;
        props.setAttributes({ notes: props.attributes.notes });
    }

    return (
        <Fragment>
            <TextControl
                value={note.content}
                onChange={value => setNote({ ...note, content: value })} />

            <Button onClick={addNote}>
                Add Note
            </Button>
            <Notes {...props} actions={{ deleteNote, markNote }} />
        </Fragment>
    )
}

export default Editor;