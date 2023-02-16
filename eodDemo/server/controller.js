let arr = ["Lukas", "Tobin", "Draden", "Casey", "Anthony"]

module.exports = {
    getNames: (req,res) => {
        res.status(200).send(arr)
    },
    addName: (req,res) => {
        console.log(req.params.name)
        res.status(200).send(req.params.name)
    },
    deleteName : (req,res) => {
        let {index} = req.params
        arr.splice(+index,1)
        res.status(200).send(arr)
    }
}