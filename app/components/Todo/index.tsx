export interface ITodoProps {
    completed: boolean;
    id: number;
    title: string;
}

export const Todo = ({completed,  id, title}: ITodoProps) => {
    return <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">{id}</p>
            <p className="w-full text-grey-darkest">{title}</p>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">{completed ? 'Done' : 'Not done'}</button>
        </div>
}