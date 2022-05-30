class EquipamentoService {
    getAll(){
        const equipamento = localStorage.getItem('equipamento')
        return equipamento ? JSON.parse(equipamento) : []
    }

    get(id){
        const equipamento = this.getAll()
        return equipamento[id]
    }

    create(dados){
        const equipamento = this.getAll()
        equipamento.push(dados)
        localStorage.setItem('equipamento', JSON.stringify(equipamento))
    }

    update(id, dados){
        const equipamento = this.getAll()
        equipamento.splice(id, 1, dados)
        localStorage.setItem('equipamento', JSON.stringify(equipamento))
    }

    delete(id){
        const equipamento = this.getAll()
        equipamento.splice(id, 1)
        localStorage.setItem('equipamento', JSON.stringify(equipamento))
    }
}

export default new EquipamentoService()