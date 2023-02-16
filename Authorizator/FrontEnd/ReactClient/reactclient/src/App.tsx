import React, { useMemo } from 'react';
import { Link, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NoteForm from './components/NoteForm';
import NewNote from './components/NewNote';
import { Container } from 'react-bootstrap';
import useLocalStorage from './components/useLocalStorage';
import { v4 as uuidV4 } from "uuid"
import 'bootstrap/dist/css/bootstrap.min.css';

export type Note = {
    id: string
} & NoteData

export type RawNote = {
    id: string
} & RawNoteData
export type RawNoteData = {
    title: string
    markdown: string
    tagIds: string[]
}

export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

export type Tag = {
    id: string
    label: string
}

function App() {
    const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
    const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

    const notesWithTags = useMemo(() => {
        return notes.map(note => {
            return {...note, tags:tags.filter(tag=>note.tagIds.includes(tag.id))}
        })
    }, [notes, tags])

    function onCreateNote({ tags, ...data }: NoteData) {
        setNotes(prevNotes => {
            return [...prevNotes, { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }
            ]
        })
    }
    function onAddTag(tag:Tag) {
        setTags(prevTags=> [...prevTags, tag])
    }
    return (
                <BrowserRouter>
        <Container className="my-4">
            <div className="App">
                    <Routes>
                        <Route path="/" element={<NewNote onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={tags} />} />
                        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={tags} />} />
                        <Route path="*" element={<Navigate to="/" />} />

                        <Route path="/:id">
                            <Route index element={<h1>Show</h1>} />
                            <Route path="edit" element={<h1>Edit</h1>} />
                        </Route>
                    </Routes>
            </div>
        </Container>
                </BrowserRouter>
    );
}

export default App;
