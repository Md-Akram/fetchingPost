import React from 'react'
import { Card } from 'react-bootstrap'

export default function Post({ post }) {
  return (
    <Card style={{ margin: '1rem' }}>
      <Card.Body>
        <Card.Title className='text-uppercase'>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  )
}
