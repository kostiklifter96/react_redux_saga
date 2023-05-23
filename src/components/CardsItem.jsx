import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../store/reducers/commentsReducer";
import { CommentsList } from "./CommentsList";
import { useNavigate } from "react-router-dom";

export const CardsItem = ({ id, title, body }) => {
    const { comments } = useSelector((state) => state.commentsReducer);
    const [com, setCom] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const getMoreInfo = () => {
        setShow(!show);
        setCom([]);

        setTimeout(() => {
            dispatch(fetchComments(id));
        }, 500);
    };

    useEffect(() => {
        setTimeout(() => setCom(comments), 500);
    }, [comments]);

    return (
        <>
            <Card style={{ width: "17rem" }}>
                <Card.Img
                    variant='top'
                    src='https://img.freepik.com/free-vector/illustration-of-user-avatar-icon_53876-5907.jpg?w=2000'
                    onClick={() => navigation(`/description/${id}`)}
                />
                <Card.Body>
                    <Card.Title>{title.slice(0, 20)}</Card.Title>
                    <Card.Text>{body.slice(0, 50)}...</Card.Text>
                    <Button variant='primary' onClick={getMoreInfo}>
                        Комментарии
                    </Button>

                    {show && <CommentsList comments={com} id={id} setShow={setShow} show={show} />}
                </Card.Body>
            </Card>
        </>
    );
};
