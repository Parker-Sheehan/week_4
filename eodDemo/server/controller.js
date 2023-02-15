let arr = ["Lukas", "Tobin", "Draden", "Casey", "Anthony"]

module.exports = {
    getNames: (req,res) => {
        res.status(200).send(arr)
    },
    addName: (req,res) => {
        arr.push(req.params.name)
        res.status(200).send(arr)
    }
}