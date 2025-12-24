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
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </>
    )
}

export default CreateTaskForm