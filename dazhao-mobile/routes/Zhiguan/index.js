import zhiGuan from "../../src/components/Zhiguan/Zhiguan.jsx";

module.exports = {
    path : "zhiGuan",
    getComponents(location,cb){
        require.ensure([],()=>{
            cb(null,zhiGuan)
        },"zhiGuan")
    }
}