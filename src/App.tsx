import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../src/styles/global.css";
import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo";

//Fazer o query para pegar as aulas e professor através do Apollo
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`;

// Criando a interface para definir os tipos de Lesson
interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY); // Utilizando o Hook useQuery para fazer o query
  console.log(data);

  /* Metodo sem utilizar Hooks
  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data)
    })
  }, []) */

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
