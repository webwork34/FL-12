import React, {useState, useContext, useRef, useEffect, useCallback} from 'react';
import Context from './../context';
import picDel from './../delete.svg';
import picEdit from './../edit.svg';
import './styles/dropMenu.css';


export default function DropMenu({course}){
  const { editCourse } = useContext(Context);
  const  { deleteCourse } = useContext(Context);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const clickOutside = useCallback(e => {
    if(e.target !== wrapperRef.current){
      setOpen(false);
      window.removeEventListener('click', clickOutside);
    }
  }, [wrapperRef]);
  
  useEffect(() => {
    if(open){
      window.addEventListener('click', clickOutside);
    }
    return () => {
      window.removeEventListener('click', clickOutside);
    }
  }, [open, clickOutside]);

  const dropMenu = () => {setOpen(prevOpen => !prevOpen)};

  return(
    <div className="cont-drop-menu" ref={wrapperRef}>  
      <span 
        className="edit-remove"
        onClick={dropMenu}  
      >...
      </span>
      {
        open && 
        (
          <div className="drop-menu">
            <p 
              className="edit position"
              onClick={editCourse.bind(null, course)}
            > <img 
                src={picEdit} 
                alt="delete"
                className="icon-size"
              /> 
              <span className="span-edit-delete">Edit</span>
            </p>

            <p 
              className="delete position"
              onClick={deleteCourse.bind(null, course.id)}
            > <img 
                src={picDel} 
                alt="delete"
                className="icon-size icon-delete"
              /> 
              <span className="span-edit-delete">Delete</span>
             </p>
          </div>
        )
      }
    </div>
  )
}