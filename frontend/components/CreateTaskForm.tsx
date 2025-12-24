import React, { useState } from "react"

type Props = {}

const CreateTaskForm = (props: Props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            title,
            description
        }

        const url = "http://127.0.0.1:5000/create_task"

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options)
        if (response.status !== 200 && response.status !== 201) {
            const error = await response.json()
            alert(error.message)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Enregistrer une tâche
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nouvelle Tâche</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="bg-light p-3 mt-3 rounded" onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Titre</label>
                                    <input type="text" className="form-control" id="title" onChange={(e) => { setTitle(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Déscription</label>
                                    <input type="text" className="form-control" id="description" aria-describedby="descriptionHelp" onChange={(e) => { setDescription(e.target.value) }} />
                                    <div id="descriptionHelp" className="form-text">Ajouter une déscription de votre tâche</div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateTaskForm