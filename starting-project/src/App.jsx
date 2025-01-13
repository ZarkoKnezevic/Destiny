import Post from './components/Post';

function App() {
  return (
      <main>
        <h1>Hi From App!</h1>
        <Post author="Zarko" body="Best guy ever!"/>
        <Post author="Ivan" body="Not the Best guy ever!"/>
        <Post author="Marko" body="100% not the best guy ever!"/>
      </main>
  );
}

export default App;
