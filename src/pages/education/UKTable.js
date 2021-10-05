import React, { useState, useEffect } from 'react'

// Import Packages here
import ReactPaginate from 'react-paginate'
import { Button } from 'react-bootstrap'
import Swal from "sweetalert2"

import Navbar from '../../components/shared/Navbar'
import Sidebar from '../../components/shared/Sidebar'
import Footer from '../../components/shared/Footer'
import PreLoader from '../../components/shared/PreLoader'
import { httpGetWithToken, httpDeleteWithToken } from '../../components/helper/api'


const UKTable = () => {

  const [getAllUKFormsSubmitted, setAllUKFormsSubmitted] = useState([]);
  const [loading, setIsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0);
  // const [counter, setCounter] = useState(0)

  const formsSubmittedPerPage = 10;
  const pagesVisited = pageNumber * formsSubmittedPerPage

  // Page Count 
  const pageCount = Math.ceil(getAllUKFormsSubmitted.length / formsSubmittedPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const getAllUKSubmittedForms = async () => {
    try {
      setIsLoading(true);
      let res = await httpGetWithToken("uk_forms");
      setAllUKFormsSubmitted(res);
    } catch (error) {
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
      });
    }
  };

  const deleteSingleDetail = async (id) => {
    try {
      let response = await httpDeleteWithToken(`uk/${id}`, { id: id });
      setIsLoading(true);
      Swal.fire({
        icon: 'success',
        // title: 'This record and it`s details has been deleted Successfully!',
        text: response.message,
    })
      window.setTimeout(function(){window.location.reload()},2000)
      getAllUKSubmittedForms();
    } catch (error) {
      // console.warn("error", error.response);
      Swal.fire({
        icon: 'Sorry',
        // title: 'This record and it`s details has been deleted Successfully!',
        text: error.response
      })
    }
  }

  useEffect(() => {
    getAllUKSubmittedForms();
  }, [])


  const renderTableHeader = () => {
    let headerElement =
      [
        "#", "email", "phone_Number", "given_Name", "middle_Name", "family_Name", "birthDate", "house_Address", "immigration_History", "country_Of_Citizenship",
        "gender", " uk_Denial_Letter", "program_level", "highest_Level_Of_Education", "desired_course_of_study", "action"
      ];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  // australiaDenialLetter

  const renderBodyData = () => {
    return (
      getAllUKFormsSubmitted &&
      getAllUKFormsSubmitted
        .slice(pagesVisited, pagesVisited + formsSubmittedPerPage)
        .map(({ _id, email, phoneNumber, givenName, middleName, familyName, birthDate, houseAddress, immigrationHistory, countryOfCitizenship,
          gender, visaDenialLetter, programLevel, highestLevelOfEducation, desiredCourseOfStudy
        }
        ) => {
          return (
            <tr key={_id}>
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
              <td>
                Click to Download
                <div className="dropdown custom-dropdown">
                  <a className="dropdown-toggle" href="#/" role="button" id="dropdownMenuLink4" data-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                      <circle cx={12} cy={12} r={1} /> <circle cx={19} cy={12} r={1} /> <circle cx={5} cy={12} r={1} />
                    </svg>
                  </a>
                  <div className="dropdown-menu" style={{ backgroundColor: "rgb(196 220 239)" }} aria-labelledby="dropdownMenuLink4">
                    <a href={visaDenialLetter} target="_blank" rel="noreferrer">{visaDenialLetter}</a>
                  </div>
                </div>
              </td>
              <td>{programLevel}</td>
              <td>{highestLevelOfEducation}</td>
              <td>{desiredCourseOfStudy}</td>
              <td className="text-center">
                <div className="dropdown custom-dropdown">
                  <a className="dropdown-toggle" href="/#"
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
                    <Button variant="danger" onClick={() => deleteSingleDetail(_id)}>
                      Delete
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </Button>
                  </div>
                </div>
              </td>
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
                        <h4>UNITED KINGDOM TABLE</h4>
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
                        {loading ? (<tbody>{renderBodyData()}</tbody>) : (
                          <PreLoader />
                        )}
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
      <Footer />
    </>
  )
}

export default UKTable
