import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]); //Creas tu estado de tipo Array

  //Método para buscar al API los posts
  const getPosts = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
}

//UseEffect para cargar el método al montarse el componente
  useEffect(() => {
    getPosts();
  }, []);

  //Renderizar los posts
  return (
    <div className="App">
      <ul>
        {Object.keys(posts).map((post) => (
          <li key={posts[post].id}>{posts[post].id} - {posts[post].title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;