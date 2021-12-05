import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Post from './Post'

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])

  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setPosts(json)
        setLoading(false)
      })
      .catch((e) => {
        setError(true)
        console.log(e)
      })
  }, [])
  console.log(posts)
  return (
    <Container>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error... Try refreshing</h1>}
      {posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
    </Container>
  )
}

export default App
