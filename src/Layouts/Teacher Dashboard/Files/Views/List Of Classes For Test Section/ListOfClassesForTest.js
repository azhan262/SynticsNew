import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {BrowserRouter as Router, Switch, Link, Route, useHistory, useParams } from 'react-router-dom' 
import { CDBBtn, CDBContainer } from "cdbreact";
import "../../../SubjectCard.scss"

function ListOfClassesForTestForTeacher() {
  let {id} = useParams()
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault()
    if (e.target.value == "Grade 1"){
      history.push(`/teacher/Grade-1-content-test/${id}`)
    }
    else if (e.target.value == "Grade 2"){
      history.push(`/teacher/Grade-2-content-test/${id}`)
    }
    else if (e.target.value == "Grade 3"){
      history.push(`/teacher/Grade-3-content-test/${id}`)
    }
    else if (e.target.value == "Grade 4"){
      history.push(`/teacher/Grade-4-content-test/${id}`)
    }
    else if (e.target.value == "Grade 5"){
      history.push(`/teacher/Grade-5-content-test/${id}`)
    }
    else if (e.target.value == "Grade 6"){
      history.push(`/teacher/Grade-6-content-test/${id}`)
    }
    else if (e.target.value == "Grade 7"){
      history.push(`/teacher/Grade-7-content-test/${id}`)
    }
    else if (e.target.value == "Grade 8"){
      history.push(`/teacher/Grade-8-content-test/${id}`)
    }
    else if (e.target.value == "Grade 9"){
      history.push(`/teacher/Grade-9-content-test/${id}`)
    }
    else if (e.target.value == "Grade 10"){
      history.push(`/teacher/Grade-10-content-test/${id}`)
    }
    else if (e.target.value == "Grade 11"){
      history.push(`/teacher/Grade-11-content-test/${id}`)
    }
    else if (e.target.value == "Grade 12"){
      history.push(`/teacher/Grade-12-content-test/${id}`)
    }

  }
    return (
      <div className="container-fluid">
      <div>
          
  <>
<div>
 {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
{/* Begin Page Content */}
<div className="containerBlackDashboard-fluid">
{/* Page Heading */}
<h1 className="h3BlackDashboard mb-2 text-gray-800">List of Grades for Test Content</h1>

{/* DataTales Example */}
<div className="card shadow mb-4">
<div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
<h6 className="m-0 font-weight-bold text-white">Select A Grade</h6>
</div>
<div className="card-body">
<Row className="mt-3">
    <Col md="4">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 1" onClick = {(e) => handleClick(e)} >
                              Grade 1
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 2" onClick = {(e) => handleClick(e)} >
                              Grade 2
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 3" onClick = {(e) => handleClick(e)} >
                              Grade 3
                            </button>
                          </div>
      </Col>
      </Row>
      <Row className="mt-3">
    <Col md="4">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 4" onClick = {(e) => handleClick(e)} >
                              Grade 4
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 5" onClick = {(e) => handleClick(e)} >
                              Grade 5
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 6" onClick = {(e) => handleClick(e)} >
                              Grade 6
                            </button>
                          </div>
      </Col>
      </Row>
      <Row className="mt-3">
    <Col md="4">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 7" onClick = {(e) => handleClick(e)} >
                              Grade 7
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 8" onClick = {(e) => handleClick(e)} >
                              Grade 8
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 9" onClick = {(e) => handleClick(e)} >
                              Grade 9
                            </button>
                          </div>
      </Col>
      </Row>
      <Row className="mt-3">
    <Col md="4">
    <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 10" onClick = {(e) => handleClick(e)} >
                              Grade 10
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 11" onClick = {(e) => handleClick(e)} >
                              Grade 11
                            </button>
                          </div>
      </Col>
      <Col md="4">
      <div className="containerCard mt-3 mb-3">
                            <button className="btnCard play-pause buttonCard" style = {{fontWeight : "bold" }} value = "Grade 12" onClick = {(e) => handleClick(e)} >
                              Grade 12
                            </button>
                          </div>
      </Col>
      </Row>
</div>
</div>
</div>

{/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
<div className="containerBlackDashboard my-auto">
<div className="copyright text-center my-auto">
<span></span>
</div>
</div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
</div>
</>


      </div>
  </div>
  
    )
}

export default ListOfClassesForTestForTeacher
