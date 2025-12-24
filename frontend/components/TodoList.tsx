type Props = {
    tasks: string[]
}

const TodoList = ({ tasks }: Props) => {
    return (
        <>
            <h1 className="text-white mb-3 text-center">Toutes les tâches</h1>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li className="list-group-item" key={task}>{task}
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-primary">Faite</button>
                            <button type="button" className="btn btn-danger">Supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList