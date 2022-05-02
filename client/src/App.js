import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default function App() {
const questions = [
  {
    questionText: 'What is the craziest thing you have done/ would most linkly do?',
    answerOptions: [
      { answerText: 'sky diving', isCorrect: false },
      { answerText: 'quit your job', isCorrect: false },
      { answerText: 'swim with sharks', isCorrect: true },
      { answerText: 'Driving 80mph in a 50mph zone', isCorrect: false },
    ],
  },
  {
    questionText: 'What is your biggest pet peeve?',
    answerOptions: [
      { answerText: 'Interrupting', isCorrect: false },
      { answerText: 'Loud Chewing', isCorrect: true },
      { answerText: 'Slow Internet', isCorrect: false },
      { answerText: 'Being late', isCorrect: false },
    ],
  },
  {
    questionText: 'Your weekend consists of...',
    answerOptions: [
      { answerText: 'Sleeping all day ', isCorrect: true },
      { answerText: 'Playing call of duty', isCorrect: false },
      { answerText: 'Partyyyyy', isCorrect: false },
      { answerText: 'Outside adventures', isCorrect: false },
    ],
  },
  {
    questionText: 'Which role excites you the most?',
    answerOptions: [
      { answerText: 'Marine Biologist', isCorrect: false },
      { answerText: 'Santa Clause', isCorrect: false },
      { answerText: 'Sergeant Major of the Army', isCorrect: false },
      { answerText: 'President', isCorrect: true },
    ],
  },
];

return (
  <div className='app'>
    {/* HINT: replace "false" with logic to display the 
    score when the user has answered all the questions */}
    {false ? (
      <div className='score-section'>You scored 1 out of {questions.length}</div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question 1</span>/{questions.length}
          </div>
          <div className='question-text'>This is where the question text should go</div>
        </div>
        <div className='answer-section'>
          <button>Answer 1</button>
          <button>Answer 2</button>
          <button>Answer 3</button>
          <button>Answer 4</button>
        </div>
      </>
    )}
  </div>
);
    }


