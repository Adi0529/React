export const cartInitialState = {
    cart: [],
    discount: 5,
    platformFee: 100,
    deliveryCharges: 50,
    totalAmount: 0,
    login:false,
    user:"",
    length: 0
}
function calculateAmount(updateCart, dis, platFee, delCharge,user) {

    const tAmount = updateCart.reduce((tamt, p) => {
        return tamt + p.productPRICE * p.productQuantity
    }, 0)

    let disAmt = tAmount - (tAmount * (dis / 100))

    let totalAMT = disAmt + platFee + delCharge
    return {
        cart: updateCart,
        discount: dis,
        platformFee: platFee,
        deliveryCharges: delCharge,
        totalAmount: totalAMT,
        login:false,
        user:user,
        length: updateCart.length
    }

}

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const indexOfCartProd = state.cart.findIndex(e => e.productID == action.payload.id)
            let updatedCart
            if (indexOfCartProd == -1) {
                const updatedCartProd = {
                    id: Date.now(),
                    productID: action.payload.id,
                    productNAME: action.payload.title,
                    productPRICE: action.payload.price,
                    productThumbnail: action.payload.thumbnail,
                    productCategory: action.payload.category,
                    productQuantity: 1
                }
                updatedCart = [...state.cart, updatedCartProd]
            } else {
                updatedCart = state.cart.map((e) => {
                    if (e.productID == action.payload.id) {
                        return { ...e, productQuantity: e.productQuantity + 1 }
                    }
                    return e
                })
            }
            return calculateAmount(updatedCart, state.discount, state.platformFee, state.deliveryCharges,state.user)
        }
        case "REMOVE_FROM_CART": {

            const updatedCart = state.cart.filter(
                item => item.productID !== action.payload
            );

            return calculateAmount(
                updatedCart,
                state.discount,
                state.platformFee,
                state.user,
                state.deliveryCharges
            );
        }
        case "INCREASE_QUANTITY":{
            const updateCart = state.cart.map(
                item =>{
                    if(action.payload==item.productID){
                        return{... item,productQuantity:item.productQuantity+1}
                    }
                    return item;
                }
            )
            return calculateAmount(
                updateCart,
                state.discount,
                state.platformFee,
                state.user,
                state.deliveryCharges
            );

        }
        case "DECREASE_QUANTITY":{
            const updatedcart=state.cart.map(e=>
             {
                if(action.payload==e.productID){
                    if(e.productQuantity>1){
                    return{...e,productQuantity:e.productQuantity-1}
                    }
                    return null;

                }
                return e;
            }
            ).filter(Boolean);
            return calculateAmount(
                updatedcart,
                state.discount,
                state.platformFee,
                state.user,
                state.deliveryCharges
            );

        }
        case "LOGIN":{
            return{
                ...state,login:true,user:action.payload
            }
        }
        case "logout":{
            return{
                ...state,login:false
            }
        }
        default:
            return state
    }
}




