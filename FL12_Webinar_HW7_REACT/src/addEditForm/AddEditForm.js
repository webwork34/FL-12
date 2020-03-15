import React, {useState, useEffect} from 'react';
import './addEditForm.css';

 function AddEditForm(props){
  const {courseToEdit, resetCourseToEdit} = props;

  useEffect(() => {
    return () => {
      resetCourseToEdit();
    }
  }, [resetCourseToEdit]);

  const [inputValues, setInputValues] = useState({
    title: (courseToEdit && courseToEdit.title) || '', 
    description: (courseToEdit && courseToEdit.description) || '', 
    duration: (courseToEdit && courseToEdit.duration) || '', 
    authors: (courseToEdit && courseToEdit.authors) || '',
    date: (courseToEdit && courseToEdit.date) || ''
  });
  
  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputValues(prevValues => ({ ...prevValues, [name]: value }));
  };


  const onSave = () => {
    if(inputValues.title.trim().length > 0 &&
      inputValues.description.trim().length > 0 &&
      inputValues.duration.trim().length > 0 &&
      inputValues.authors.trim().length > 0 &&
      inputValues.date.length === 10)
    {
      const {onCreate, history, saveCourse} = props;
      if(courseToEdit){
        const editedCourse = { 
          ...inputValues,
          id: courseToEdit.id
        }
        saveCourse(editedCourse);
      }else{
        onCreate(inputValues);
      }
      history.push('/');
    }else{
      alert('You should complete all fields');
    }
  }

  const cancelBtn = () => {
    props.history.push({
      pathname: '/'
    });
  }

  return(
    <div>
      <div className="add-edit">
      <h2 >{inputValues.title || 'Course title'}</h2>

      <p>Title*</p>
      <input
        type="text"
        name="title"
        value={inputValues.title}
        className="width-input heigh-input border"
        onChange={handleInputChange}
      />

        <p>Description*</p>
        <textarea 
          name="description"
          className="width-input border textarea"
          onChange={handleInputChange}
          value={inputValues.description}
        ></textarea>

        <div className="dad">
          <div>
            <p>Duration*</p>
            <input
              type="text"
              name="duration"
              className="heigh-input border"
              onChange={handleInputChange}
              value={inputValues.duration}
            />

            <p>Authors*</p>
            <input
              type="text"
              name="authors"
              className="heigh-input border"
              onChange={handleInputChange}
              value={inputValues.authors}
            />
          </div>

          <div>
            <p>Date*</p>
            <input
              type="date" 
              name="date"
              onChange={handleInputChange}
              value={inputValues.date}
            />
          </div>
        </div>

        <br/>
        <button
          onClick={onSave}
        >Save</button>

        <button 
          onClick={cancelBtn}
        >Cancel</button>

      </div>
    </div>
  )
}

export default AddEditForm;