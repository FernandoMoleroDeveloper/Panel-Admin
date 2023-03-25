import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import User from './components/User/User';
import CreateUser from './components/CreateUser/CreateUser';
import HomePage from './components/HomePage';
import Header from './components/Header/Header';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import React from 'react';

export const LocaleContext = React.createContext();

function App() {
  // Uses
  const [locale, setLocale] = React.useState(navigator.language);

  let messages;
  switch (locale) {
    case 'es-ES':
      messages = Spanish;
      break;
    case 'en-EN':
      messages = English;
      break;
    default:
      messages = English;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <HashRouter>
          <LocaleContext.Provider value={setLocale}>
            <Header></Header>
          </LocaleContext.Provider>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/user' element={<User></User>}></Route>
            <Route path='/createuser' element={<CreateUser></CreateUser>}></Route>
          </Routes>
        </HashRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
