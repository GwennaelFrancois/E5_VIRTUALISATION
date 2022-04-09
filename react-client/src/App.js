import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

import './App.css';
import Notes from './components/notes/notes';

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export default function App() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data, e) => {
    api.post('/note', data)
    .then(function (response) {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const onError = (error, e) => alert("Remplir le formulaire");

  return (
    <div className='App'>
      <h1>Notes</h1>
      <div>
        <h2>Ajouter Note</h2>
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
