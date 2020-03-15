import React from 'react';
import DropMenu from './DropMenu';
import './styles/courseItem.css';

export default function CourseItem({ course }){
  return(
    <li className="course-item">
      <span className="date">{course.date}</span>
      <span className="title">{course.title}</span>
      <span className="description">{course.description}</span>
      <span className="duration">{course.duration}</span>
      <DropMenu course={course} />
    </li>
  )
}