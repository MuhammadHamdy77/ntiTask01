const bcrypt = require('bcryptjs');


const endPass =  async(txt)=>{
    const d  = await bcrypt.hash(txt,1)
    console.log(d)
    const isValid  = await bcrypt.compare('221',d)
    console.log(isValid)
    
}

endPass("122")