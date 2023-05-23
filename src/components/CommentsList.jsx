import React from "react";
import Loader from "./Loader";

export const CommentsList = ({ comments, id, setShow, show }) => {
    return (
        <div style={{ height: "30vh" }} className='overflow-auto'>
            {comments.length === 0 && <Loader />}
            {comments.map((com) => {
                return (
                    <div>
                        {id === com.postId ? (
                            <>
                                <hr className='' />
                                <h5>{com.email}</h5>
                                <p>{com.body.slice(0, 70)}...</p>
                            </>
                        ) : (
                            setShow(!show)
                        )}
                    </div>
                );
            })}
        </div>
    );
};
