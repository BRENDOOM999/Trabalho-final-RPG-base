class HistoriaService {
    getAll(){
        const historia = localStorage.getItem('historia')
        return historia ? JSON.parse(historia) : []
    }

    get(id){
        const historia = this.getAll()
        return historia[id]
    }

    create(dados){
        const historia = this.getAll()
        historia.push(dados)
        localStorage.setItem('historia', JSON.stringify(historia))
    }

    update(id, dados){
        const historia = this.getAll()
        historia.splice(id, 1, dados)
        localStorage.setItem('historia', JSON.stringify(historia))
    }

    delete(id){
        const historia = this.getAll()
        historia.splice(id, 1)
        localStorage.setItem('historia', JSON.stringify(historia))
    }
}

export default new HistoriaService()