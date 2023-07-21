import React,{ useState,useContext,useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap'
const Stage1 = () => {
    const textInput=useRef();
    return(
        <>
        <Form>
            <Form.Group>
                <Form.Control type='text' placeholder='enter your name' name='player' ref={textInput} ></Form.Control>
            </Form.Group>
            <br/><hr/>
        <Button className='miami' variant='primary' type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default Stage1
