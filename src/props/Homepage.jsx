import Displaypage from "../components/Displaypage";

function Homepage() {
  const studentName = "Raghav";
  const studentCourse = "React JS";

  return (
    <div>
      <Displaypage
        name={studentName}
        course={studentCourse}
      />
    </div>
  );
}

export default Homepage;