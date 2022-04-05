import React from 'react';
import { useForm } from "react-hook-form";

import './App.css';
import Notes from './components/notes/notes';

export default function App() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data, e) => {
    alert(JSON.stringify(data));
  }

  const onError = (error, e) => alert("Remplir le formulaire");

  return (
    <div className='App'>
      <h1>Notes</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input {...register('titre', {required: true})} placeholder="Titre" />
          <input {...register('value', {required: true})} placeholder="Description" />
          <input type="submit" />
        </form>
      </div>
      
      <Notes />
    </div>
  );
}
