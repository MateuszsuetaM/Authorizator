import React, { useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Form, Row, Stack } from 'react-bootstrap';
import ReactSelect from 'react-select';
import { Note, Tag } from '../App';
//import styles from "../../../reactclient/";
import styles from "../NotesList.modules.css";
//const styles = require("../../NotesList.modules.css");
//import styles from './NotesList.modules.css'

type SimplifiedNote = {
    tags: Tag[]
    title: string
    id: string
}
type NoteListProps = {
    availableTags: Tag[]
    notes: Note[]
}

export function NoteList({ availableTags, notes }: NoteListProps) {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState("")
    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) && (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)
            ))})
    },[title, selectedTags, notes])
    return <>
        <Row className="align-items-center mb-4">
            <Col><h1>Notes</h1></Col>
            <Col xs="auto">
                <Stack gap={2} direction="horizontal">
                     <Link to="/new">
                        <Button variant="primary">Create</Button>
                    </Link>
                        <Button variant="outline-secondary">Edit Tags</Button>
                </Stack>
            </Col>
        </Row>
        <Form>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={e=>setTitle(e.target.value) } />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <ReactSelect
                    value={selectedTags.map(tag => {
                        return { label: tag.label, value: tag.id }
                    })}
                    options={availableTags.map(tag => {
                        return {
                            label: tag.label, value: tag.id
                            }
                    })}
                    onChange={tags => {
                        setSelectedTags(tags.map(tag => {
                            return { label: tag.label, id: tag.value }
                        }))
                    }}
                    isMulti />
            </Row>
        </Form>
        <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
            {filteredNotes.map(note => (
                <Col key={note.id}>
                    <NoteCard id={note.id} title={note.title} tags={note.tags} />
                </Col>
                ))}
                </Row>
    </>
}

function NoteCard({ id, title, tags }: SimplifiedNote) {
    return <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none ${styles.card}` }>
    </Card>
}

export default NoteList;