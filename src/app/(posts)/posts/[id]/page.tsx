import React from 'react';

type Params = {
    id: string
}

const PostPage = async ({params}:{params: Params}) => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
        .then(value => value.json());
    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export default PostPage;