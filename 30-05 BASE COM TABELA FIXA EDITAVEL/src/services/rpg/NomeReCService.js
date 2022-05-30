class NomeReCService {
    getAll(){
        const nomerec = localStorage.getItem('nomerec')
        return nomerec ? JSON.parse(nomerec) : []
    }

    get(id){
        const nomerec = this.getAll()
        return nomerec[id]
    }

    create(dados){
        const nomerec = this.getAll()
        nomerec.push(dados)
        localStorage.setItem('nomerec', JSON.stringify(nomerec))
    }

    update(id, dados){
        const nomerec = this.getAll()
        nomerec.splice(id, 1, dados)
        localStorage.setItem('nomerec', JSON.stringify(nomerec))
    }

    delete(id){
        const nomerec = this.getAll()
        nomerec.splice(id, 1)
        localStorage.setItem('nomerec', JSON.stringify(nomerec))
    }
}

export default new NomeReCService()