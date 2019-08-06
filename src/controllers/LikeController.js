const Dev = require('../models/Dev');
module.exports = {
    async store(req,body){

        console.log(req.params.devId);
        console.log(req.headers.user);

        const {devId}  = req.params;
        const {user} = req.headers;

        const loggedDev = await Dev.findById(user); //
        const targedDev = await Dev.findById(devId);

        if(!targedDev){
            return res.status(400).json({erro: 'Dev Not exists'})
        }
        if(targedDev.likes.includes(loggedDev._id)){
            console.log("Deu Match");
        }        
        loggedDev.likes.push(targedDev._id);

        await loggedDev.save();

        // return res.json({
        //     ok: true
        // })
       return res.json(loggedDev);
        // loggedDev
    }
}