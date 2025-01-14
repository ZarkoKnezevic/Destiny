import classes from "./PostsList.module.css";
import Post from './Post';
const posts = [
    {
        author: 'Zarko',
        body: 'Hello, World!',
    },
    {
        author: 'Ivan',
        body: 'Hi, there!',
    },
    {
        author: 'Marko',
        body: 'Hello, everyone!',
    }
]

function PostsList() {
    return (
        <ul className={classes.posts}>
            {posts.map((post, index) => (
                <Post key={index} author={post.author} body={post.body} />
            ))}
        </ul>
    );
}

export default PostsList;