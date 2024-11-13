import React, {FC} from 'react';
import Link from "next/link";

type Props = {
    comments: {postId: number, id: number, name: string} []
}

const CommentsComponent:FC<Props> = ({comments}) => {
    return (
        <div>
            {comments.map(({postId, id, name}) => (
                <div key={id}>
                    <Link href={'comments/' + id}>{postId} {id} {name}</Link>
                </div>))}
        </div>
    );
};

export default CommentsComponent;