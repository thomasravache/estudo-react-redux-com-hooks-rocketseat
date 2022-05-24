import { useSelector, useDispatch } from 'react-redux';

function CourseList() {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({
      type: 'ADD_COURSE',
      title: 'Java',
    });
  }

  return(
    <>
      <ul>
        {
          courses.map((course) => (
            <li key={course}>
              {course}
            </li>
          ))
        }
      </ul>
      <button onClick={addCourse}>Adicionar novo curso</button>
    </>
  )
}

export default CourseList;
