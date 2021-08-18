import axios from 'axios';

const baseUrl = "https://flybox-education.herokuapp.com/";
// const token = localStorage.getItem("token");

/**
 * @method: POST
 * @protected: Contact Us
 * @public : Token base
 * @access: Admin Only
 * @description: To be able to get necessary information regarding the services offered
 * @author: Olubusola 
 * Contact Form for enquiries
 */
export const httpPostWithNoToken = async (url, fd) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}${url}`, fd, {
        // headers: { Authorization: `${localStorage.api_token}` },
      })
      .then(({ data }) => {
        return resolve(data.response);
      })
      .catch((error) => {
        console.log("here>>", error.response, error.response.data);
        // console.log(error.response)
        // console.log(error.response.data.status)
        let error_msg = {
          // message: "Something went wrong. Please check and make sure everything is okay and try again",
          message: error.response.data
        };
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.response
        ) {
          error_msg = {
            message: Array.isArray(error.response.data.response.message)
              ? error.response.data.response.message[0]
              : error.response.data.response.message,
          };
        }
        return reject(error_msg);
      });
  });
};





// export const httpPostWithToken = async (url, data) => {
//   return new Promise((resolve, reject) => {
//     const token = localStorage.getItem("token");
//     axios
//       .post(`${baseUrl}${url}`, data, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//       .then(({ data }) => {
//         return resolve(data.response && data.api_key);
//       })
//       .catch((error) => {
//         // console.log("here>>", error.response);
//         let error_msg = {
//           message:
//             "Something went wrong. Please check and make sure everything is okay and try again",
//         };
//         if (
//           error &&
//           error.response &&
//           error.response.data &&
//           error.response.data.response
//         ) {
//           error_msg = {
//             message: Array.isArray(error.response.data.response.message)
//               ? error.response.data.response.message[0]
//               : error.response.data.response.message,
//           };
//         }
//         return reject(error_msg);
//       });
//   });
// };




/**
 * @method: GET
 * @private : Token Base Route
 * Get All Trucks For Auction
 * @function: Get Trucks That People want to auction route Function
 */
// export const httpGetWithToken = async (url) => {
//   return new Promise((resolve, reject) => {
//     const token = localStorage.getItem("token");
//     axios
//       .get(`${baseUrl}${url}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       })
//       .then(({ data }) => {
//         return resolve(data.response);
//       })
//       .catch((error) => {
//         // console.log("Get>>", error.response);
//         let error_message =
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong. Please check your connection and try again or contact support...!',
//             // confirmButtonText: 'Cool',
//             footer: '<a href="/admin/dashboard">Or go back to the homepage ?</a>'
//           });
//         // let error_message = {
//         //   message:
//         //     "Something has gone wrong, Please check your network and make sure every details supplied are correct and try again",
//         // };
//         if (
//           error &&
//           error.response &&
//           error.response.data &&
//           error.response.data.response
//         ) {
//           return reject(error_message);
//         }
//       });
//   });
// };

/**
 * @method: DELETE
 * @private : Token Base Route
 * Delete Truck Type
 * @function: Delete Truck Route Function
 */
// export const httpDeleteWithToken = async (url, fd) => {
//   // console.log(token)
//   return new Promise((resolve, reject) => {
//     axios.delete(`${baseUrl}${url}`, {
//       headers: {
//         "Authorization": `Bearer ${token}`
//       },
//       data: fd
//     })
//       .then(({ data }) => {
//         return resolve(data.response);
//       })
//       .catch((error) => {
//         // console.log("Error_Message>>>", error.response);
//         let error_msg = {
//           message:
//             "Something isn't right. Are You sure, you have the need right to delete this ?",
//         };
//         if (
//           error &&
//           error.response &&
//           error.response.data &&
//           error.response.data.response
//         ) {
//           error_msg = {
//             message: Array.isArray(error.response.data.response.message)
//               ? error.response.data.response.message[0]
//               : error.response.data.response.message,
//           };
//         }
//         return reject(error_msg);
//       });
//   });
// };
