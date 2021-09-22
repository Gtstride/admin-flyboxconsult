import React, { useState, useEffect } from 'react'

// Import Packages here
import ReactPaginate from 'react-paginate'
import Swal from "sweetalert2"

import Navbar from '../../components/shared/Navbar'
import Sidebar from '../../components/shared/Sidebar'
import { httpGetWithToken } from '../../components/helper/api'


const AustraliaTable = () => {

  const [getAustraliaFormsSubmitted, setAustraliaFormsSubmitted] = useState([]);
  const [loading, setIsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0);

  const formsSubmittedPerPage = 10;
  const pagesVisited = pageNumber * formsSubmittedPerPage

  // Page Count 
  const pageCount = Math.ceil(getAustraliaFormsSubmitted.length / formsSubmittedPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const getAllAustraliaFormsSubmitted = async () => {
    try {
      setIsLoading(true);
      let res = await httpGetWithToken("australia_forms");
      console.log(res);
      setAustraliaFormsSubmitted(res);
      // setIsLoading(false);
    } catch (error) {
      console.log(error && error.message)
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
      });
    }
  };

  useEffect(() => {
    getAllAustraliaFormsSubmitted();
  }, [])


  const renderTableHeader = () => {
    let headerElement =
      [
        "#", "email", "phone_Number", "given_Name", "middle_Name", "family_Name", "birthDate", "house_Address", "immigration_History", "country_Of_Citizenship",
        "gender", " australia_Denial_Letter", "program_level", "highest_Level_Of_Education", "desired_course_of_study", "action", "status"
      ];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  // australiaDenialLetter

  const renderBodyData = () => {
    return (
      getAustraliaFormsSubmitted &&
      getAustraliaFormsSubmitted
        .slice(pagesVisited, pagesVisited + formsSubmittedPerPage)
        .map(({ id, email, phoneNumber, givenName, middleName, familyName, birthDate, houseAddress, immigrationHistory, countryOfCitizenship,
          gender, visaDenialLetter, programLevel, highestLevelOfEducation, desiredCourseOfStudy
        }
        ) => {
          return (
            <tr key={id}>
              <td>{"#"}</td>
              <td>{email}</td>
              <td>{phoneNumber}</td>
              <td>{givenName}</td>
              <td>{middleName}</td>
              <td>{familyName}</td>
              <td>{birthDate}</td>
              <td>{houseAddress}</td>
              <td>{immigrationHistory}</td>
              <td>{countryOfCitizenship}</td>
              <td>{gender}</td>
              <td>{visaDenialLetter}</td>
              <td>{programLevel}</td>
              <td>{highestLevelOfEducation}</td>
              <td>{desiredCourseOfStudy}</td>
              {/* <td className="text-center">
                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Delete">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
                    <polyline points="3 6 5 6 21 6"></polyline> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </a>
              </td> */}
              <td className="text-center">
                <div className="dropdown custom-dropdown">
                  <a className="dropdown-toggle" href="#/"
                    role="button"
                    id="dropdownMenuLink4"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24} height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-horizontal"
                    >
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                      <circle cx={5} cy={12} r={1} />
                    </svg>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                    <button class="btn btn-info mb-3" type="button" onClick={null}>Download</button>
                    <button class="btn btn-danger" type="button" onClick={null}>Delete</button>

                    <a href="#/" data-toggle="tooltip" data-placement="top" title="Delete">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </td>
              {loading ? (
                <td className="text-center"><span className="badge badge-success">Attended</span></td>
              ) : (<></>)
              }
            </tr>
          );
        })
    );
  };

  return (
    <>
      <div className="main-container" id="container">
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
                        <h4>AUSTRALIA TABLE</h4>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content widget-content-area">
                    <div className="table-responsive">
                      <table className="table table-bordered mb-4">
                        <thead>
                          <tr>
                            {renderTableHeader()}
                          </tr>
                        </thead>
                        <tbody> {renderBodyData()} </tbody>
                      </table>
                    </div>

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

export default AustraliaTable
