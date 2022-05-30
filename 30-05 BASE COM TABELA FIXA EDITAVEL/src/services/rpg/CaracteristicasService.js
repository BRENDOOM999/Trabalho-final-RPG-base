class CaracteristicasService {
    getAll(){
        const caracteristica = localStorage.getItem('caracteristica')
        return caracteristica ? JSON.parse(caracteristica) : []
    }

    get(id){
        const caracteristica = this.getAll()
        return caracteristica[id]
    }

    create(dados){
        const caracteristica = this.getAll()
        caracteristica.push(dados)
        localStorage.setItem('caracteristica', JSON.stringify(caracteristica))
    }

    update(id, dados){
        const caracteristica = this.getAll()
        caracteristica.splice(id, 1, dados)
        localStorage.setItem('caracteristica', JSON.stringify(caracteristica))
    }

    delete(id){
        const caracteristica = this.getAll()
        caracteristica.splice(id, 1)
        localStorage.setItem('caracteristica', JSON.stringify(caracteristica))
    }
}

export default new CaracteristicasService()