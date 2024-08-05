import "./App.css";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Todos from "./components/Todos";
import { useEffect } from "react";

function App() {

  return (
    <Provider store={store}>
      <div id="container" className="bg-gray-900 h-screen flex flex-wrap flex-col justify-start gap-6">
        <h1 className="text-white mt-12 mb-4">To-do App</h1>
        <div id="input" className="w-1/2 mx-auto">
          <AddTodo />
        </div>
        <div id="todos" className="w-1/2 mx-auto flex flex-wrap flex-col justify-items-end gap-3">
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
