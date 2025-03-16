import {ITodoProps, Todo} from '@/app/components/Todo';

const Todos = async () => {
    const getTodos = async () => {
        await new Promise<void>((resolve): void => {
            setTimeout(resolve, 5000);
        })
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        return await response.json()
    }
    const todos: ITodoProps[] = await getTodos();

    console.log(todos)

    return todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
    ))
}

export default Todos;