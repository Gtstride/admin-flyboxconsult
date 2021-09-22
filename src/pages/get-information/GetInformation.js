import React, { useState, useEffect } from 'react'

// Import Different Packages here.
import ReactPaginate from 'react-paginate'
// import Swal from 'sweetalert2'

// Import Internal Files
import Navbar from '../../components/shared/Navbar'
import Sidebar from '../../components/shared/Sidebar'
import {
  httpGetWithToken,
  httpDeleteWithToken
} from '../../components/helper/api'


const GetInformation = () => {

  const [user, setUser] = useState([]);
  const [loading, setIsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage

  // Page Count 
  const pageCount = Math.ceil(user.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const getAllGeneralInfo = async () => {
    try {
      setIsLoading(true);
      let res = await httpGetWithToken("relocation_forms");
      console.log(res);
      setUser(res);
      // setIsLoading(false);
    } catch (error) {
      console.log(error && error.message)
    }
  };
  const deleteContact = async (id) => {
    try {
      let response = await httpDeleteWithToken("contacts/:id", { id: id });
      console.log(response);
      setIsLoading(true);
      // Swal.fire({
      //   title: "Success",
      //   text: response.message,
      //   type: "error",
      // });
      // setTruck(res.data);
      getAllGeneralInfo();
      // console.log(setTruck)
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {

    getAllGeneralInfo();
    // deleteContact();
  }, [])


  const renderTableHeader = () => {
    let headerElement = ["#", "name", "email", "phone_Number", "Information_about", "action", "status"];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };


  const renderBodyData = () => {
    return (
      user &&
      user
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map(({ id, name, email, phoneNumber, chooseWhatYouWantToKnowAbout }) => {
          return (
            <tr key={id}>
              <td>{"#"}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
              <td>{chooseWhatYouWantToKnowAbout}</td>


              <td className="text-center">
                {loading ? (
                  <a href onClick={() => deleteContact(id)} data-toggle="tooltip" data-placement="top" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
                      <polyline points="3 6 5 6 21 6"></polyline> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </a>) : (<button>Delete</button>)}
              </td>
              <td className="text-center"><span className="badge badge-success">Attended</span></td>
            </tr>
          );
        })
    );
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="content" className="main-content">
        <div className="container">
          <div className="row layout-top-spacing">
            <div id="tableDropdown" className="col-lg-12 col-12 layout-spacing">
              <div className="statbox widget box box-shadow">
                <div className="widget-header">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                      <h4>General Enquries' Table</h4>
                    </div>
                  </div>
                </div>
                <div className="widget-content widget-content-area">
                  <div className="table-responsive">
                    <table className="table table-bordered mb-4">
                      <thead>
                        <tr>{renderTableHeader()}</tr>
                      </thead>
                      <tbody>{renderBodyData()}</tbody>
                    </table>
                  </div>
                  <div className="tableFooter">
                    <ReactPaginate
                      className="paginateButton"
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationButton"}
                      previousLinkClassName={"previousButton"}
                      nextLinkClassName={"nextButton"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInformation