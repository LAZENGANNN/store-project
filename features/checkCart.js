import {GET} from "../api/GET.js";



// const localCartArr = []
// console.log(localCartArr)
// export const checkCart = (item) =>{
//
//     let isInclude = null
//
//             if (localCartArr.includes(item.id)) {
//                 isInclude = true
//
//             } else {
//                 isInclude = false
//             }
//             console.log(isInclude)
//
//
//     GET('cart')
//         // .then(()=> {
//         //     if (localCartArr.includes(item.id)) {
//         //         isInclude = true
//         //
//         //     } else {
//         //         isInclude = false
//         //     }
//         //     console.log(isInclude)
//         // })
//         .then(
//             data => data.data.map(item => localCartArr.push(item.id))
//         )
//         .then(
//             () => {console.log(localCartArr)}
//         )
//         // .then(() => console.log(localCartArr.includes(item.id)))
//
//
//
//
//     return isInclude
// }





export const checkCart1 = (itemId) =>{
    const arr = []
    let isInArr = false
    GET('cart')
        .then(data => data.data.map(product => arr.push(product.id)) )
        .then( ()=>{
            if(arr.includes(itemId)){
                isInArr = true
            }
            else {
                isInArr = false
            }
            console.log(isInArr, arr)

        })

    return isInArr

}






