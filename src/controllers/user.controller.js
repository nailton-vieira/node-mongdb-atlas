
const create = (req, res) => {
const {nome, senha, email} = req.body;

if (!nome || !senha || !email) {

        res.status(400).send({message:"registro não encontrado"})
}

res.status(201).send({
        message: "Usuario cadstrado com sucesso",
        user: {
                nome,
                senha, 
                email
        },
   
});
};


module.exports = {create};