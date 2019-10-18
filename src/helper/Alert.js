import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";


export const AlertAddToCart = () => {
    Swal.fire({
        type: 'success',
        title: 'Added To Cart',
        showConfirmButton: false,
        timer: 1500
      })
}

export const AlertCheckout = () => {
  Swal.fire({
    type: 'success', title: "Thank you :)", showConfirmButton: false, timer: 1500
  })
}


