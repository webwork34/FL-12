import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Route } from 'react-router-dom';
import Main from './main/Main';
import AddEditForm from './addEditForm/AddEditForm';
import Context from './context';
import './App.css';

function App(props) {

  const [search, setSearch] = useState('');
  const [courseToEdit, setCourseToEdit] = useState(null);

  const [courses, setCourses] = useState([]);

  const addNewCourse = course => { 
    const newCourse = {...course, id: v4()};
    setCourses(prevCourses => ([...prevCourses, newCourse]));
  };

  const filteredCourses = courses.filter(course => course.title.includes(search));

  const deleteCourse = id => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const editCourse = (course) => {
    const {history}=props
    setCourseToEdit(course);
    history.push('/add_edit_form');
  };

  const resetCourseToEdit = () => {
    setCourseToEdit(null);
  };

  const saveCourse = course => {
    setCourses(prevCourses => (prevCourses.map((item) => (
      item.id === course.id ? course : item
    ))));
  };

  return (
    <Context.Provider value={{deleteCourse, editCourse}}>
      <div className="App">
        <Route 
          path="/"
          exact
          render={routProps => (<Main 
                                  {...routProps} 
                                  courses={filteredCourses} 
                                  search={search} 
                                  setSearch={setSearch}  
                                />)
                  }
        />

        <Route 
          path="/add_edit_form"
          render={routProps => (<AddEditForm 
                                  {...routProps} 
                                  onCreate={addNewCourse}  
                                  courseToEdit={courseToEdit} 
                                  resetCourseToEdit={resetCourseToEdit}
                                  saveCourse={saveCourse}
                                />)
                  } 
        /> 

      </div>
    </Context.Provider>
    
    );
  }

export default App;