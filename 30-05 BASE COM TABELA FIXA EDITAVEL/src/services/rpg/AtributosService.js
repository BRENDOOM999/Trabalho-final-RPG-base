class AtributosService {
    getAll(){
        const atributos = localStorage.getItem('atributos')
        return atributos ? JSON.parse(atributos) : []
    }

    get(id){
        const atributos = this.getAll()
        return atributos[id]
    }

    create(dados){
        const atributos = this.getAll()
        atributos.push(dados)
        localStorage.setItem('atributos', JSON.stringify(atributos))
    }

    update(id, dados){
        const atributos = this.getAll()
        atributos.splice(id, 1, dados)
        localStorage.setItem('atributos', JSON.stringify(atributos))
    }

    delete(id){
        const atributos = this.getAll()
        atributos.splice(id, 1)
        localStorage.setItem('atributos', JSON.stringify(atributos))
    }
}

export default new AtributosService()