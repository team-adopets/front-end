import {cartTypes} from "../_actions/types/_cartTypes"

const initState = {
    items: [
        {id:1,
            title:'Labrador Retriever', 
            species:"Purebred", 
            desc: "Chearful, gentle, friendly, inteligent", 
            price:110,
            imgUrl: "https://images.unsplash.com/photo-1551135611-73f5dada3b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {id:2,
            title:'French Buldog', 
            species: "Purebred", desc: "Playful, socialable, lively, patient", 
            price:80,
            imgUrl:"https://images.unsplash.com/photo-1494870363241-b5225be3dada?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {id:3,
            title:'German Sheperd', 
            species:"Purebred", 
            desc: "Couragous, Inteligent, Joyful, Watchfull",
            price:120,
            imgUrl:"https://images.unsplash.com/photo-1560830672-575980201c33?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
        {id:4,
            title:'Golden Retriever', 
            species:"Purebred", 
            desc: "Inteligent, Kind, friendly, confident", 
            price:260,
            imgUrl: "https://images.unsplash.com/photo-1501609261518-13fe5393a049?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {id:5,
            title:'Bulldog', 
            species:"Purebred", 
            desc: "Friendly, docile, willful, gregarious", 
            price:160,
            imgUrl: "https://images.unsplash.com/photo-1563889958758-ac0d8a9dfb05?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        },
    ],
    addedItems:[],
    total: 0

}

const cartReducer = (state = initState, action) =>{    
    if (action.type === cartTypes.ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existedItem = state.addedItems.find(item => action.id === item.id)
        if (existedItem) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItem : [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else {
        return state;
    }
}

export default cartReducer

