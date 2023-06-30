import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.createdAt).toLocaleDateString('pt-BR')
}

let getTitle = (note) => {
    if (note.nome.length > 12) {
        return note.nome.slice(0, 45)
    }
    return note.nome
}

// let getContent = (note) => {
//     let title = getTitle(note)
//     let content = note.body.replaceAll('\n', ' ')
//     content = content.replaceAll(title, '')

//     if (content.length > 45) {
//         return content.slice(0, 45) + '...'
//     } else {
//         return content
//     }
// }

const ListItemEmpresas = ({ empresa }) => {
    return (
        <div className='notes-list-item'>
            <Link to={`/${empresa.id}`}>
                <div >
                    <h3>{getTitle(empresa)}</h3>
                    <p>
                        <span>Cadastrada desde {getTime(empresa)}</span>
                    </p>
                </div>
            </Link>
            <div className='notes-list-empregados'>
                <Link to={`/empregados/empresa/${empresa.id}`}>Empregados</Link>
            </div>
        </div>
    )
}

export default ListItemEmpresas