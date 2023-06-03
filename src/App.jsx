import { useEffect, useState } from 'react'
import supabase from './config/index.js'

const App = () => {
  // Sign up with email
  const signUpWithPassword = async () => {
    const { user, error } = await supabase.auth.signUp({
      email: 'dnshko@gmail.com',
      password: 'anjac@123',
    })

    if (error) {
      console.log("error signing up", error)
    }
    if (user) {
      console.log("user signing up", user)
    }
  }

  const signInWithPassword = async () => {
    const { user, error } = await supabase.auth.signIn({
      email: 'dnshko@gmail.com',
      password: 'anjac@123',
    })
      .then((response) => {
        console.log('response', response)
      })
      .catch((err) => {
        alert(err)
      })

    if (error) {
      console.log("error signing up", error)
    }
    if (user) {
      console.log("user signing up", user)
    }
    console.log("user signing up", user)
  }

  return (
    <>
      <button onClick={signUpWithPassword}>
        signUpWithPassword
      </button>
      <button onClick={() => signInWithPassword()}>
        signInWithPassword
      </button>
    </>
  )
}

export default App
