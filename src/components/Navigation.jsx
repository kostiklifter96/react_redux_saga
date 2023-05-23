import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand='xxxl' bg='dark' variant='dark'>
            {/* <Container> */}
            <Navbar.Toggle aria-controls='responsive-navbar-nav ' className='mx-auto' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='d-flex align-items-center '>
                    <img
                        alt=''
                        src='https://sun9-58.userapi.com/impf/c627828/v627828901/3bc5/hRgEv7MyR7g.jpg?size=397x538&quality=96&sign=57eb22741224254382676f5c217e00f1&type=album'
                        width='50'
                        height='65'
                        className='d-block my-2 mx-auto '
                    />
                    <div className=' '>
                        <h6 className='text-muted fs-6 text-center'>Константин Купрейчик</h6>
                        <p className='text-muted fs-6 text-center'>kypreichicsimba@gmail.com</p>
                    </div>
                    <Nav.Link href='#features'>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            Посты
                        </Link>
                    </Nav.Link>
                    <Nav.Link href='#pricing'>
                        <Link style={{ textDecoration: "none" }} to='/aboutMe'>
                            Обо мне
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
};
