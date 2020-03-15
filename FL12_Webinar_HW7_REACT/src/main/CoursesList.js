import React from 'react';
import CourseItem from './CourseItem';

export default function CoursesList(props){
  return(
    <ul>
      { props.courses.map(course => {
         return <CourseItem 
                  course={course} 
                  key={course.id}
                />
        }) 
      }
    </ul>
  )
}