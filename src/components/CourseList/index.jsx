import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title };
}

function CourseList() {
  const courseQuantity = 2;

  const courses = useSelector(
    state => state.data.slice(0, 2),
    [courseQuantity]
  );
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch(addCourseAction('JSX'));
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
