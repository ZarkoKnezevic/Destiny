import classes from './Post.module.css';
const names = ['Zarko', 'Ivan', 'Petar', 'Jovan', 'Marko'];

function Post(props) {
    const chosenRandomName = names[Math.floor(Math.random() * names.length)];

    return (
        <li className={classes.post}>
            <p className={classes.author}>{ props.author }</p>
            <p className={classes.text}>{ props.body }</p>
        </li>
    );
}

export default Post;