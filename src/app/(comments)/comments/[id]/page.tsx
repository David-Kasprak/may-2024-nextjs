import React from 'react';

type Params = {
    id: string
}

const CommentPage = async ({params}:{params: Params}) => {
    const comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id)
        .then(value => value.json());
    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export default CommentPage;