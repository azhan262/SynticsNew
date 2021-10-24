import React, { useState, useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useRouteMatch, useHistory, useLocation,  useParams } from "react-router-dom";
import { Bar } from 'react-chartjs-2'
import { getAnswerSpecific } from '../../Apis/apiForAnswers';

function Perfomance() {
    let {id} = useParams()
    const location = useLocation();
    const editorRef = useRef(null);
    const history = useHistory()
    const [totalObtainedMarksHTML, setTotalObtainedMarksHTML] = useState()
    const [totalObtainedMarksCSS, setTotalObtainedMarksCSS] = useState()
    const [totalObtainedMarksJAVASCRIPT, setTotalObtainedMarksJAVASCRIPT] = useState()
    const [totalObtainedMarksBOOTSTRAP, setTotalObtainedMarksBOOTSTRAP] = useState()
    const [totalObtainedMarksPHP, setTotalObtainedMarksPHP] = useState()
    const [totalObtainedMarksLARAVEL, setTotalObtainedMarksLARAVEL] = useState()
    const [totalOriginalMarksHTML, setTotalOriginalMarksHTML] = useState()
    const [totalOriginalMarksCSS, setTotalOriginalMarksCSS] = useState()
    const [totalOriginalMarksJAVASCRIPT, setTotalOriginalMarksJAVASCRIPT] = useState()
    const [totalOriginalMarksBOOTSTRAP, setTotalOriginalMarksBOOTSTRAP] = useState()
    const [totalOriginalMarksPHP, setTotalOriginalMarksPHP] = useState()
    const [totalOriginalMarksLARAVEL, setTotalOriginalMarksLARAVEL] = useState()
    const [studentDataValues, setStudentDataValues] = useState([])
    useEffect(() => {
      
        const fetchStudentData = async function() {
          const studentData = await getAnswerSpecific(id)
          console.log(studentData)
          setStudentDataValues(studentData)
        }
        fetchStudentData() 
        
    }, [])

    const timerId = setTimeout(() => {
        chartsData()
      }, 1500);
      var testing = ''
      var arrForHTMLValues = [];
      var arrForHTMLValuesObtainedMarks = [];

      var arrForCSSValues = [];
      var arrForCSSValuesObtainedMarks = [];

      var arrForJAVASCRIPTValues = [];
      var arrForJAVASCRIPTValuesObtainedMarks = [];

      var arrForBOOTSTRAPValues = [];
      var arrForBOOTSTRAPValuesObtainedMarks = [];

      var arrForPHPValues = [];
      var arrForPHPValuesObtainedMarks = [];

      var arrForLARAVELScienceValues = [];
      var arrForLARAVELScienceValuesObtainedMarks = [];
      
      var totForHTMLValues = 0;
      
      var totForHTMLValuesObtainedMarks = 0;
      
      var totForCSSValue = 0;
      
      var totForCSSValueObtainedMarks = 0;
      
      var totForJAVASCRIPTValues = 0;
      
      var totForJAVASCRIPTValuesObtainedMarks = 0;
      
      var totForBOOTSTRAPValues = 0;
      
      var totForBOOTSTRAPValuesObtainedMarks = 0;
      
      var totForPHPValues = 0;
      
      var totForPHPValuesObtainedMarks = 0;
      
      var totForLARAVELScienceValues = 0;
      
      var totForLARAVELScienceValuesObtainedMarks = 0;

    const chartsData = () => {
        
        for (var i=0;i<studentDataValues.length;i++){
            if (studentDataValues[i].coursetype === "HTML"){
                    arrForHTMLValues.push(studentDataValues[i].totalMarks)
                    arrForHTMLValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "CSS"){
                    arrForCSSValues.push(studentDataValues[i].totalMarks)
                    arrForCSSValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "JAVASCRIPT"){
                    arrForJAVASCRIPTValues.push(studentDataValues[i].totalMarks)
                    arrForJAVASCRIPTValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "BOOTSTRAP"){
                    arrForBOOTSTRAPValues.push(studentDataValues[i].totalMarks)
                    arrForBOOTSTRAPValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "PHP"){
                    arrForPHPValues.push(studentDataValues[i].totalMarks)
                    arrForPHPValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
            else if (studentDataValues[i].coursetype === "LARAVEL Science"){
                    arrForLARAVELScienceValues.push(studentDataValues[i].totalMarks)
                    arrForLARAVELScienceValuesObtainedMarks.push(studentDataValues[i].marksObtained)
            }
        }
     
        for(var i=0;i<arrForHTMLValues.length;i++){
            totForHTMLValues +=  parseInt(arrForHTMLValues[i]);
        }
        for(var i=0;i<arrForHTMLValuesObtainedMarks.length;i++){
            if(arrForHTMLValuesObtainedMarks[i] == ""){
                arrForHTMLValuesObtainedMarks[i] = 0
              }
            totForHTMLValuesObtainedMarks +=  parseInt(arrForHTMLValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForCSSValues.length;i++){
            totForCSSValue +=  parseInt(arrForCSSValues[i]);
        }
        for(var i=0;i<arrForCSSValuesObtainedMarks.length;i++){
            if(arrForCSSValuesObtainedMarks[i] == ""){
                arrForCSSValuesObtainedMarks[i] = 0
              }
            totForCSSValueObtainedMarks +=  parseInt(arrForCSSValuesObtainedMarks[i]);
            
        }
        for(var i=0;i<arrForJAVASCRIPTValues.length;i++){
            totForJAVASCRIPTValues +=  parseInt(arrForJAVASCRIPTValues[i]);
        }
        for(var i=0;i<arrForJAVASCRIPTValuesObtainedMarks.length;i++){
            if(arrForJAVASCRIPTValuesObtainedMarks[i] == ""){
                arrForJAVASCRIPTValuesObtainedMarks[i] = 0
              }
            totForJAVASCRIPTValuesObtainedMarks +=  parseInt(arrForJAVASCRIPTValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForBOOTSTRAPValues.length;i++){
            totForBOOTSTRAPValues +=  parseInt(arrForBOOTSTRAPValues[i]);
        }
        for(var i=0;i<arrForBOOTSTRAPValuesObtainedMarks.length;i++){
            if(arrForBOOTSTRAPValuesObtainedMarks[i] == ""){
                arrForBOOTSTRAPValuesObtainedMarks[i] = 0
              }
            totForBOOTSTRAPValuesObtainedMarks +=  parseInt(arrForBOOTSTRAPValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForPHPValues.length;i++){
            totForPHPValues +=  parseInt(arrForPHPValues[i]);
        }
        for(var i=0;i<arrForPHPValuesObtainedMarks.length;i++){
            if(arrForPHPValuesObtainedMarks[i] == ""){
                arrForHTMLValuesObtainedMarks[i] = 0
              }
            totForPHPValuesObtainedMarks +=  parseInt(arrForPHPValuesObtainedMarks[i]);
        }
        for(var i=0;i<arrForLARAVELScienceValues.length;i++){
            totForLARAVELScienceValues +=  parseInt(arrForLARAVELScienceValues[i]);
        }
        for(var i=0;i<arrForLARAVELScienceValuesObtainedMarks.length;i++){
            if(arrForLARAVELScienceValuesObtainedMarks[i] == ""){
                arrForLARAVELScienceValuesObtainedMarks[i] = 0
              }
            totForLARAVELScienceValuesObtainedMarks +=  parseInt(arrForLARAVELScienceValuesObtainedMarks[i]);
            
        }
        
        
        setTotalObtainedMarksHTML(totForHTMLValuesObtainedMarks)
        setTotalObtainedMarksCSS(totForCSSValueObtainedMarks)
        setTotalObtainedMarksJAVASCRIPT(totForJAVASCRIPTValuesObtainedMarks)
        setTotalObtainedMarksBOOTSTRAP(totForBOOTSTRAPValuesObtainedMarks)
        setTotalObtainedMarksPHP(totForPHPValuesObtainedMarks)
        setTotalObtainedMarksLARAVEL(totForLARAVELScienceValuesObtainedMarks)

        setTotalOriginalMarksHTML(totForHTMLValues)
        setTotalOriginalMarksCSS(totForCSSValue)
        setTotalOriginalMarksJAVASCRIPT(totForJAVASCRIPTValues)
        setTotalOriginalMarksBOOTSTRAP(totForBOOTSTRAPValues)
        setTotalOriginalMarksPHP(totForPHPValues)
        setTotalOriginalMarksLARAVEL(totForLARAVELScienceValues)

        console.log([Math.floor(totForHTMLValuesObtainedMarks), totForCSSValueObtainedMarks, totForJAVASCRIPTValuesObtainedMarks, 
                    totForBOOTSTRAPValuesObtainedMarks, totForPHPValuesObtainedMarks, totForLARAVELScienceValuesObtainedMarks])
    }
    return (
        <>
        <div>
        <div className = "mt-5 pt-4">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Contents</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
                <h6 className="m-0 font-weight-bold text-white">Performance Charts</h6>
              </div>
              <div className="card-body">
                  <Bar 
                    data = {{
                        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'PHP', 'LARAVEL Science'],
                        datasets: [{
                            label: 'Content Results',
                            data: [totalObtainedMarksHTML, totalObtainedMarksCSS, totalObtainedMarksJAVASCRIPT, totalObtainedMarksBOOTSTRAP,
                                    totalObtainedMarksPHP, totalObtainedMarksLARAVEL],
                                },
                                {
                                    label : 'Original Marks',
                                    data: [totalOriginalMarksHTML, totalOriginalMarksCSS, totalOriginalMarksJAVASCRIPT, totalOriginalMarksBOOTSTRAP,
                                           totalOriginalMarksPHP, totalOriginalMarksLARAVEL],
                                    backgroundColor: "orange"
                                } 
                            ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                  />
              </div>
            </div>
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
                <h6 className="m-0 font-weight-bold text-white"></h6>
              </div>
              <div className="card-body">
              <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Contents</th>
                              <th>HTML</th>
                              <th>CSS</th>
                              <th>BOOTSTRAP</th>
                              <th>JAVASCRIPT</th>
                              <th>PHP</th>
                              <th>LARAVEL</th>
                              <th>REACT JS</th>
                              <th>NODE JS</th>
                              <th>MONGODB</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Original Marks
                                </td>
                                <td>{totalOriginalMarksHTML}</td>
                                <td>{totalOriginalMarksCSS}</td>
                                <td>{totalOriginalMarksJAVASCRIPT}</td>
                                <td>{totalOriginalMarksBOOTSTRAP}</td>
                                <td>{totalOriginalMarksPHP}</td>
                                <td>{totalOriginalMarksLARAVEL}</td>

                            </tr>
                            <tr>
                                <td>
                                    Obtained Marks
                                </td>
                                <td>
                                    {totalObtainedMarksHTML}
                                </td>
                                <td>
                                    {totalObtainedMarksCSS}
                                </td>
                                <td>
                                   {totalOriginalMarksJAVASCRIPT}
                                </td>
                                <td>
                                    {totalObtainedMarksBOOTSTRAP}
                                </td>
                                <td>
                                    {totalObtainedMarksPHP}
                                </td>
                                <td>
                                    {totalObtainedMarksLARAVEL}
                                </td>
                            </tr>
                          </tbody>
                    </table>
                
                </div>
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



              <div className = "mt-5 pt-4">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Assignments</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
                <h6 className="m-0 font-weight-bold text-white">Performance Charts</h6>
              </div>
              <div className="card-body">
                  <Bar 
                    data = {{
                        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'PHP', 'LARAVEL Science'],
                        datasets: [{
                            label: 'Content Results',
                            data: [totalObtainedMarksHTML, totalObtainedMarksCSS, totalObtainedMarksJAVASCRIPT, totalObtainedMarksBOOTSTRAP,
                                    totalObtainedMarksPHP, totalObtainedMarksLARAVEL],
                                },
                                {
                                    label : 'Original Marks',
                                    data: [totalOriginalMarksHTML, totalOriginalMarksCSS, totalOriginalMarksJAVASCRIPT, totalOriginalMarksBOOTSTRAP,
                                           totalOriginalMarksPHP, totalOriginalMarksLARAVEL],
                                    backgroundColor: "orange"
                                } 
                            ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                  />
              </div>
            </div>
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
                <h6 className="m-0 font-weight-bold text-white"></h6>
              </div>
              <div className="card-body">
              <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Contents</th>
                              <th>HTML</th>
                              <th>CSS</th>
                              <th>BOOTSTRAP</th>
                              <th>JAVASCRIPT</th>
                              <th>PHP</th>
                              <th>LARAVEL</th>
                              <th>REACT JS</th>
                              <th>NODE JS</th>
                              <th>MONGODB</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Original Marks
                                </td>
                                <td>{totalOriginalMarksHTML}</td>
                                <td>{totalOriginalMarksCSS}</td>
                                <td>{totalOriginalMarksJAVASCRIPT}</td>
                                <td>{totalOriginalMarksBOOTSTRAP}</td>
                                <td>{totalOriginalMarksPHP}</td>
                                <td>{totalOriginalMarksLARAVEL}</td>

                            </tr>
                            <tr>
                                <td>
                                    Obtained Marks
                                </td>
                                <td>
                                    {totalObtainedMarksHTML}
                                </td>
                                <td>
                                    {totalObtainedMarksCSS}
                                </td>
                                <td>
                                   {totalOriginalMarksJAVASCRIPT}
                                </td>
                                <td>
                                    {totalObtainedMarksBOOTSTRAP}
                                </td>
                                <td>
                                    {totalObtainedMarksPHP}
                                </td>
                                <td>
                                    {totalObtainedMarksLARAVEL}
                                </td>
                            </tr>
                          </tbody>
                    </table>
                
                </div>
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


              <div className = "mt-5 pt-4">
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Begin Page Content */}
          <div className="containerBlackDashboard-fluid">
            {/* Page Heading */}
            <h1 className="h3BlackDashboard mb-2 text-gray-800">Projects</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
                <h6 className="m-0 font-weight-bold text-white">Performance Charts</h6>
              </div>
              <div className="card-body">
                  <Bar 
                    data = {{
                        labels: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'PHP', 'LARAVEL Science'],
                        datasets: [{
                            label: 'Content Results',
                            data: [totalObtainedMarksHTML, totalObtainedMarksCSS, totalObtainedMarksJAVASCRIPT, totalObtainedMarksBOOTSTRAP,
                                    totalObtainedMarksPHP, totalObtainedMarksLARAVEL],
                                },
                                {
                                    label : 'Original Marks',
                                    data: [totalOriginalMarksHTML, totalOriginalMarksCSS, totalOriginalMarksJAVASCRIPT, totalOriginalMarksBOOTSTRAP,
                                           totalOriginalMarksPHP, totalOriginalMarksLARAVEL],
                                    backgroundColor: "orange"
                                } 
                            ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                  />
              </div>
            </div>
            <div className="card shadow mb-4 text-center">
              <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
                <h6 className="m-0 font-weight-bold text-white"></h6>
              </div>
              <div className="card-body">
              <div className="table-responsive">
        <table className="tableBlackDashboard table-bordered"  width="100%" cellSpacing={0}>
        <thead>
                              <tr>
                              <th>Contents</th>
                              <th>HTML</th>
                              <th>CSS</th>
                              <th>BOOTSTRAP</th>
                              <th>JAVASCRIPT</th>
                              <th>PHP</th>
                              <th>LARAVEL</th>
                              <th>REACT JS</th>
                              <th>NODE JS</th>
                              <th>MONGODB</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Original Marks
                                </td>
                                <td>{totalOriginalMarksHTML}</td>
                                <td>{totalOriginalMarksCSS}</td>
                                <td>{totalOriginalMarksJAVASCRIPT}</td>
                                <td>{totalOriginalMarksBOOTSTRAP}</td>
                                <td>{totalOriginalMarksPHP}</td>
                                <td>{totalOriginalMarksLARAVEL}</td>

                            </tr>
                            <tr>
                                <td>
                                    Obtained Marks
                                </td>
                                <td>
                                    {totalObtainedMarksHTML}
                                </td>
                                <td>
                                    {totalObtainedMarksCSS}
                                </td>
                                <td>
                                   {totalOriginalMarksJAVASCRIPT}
                                </td>
                                <td>
                                    {totalObtainedMarksBOOTSTRAP}
                                </td>
                                <td>
                                    {totalObtainedMarksPHP}
                                </td>
                                <td>
                                    {totalObtainedMarksLARAVEL}
                                </td>
                            </tr>
                          </tbody>
                    </table>
                
                </div>
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
              </div>
              </>
    )
}

export default Perfomance
