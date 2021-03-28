import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from "../componets/Form";
import {Notes} from "../componets/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../componets/Loader";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form/>
            <hr/>
            {loading
                ? <Loader/>
                : <Notes notes={notes} onRemove={removeNote}/>
            }
        </Fragment>
    )
}