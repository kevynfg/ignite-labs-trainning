import React from 'react';
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data, error } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  
  return (
    <ul>
      {data?.lessons.map((lesson) => {
        return <li key={lesson.title}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
