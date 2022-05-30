class FichaFinalService {
    getAll(){
        const fichafinal = localStorage.getItem('fichafinal')
        return fichafinal ? JSON.parse(fichafinal) : []
    }

    get(id){
        const fichafinal = this.getAll()
        return fichafinal[id]
    }

    create(dados){
        const fichafinal = this.getAll()
        fichafinal.push(dados)
        localStorage.setItem('fichafinal', JSON.stringify(fichafinal))
    }

    update(id, dados){
        const fichafinal = this.getAll()
        fichafinal.splice(id, 1, dados)
        localStorage.setItem('fichafinal', JSON.stringify(fichafinal))
    }

    delete(id){
        const fichafinal = this.getAll()
        fichafinal.splice(id, 1)
        localStorage.setItem('fichafinal', JSON.stringify(fichafinal))
    }
}

export default new FichaFinalService()