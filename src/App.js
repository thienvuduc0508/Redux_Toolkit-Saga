import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import User from './components/user/User';
import { persistor, store } from './store';
function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
        <div className="App">
          <User />
        </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
