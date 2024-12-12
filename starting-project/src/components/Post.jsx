const names = ['Zarko', 'Ivan', 'Petar', 'Jovan', 'Marko'];

function Post(props) {
    const chosenRandomName = names[Math.floor(Math.random() * names.length)];

    return (
        <div>
            <p>{ chosenRandomName }</p>
            <p>React.js is awesome!!!</p>
        </div>
    );
}

export default Post;