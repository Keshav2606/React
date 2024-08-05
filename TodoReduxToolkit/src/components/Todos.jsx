import { removeTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full min-w-fit rounded-xl px-4 py-2 bg-slate-800 text-white flex flex-wrap justify-between"
        >

          <input type="text"
          value={todo.todoMsg}
          readOnly
          className="bg-slate-800 outline-none"
          />
          <div id="btns" className="flex flex-wrap gap-2">
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="p-2 py-0 text-red-600 text-xl h-full font-bold"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
