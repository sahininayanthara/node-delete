const fs = require('fs');
fs.mkdir ('tute1', (err)=>{
    if(err){
        console.log(err);
    }else{
        fs.rmdir('tute1', (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('successfully deleted the folder');
            }
        });
    }
})
