import ZhaoDaIndex from "../../../src/components/Zhaoda/ZhaoDaIndex/ZhaoDaIndex.jsx";

module.exports = {
    path : "main",
    getComponents(location,cb){
        require.ensure([],()=>{
            cb(null,ZhaoDaIndex)
        })
    }
}