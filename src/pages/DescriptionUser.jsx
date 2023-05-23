import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CardsItem } from "../components/CardsItem";
import Loader from "../components/Loader";
import { fetchComments } from "../store/reducers/commentsReducer";
import { fetchUser } from "../store/reducers/userReducer";

export default function DescriptionUser() {
    const [show, setShow] = useState(false);
    const navigation = useNavigate();

    const param = useParams();
    const dispatch = useDispatch();
    const { user, userPosts } = useSelector((state) => state.userReducer);

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchUser(param.id));
            dispatch(fetchComments(param.id));
            setShow(true);
        }, 500);
    }, []);

    return (
        <>
            <Button onClick={() => navigation("/")} className='mt-2'>
                На главную
            </Button>
            {show ? (
                <Row className='d-flex justify-content-center'>
                    <img
                        src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg'
                        alt='UserImage'
                        style={{ width: "370px", height: "400px" }}
                    />
                    <h1> Имя: {user.name}</h1>
                    <h2> Логин: {user.username}</h2>
                    <h3> Веб-сайт: {user.website}</h3>
                    <h3> Телефон: {user.phone}</h3>

                    <h1 className='mt-4'>Посты пользователя: </h1>
                    {!show && <Loader />}
                    {show &&
                        userPosts.map((c) => (
                            <Col
                                className=' col-xl-3 col-lg-4 col-md-6 col-sm-8 col-auto mx-auto
                                my-1'
                            >
                                <CardsItem key={c.id} {...c} />{" "}
                            </Col>
                        ))}
                </Row>
            ) : (
                <Loader />
            )}
        </>
    );
}
