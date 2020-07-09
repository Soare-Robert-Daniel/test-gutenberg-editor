/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
    Button,
    TextControl
} from '@wordpress/components';
import {
    useState,
    useReducer,
    Fragment
} from '@wordpress/element';
import Notes from './Notes'
import uniqueId from 'lodash/uniqueId'


export const actions = {
    ADD: "ADD",
    DELETE: "DELETE",
    MARK: "MARK",
    SAVE: "SAVE"
}


const Editor = (props) => {


    const reducer = (state, action) => {

        let index;
    
        switch(action.type) {
            case actions.ADD:
               return [...state, action.payload]
            case actions.DELETE:
                console.log(`delete ${action.payload}`)
                return state.filter(({ id }) => id !== action.payload)
            case actions.MARK:
                console.log(`mark ${action.payload.id}`)
                index = state.findIndex(({ id }) => id === action.payload.id)
                state[index].done = action.payload.value
                return [...state]
            case actions.SAVE:
                props.setAttributes({notes: state})
                return [...state]
            default:
                return state
        }
    }
    


    const [notes, dispatch] = useReducer(reducer, props.attributes.notes)
    const [note, setNote] = useState({ id: null, content: "", done: false })

    
    const addNote = () => {
        const newNote = { ...note, id: uniqueId('note_') }
        
        dispatch({
            type: actions.ADD,
            payload: newNote
        })
    }

    return (
        <Fragment>
            <TextControl
                value={note.content}
                onChange={value => setNote({ ...note, content: value })} 
                />

            <Button onClick={() => dispatch({type: actions.SAVE})}>
                Save
            </Button>
            <Button onClick={addNote}>
                Add Note
            </Button>
            <Notes notes={notes} dispatch={dispatch}  ></Notes>
        </Fragment>
    )
}

export default Editor;