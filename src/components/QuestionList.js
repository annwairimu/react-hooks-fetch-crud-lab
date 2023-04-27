
import React, { useState, useEffect } from 'react';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch('http://localhost:4000/questions');
      const data = await response.json();
      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.prompt}</h2>
            <ul>
              {question.answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
            <p>Correct answer: {question.answers[question.correctIndex]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default QuestionList;
