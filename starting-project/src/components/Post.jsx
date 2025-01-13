const names = ['Zarko', 'Ivan', 'Petar', 'Jovan', 'Marko'];

function Post(props) {
    const chosenRandomName = names[Math.floor(Math.random() * names.length)];

    return (
        <div>
            <p>{ props.author }</p>
            <p>{ props.body }</p>
        </div>
    );
}

export default Post;