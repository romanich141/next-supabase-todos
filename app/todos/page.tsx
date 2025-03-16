import {ITodoProps, Todo} from '@/app/components/Todo';

const Todos = async () => {
    const getTodos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        return await response.json()
    }
    const todos: ITodoProps[] = await getTodos();

    return todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
    ))
}

export default Todos;