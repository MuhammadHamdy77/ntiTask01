const Orders = require('../db/model/orders.model');

class OrderController{


    static allOrder = async(req,res)=>{
        try{
            await req.user.populate('myOrders')
            res.send(req.user.myOrders)
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e.message, message:"error Orders"})
        }
    }

    static addOrder = async (req,res)=>{

    try{
        const newOrder = await new Orders({ user:req.body.user , product:req.body.product })
        await newOrder.save()
        res.status(200).send({
            apiStatus:true,
            data: newOrder,
            message: "Order inserted succefully "
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:"",
            message: e.message
        })
    }
    }

    static updateOrder = async(req,res)=>{

        let newProduct = req.body.product
        console.log(newProduct);
        let orderId = req.params.id
        
        try{
            let order = await Orders.find({_id:orderId})
            let oldProduct = order[0].product
            if(!order) res.status(404).send({apiStatus:false,data:'',message:"Order Not Found"})
           
            for(var i = 0 ; i < newProduct.length ; i++){

                for(var j = 0 ; j < oldProduct.length ; j++){

                    if(newProduct[i]._id === oldProduct[j]._id){
                     
                        oldProduct[j].quantity = Number(oldProduct[j].quantity) + Number(newProduct[i].quantity)
                        newProduct.splice(newProduct[i],1)
                        break;
                    }
                }
            }
           
            oldProduct = oldProduct.concat(newProduct)

            const newOrder = {product:oldProduct}
            Orders.updateOne({_id:req.params.id}, {$set: newOrder})
            .then(doc=>{
                res.status(200).send({
                    apiStatus:true,
                    data:doc,
                    message:"Success"
                })
            })
            .catch(e =>{
                res.status(500).send({
                      apiStatus:false,
                      data:"",
                      message: e.message
                })
            })
        }

        catch(e){

      res.status(500).send({
            apiStatus:false,
            data:"",
            message: e.message
        })

        }
    }
}


module.exports = OrderController