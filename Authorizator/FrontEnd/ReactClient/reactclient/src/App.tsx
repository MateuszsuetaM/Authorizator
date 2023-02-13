import React from 'react';
import { Link, Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import NoteForm from './components/NoteForm';
import NewNote from './components/NewNote';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container className="my-4">
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/new" element={<NewNote />} />
                        <Route path="/note" element={<NoteForm />} />
                        <Route path="*" element={<Navigate to="/" />} />

                        <Route path="/:id">
                            <Route index element={<h1>Show</h1>} />
                            <Route path="edit" element={<h1>Edit</h1>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Container>
    );
}

export default App;
