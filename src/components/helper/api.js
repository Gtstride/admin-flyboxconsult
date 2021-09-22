import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = "https://flybox-education.herokuapp.com/";
const token = localStorage.getItem("token");

/**
 * @method: POST
 * @protected: No
 * @public : No Token base
 * @access: Every One Have Access
 * @description: For posting data to the backend and also for login for the admin
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
        //console.log(data);
        let res = data.response ? data.response : data
        return resolve(res);
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


/**
 * @method: GET
 * @private : Token Base Route
 * Get All Information onto a table for the Admin
 * @function: Get Users Information
 */
export const httpGetWithToken = async (url) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    axios
      .get(`${baseUrl}${url}`, {
        // credentials: 'include',
        headers: {
          'x-access-token': token
        }
      })
      .then(({ data }) => {
        let res = data.response ? data.response : data
        console.log(res)
        return resolve(res);
      })
      .catch((error) => {
        console.log("Get>>", error.response);
        let error_message =
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            // text: `${error.message} ${'Something went wrong, Please check your connection and try again or contact support...!'}`,
            text: error.message
            // text: '. ',
            // footer: '<a href="/admin/dashboard">Or go back to the homepage ?</a>'
          });
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.response
        ) {
          return reject(error_message);
        }
      });
  });
};

/**
 * @method: DELETE
 * @private : Token Base Route
 * Delete Truck Type
 * @function: Delete Truck Route Function
 */
export const httpDeleteWithToken = async (url, fd) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${baseUrl}${url}`, {
      headers: {
        'x-access-token': token
      },
      data: fd
    })
      .then(({ data }) => {
        let res = data.response ? data.response : data
        console.log(data);
        Swal.fire({
          icon: 'success',
          text: 'Successfully Deleted'
        })
        return resolve(res);
      })
      .catch((error) => {
        console.log("Error_Message>>>", error.data);
        // let error_msg = {
        //   message:
        //     "Something isn't right. Are You sure, you have the need right to delete this ?",
        // };
        let error_message =
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            // text: `${error.message} ${'Something went wrong, Please check your connection and try again or contact support...!'}`,
            text: error.message
            // text: '. ',
            // footer: '<a href="/admin/dashboard">Or go back to the homepage ?</a>'
          });
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.response
        ) {
          error_message = {
            message: Array.isArray(error.response.data.response.message)
              ? error.response.data.response.message[0]
              : error.response.data.response.message,
          };
        }
        return reject(error_message);
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