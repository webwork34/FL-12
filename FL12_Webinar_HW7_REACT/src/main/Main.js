import React from 'react';
import { Link } from 'react-router-dom';
import CoursesList from './CoursesList';
import './styles/main.css';

function Main(props){

  const {courses, search, setSearch} = props;
  const handleInputChange = event => setSearch(event.target.value);

  return(
      <div>
        <div className="add-course">
          <label htmlFor="search" className="icon-search">
            <input 
              type="text" 
              className="search" 
              placeholder="search by title"
              value={search}
              onChange={handleInputChange}
            />
          </label>

          <Link 
            to="/add_edit_form"
            className="add_btn"
          >
            Add course</Link>
      
        </div>
        <CoursesList courses={courses}/>
      </div>
  )
}

export default Main;