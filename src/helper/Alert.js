import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// export const AlertDelete = () => {
//   Swal.fire({
//     title: "Are you sure?",
//     type: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#b22222",
//     cancelButtonColor: "#91b237",
//     confirmButtonText: "Remove"
//   }).then(result => {
//     if (result.value) {
//       Swal.fire("You mean", "Success");
//     } else{
//       Swal.fire("Yeay you cancel it");
//     }
//   });
// };



export const AlertAddToCart = () => {
    Swal.fire({
        type: 'success',
        title: 'Added To Cart',
        showConfirmButton: false,
        timer: 1500
      })
}


