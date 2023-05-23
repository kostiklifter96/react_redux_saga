import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsItem } from "../components/CardsItem";
import Loader from "../components/Loader";
import { fetchPosts } from "../store/reducers/postsReducer";
import { Col, Row } from "react-bootstrap";

export const MainPage = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.postsReducer);

    useEffect(() => {
        if (posts.length === 0)
            setTimeout(() => {
                dispatch(fetchPosts());
            }, 500);
    }, []);

    return (
        <>
            {posts.length === 0 && <Loader />}{" "}
            <Row className='mx-auto'>
                {posts?.map((post) => (
                    <Col className=' col-xl-3 col-lg-4 col-md-6 col-sm-8 col-auto mx-auto my-1 mt-2'>
                        {" "}
                        <CardsItem key={post.id} {...post} />{" "}
                    </Col>
                ))}
            </Row>
        </>
    );
};
