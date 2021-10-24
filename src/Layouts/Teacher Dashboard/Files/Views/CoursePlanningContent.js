import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Formik, FormikConsumer, useFormik } from 'formik'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { createCoursePlannings } from '../Apis/apiForCoursePlanning'
import { getCourseForTeacher } from '../Apis/apiForTeachers';
import "../../sb-admin-2.css"
import "../../../../Sass.scss"


function CoursePlanningContentForTeacher() {
  let {id} = useParams()
  const [items, setItems] = useState()
  useEffect(() => {
    const fetchItems = async function() {
      const contents = await getCourseForTeacher(id)
      console.log(contents)
      setItems(contents)
      console.log(items)
    }
    fetchItems()
    
  }, []);
         /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()

  //const [referenceName, setReferenceName] = useState()
  //console.log(referenceName)
  
  const randomValue = Math.floor((Math.random() * 100000) + 1)
  const randomName = id + randomValue
  
  console.log(randomName)
  const onSubmitHandler = async (data) => {
    data.coursetype = items.subjectChoosenForApplication
    if ((data.questiontype === "Text") && (data.answertype === "English Text")){
      history.push({
        pathname:`/teacher/adult-course-content-text-qa/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
      history.push({
        pathname:`/teacher/adult-course-content-text-mcq/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/adult-course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Video")){
      history.push({
        pathname:`/teacher/adult-course-content-text-video/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Audio")){
      history.push({
        pathname:`/teacher/adult-course-content-text-audio/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
      history.push({
        pathname:`/teacher/adult-course-content-text-blanks/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Handwriting")){
      history.push({
        pathname:`/teacher/adult-course-content-text-handwriting/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Digital Urdu")){
      history.push({
        pathname:`/teacher/adult-course-content-text-digitalUrdu/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "Text") && (data.answertype === "Drawing")){
      history.push({
        pathname:`/teacher/adult-course-content-text-drawing/${id}`,
        state: data
      })
    }
    else if ((data.questiontype === "File Upload")){
      history.push({
        pathname:`/teacher/adult-course-content-file-upload/${id}`,
        state: data
      })
    }
    
    //history.push('/placement-question-details')
  }
  
  /*const onSubmit = async (data) => {
    //console.log(data)
    await createCoursePlannings(data)
    //await createQuestions(data)
    //await createPlacementTestQuestions(data)
    //redirecting 
    //history.push("/")
  };
  */
    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
           coursetype:'',
           activitytype:'',
           questiontype:'',
           answertype:'',
           questioncontent:'',
           totalmarks:'',
           grade:'',
           teacherId: {id},
           referenceName: randomName
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          //onSubmit(formik.values)
          onSubmitHandler(formik.values)

        },

        //5 Make validation property


    })

    console.log("Form errors", formik.errors)
    return (
        <>
      <div className = "mt-5 pt-4">
               {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Course Planning</h1>
    {/* DataTales Example */}
    <div className="card shadow mb-4 text-center">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold text-white">Content</h6>
      </div>
      <div className="card-body">
        <div>
        <form onSubmit={formik.handleSubmit}>
                    <div className="form-group" >
                          <label htmlFor="sel1">Course Type</label>
                          <select name="coursetype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.coursetype} className="form-control" >
                          {items != null ? 
                          <option>{items.subjectChoosenForApplication}</option>
                          :
                          <option></option>
                          }
                          </select>
                          {formik.touched.coursetype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.coursetype}</div>) : null}
                        </div>
                        <div className="form-group">
                          <label htmlFor="sel1">Class Grade</label>
                          <select name="grade" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.grade} className="form-control" >
                            <option>Select Class Grade</option>                  
                            <option >Grade 1</option>
                            <option >Grade 2</option>
                            <option >Grade 3</option>
                            <option >Grade 4</option>
                            <option >Grade 5</option>
                            <option >Grade 6</option>
                            <option >Grade 7</option>
                            <option >Grade 8</option>
                            <option >Grade 9</option>
                            <option >Grade 10</option>
                            <option >Grade 11</option>
                            <option >Grade 12</option>
                          </select>
                          {formik.touched.grade ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.grade}</div>) : null}

                        </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Question Type</label>
                          <select name="questiontype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.questiontype} className="form-control" >
                          <option>Select Question Type</option>                  
                            <option>Text</option>
                          </select>
                          {formik.touched.questiontype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.questiontype}</div>) : null}
                        </div>
                      </div>
                      <div>
                          <div className="form-group">
                          <label htmlFor="sel1">Answer Type</label>
                          <select name="answertype" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.answertype} className="form-control" >
                          <option>Select Answer Type</option>                  
                            <option>Multiple Choice</option>
                            <option>Video</option>
                            <option>Audio</option>
                            <option>English Text</option>
                            <option>Fill in the Blanks</option>
                            <option>Digital Urdu</option>
                            <option>Drawing</option>
                            <option>Handwriting</option>
                          </select>
                          {formik.touched.answertype ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.answertype}</div>) : null}
                        </div>
                      </div>
                      <center>
                      <div>    
                      <div className="buttonNewTheme mt-3 mb-3 text-center">
                        <button type="submit" className="btnSass play-pause buttonSass" style = {{fontWeight : 'bold', height:"100px", width: "100px"}}>
                          Submit
                        </button>
                      </div>
                    </div>
                    </center>
                    </form>
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
    </>
    )
}



export default CoursePlanningContentForTeacher
