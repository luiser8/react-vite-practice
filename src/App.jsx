import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]); //Creas tu estado de tipo Array
  //Actualización de Arrays
  const [array, setArray] = useState(
    [
      {
        'id': 1,
        'name': 'Array 1',
        'active': true
      },
      {
        'id': 2,
        'name': 'Array 2',
        'active': false
      },
      {
        'id': 3,
        'name': 'Array 3',
        'active': false
      }
    ]
  );

    //Método para agregar arrays
    const agregarArray = async () => {
      const newArray = 
      {
        'id': 4,
        'name': 'Array 4',
        'active': true
      }
      setArray((array) => [...array, newArray]);

      const filtrado = array.filter((ar => ar.active === true));
      console.log(filtrado);

    }

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
      {/* para agregar los arrays */}
      <button onClick={async () => await agregarArray()}>Agregar array</button>
      {/* lista de todos los arrays */}
      <div>
        {Object.keys(array).map((item) => (
          <p key={array[item].id}>{array[item].name}</p>
        ))}
      </div>      
      {/* Otra sección */}
      {/* para renderizar los posts */}
      <ul>
        {Object.keys(posts).map((post) => (
          <li key={posts[post].id}>{posts[post].id} - {posts[post].title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;