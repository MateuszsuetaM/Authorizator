import { NoteData, RawNote, Tag } from '../App';
import { NoteForm } from './NoteForm'

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}


export function NewNote({ onSubmit, onAddTag, availableTags }:NewNoteProps) { 
    return <div>
        <h1>New notatka</h1>
        <NoteForm
            onSubmit={onSubmit} 
            onAddTag={onAddTag}
            availableTags={availableTags}
        />
        </div>

}
export default NewNote;