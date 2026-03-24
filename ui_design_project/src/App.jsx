import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis distinctio iure quisquam iste asperiores ex temporibus  porro sint harum nulla!',
      tag: 'Satisfied',
      color: 'red'

    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlfGVufDB8MXwwfHx8Mg%3D%3D',
      intro: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laborum nisi ipsum.',
      tag: 'Undeserved',
       color: 'blue'
    },
    {
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMGltYWdlfGVufDB8MXwwfHx8Mg%3D%3D',
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptas repudiandae aperiam et placeat officiis?',
      tag: 'Underbanked',
       color: 'green'
    },
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGltYWdlfGVufDB8MXwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptas repudiandae aperiam et placeat officiis?',
      tag: 'Mastered',
       color: 'violet'
    },
    {
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfDF8MHx8fDA%3D',
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptas repudiandae aperiam et placeat officiis?',
      tag: 'Beginner',
       color: 'yellow'
    }
  ]


  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
