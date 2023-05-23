import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
    return (
        <>
            {" "}
            <Spinner
                animation='border'
                role='status'
                variant='dark'
                className='mx-auto d-block mt-5'
            >
                <div className='visually-hidden'>Loading...</div>
            </Spinner>
        </>
    );
}
