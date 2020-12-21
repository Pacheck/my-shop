import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const TestandoModelo = new Schema({
    type: String,
    testando: Boolean
})

const Teste = mongoose.model('AEHUIAEH', TestandoModelo);

export default Teste;
