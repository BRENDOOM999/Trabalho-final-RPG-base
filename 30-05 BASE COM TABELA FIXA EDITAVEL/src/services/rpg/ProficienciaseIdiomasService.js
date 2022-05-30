class ProficienciaseIdiomasService {
    getAll(){
        const proficienciaseidiomas = localStorage.getItem('proficienciaseidiomas')
        return proficienciaseidiomas ? JSON.parse(proficienciaseidiomas ) : []
    }

    get(id){
        const proficienciaseidiomas = this.getAll()
        return proficienciaseidiomas [id]
    }

    create(dados){
        const proficienciaseidiomas = this.getAll()
        proficienciaseidiomas .push(dados)
        localStorage.setItem('proficienciaseidiomas', JSON.stringify(proficienciaseidiomas))
    }

    update(id, dados){
        const proficienciaseidiomas = this.getAll()
        proficienciaseidiomas .splice(id, 1, dados)
        localStorage.setItem('proficienciaseidiomas', JSON.stringify(proficienciaseidiomas))
    }

    delete(id){
        const proficienciaseidiomas = this.getAll()
        proficienciaseidiomas.splice(id, 1)
        localStorage.setItem('proficienciaseidiomas', JSON.stringify(proficienciaseidiomas))
    }
}

export default new ProficienciaseIdiomasService()