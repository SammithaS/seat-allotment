import "./StudentStyles.css";

const Studentpage = () => {
  const studentData = [
    {
      id: 1,
      firstName: "John",
      surname: "Doe",
      emailId: "johndoe@example.com",
      marks: 120,
      gender: "Male",
    },
  ];

  const seatMatrixData = [
    { branch: "Computer Science", seats: 50 },
    { branch: "Information Science", seats: 20 },
    { branch: "Artificial Intelligence and Machine Learning", seats: 30 },
    { branch: "Electronics and Communication Engineering", seats: 40 },
    { branch: "Civil Engineering", seats: 30 },
    { branch: "Computer and Communication Engineering", seats: 40 },
    { branch: "Electrical and Electronics Engineering", seats: 30 },
    { branch: "Mechanical Engineering", seats: 40 },
  ];

  const handleBranchChange = (event) => {
    const selectedBranch = event.target.value;
    // Handle branch selection change
  };

  return (
    <div className="student-home-page">
      <h1 style={{ marginTop: "10%" }}>Welcome Student!</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email ID</th>
            <th>Marks</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.surname}</td>
              <td>{student.emailId}</td>
              <td>{student.marks}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Seat Matrix</h2>
      <table className="seat-matrix-table">
        <thead>
          <tr>
            <th>Branch</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {seatMatrixData.map((seatMatrix) => (
            <tr key={seatMatrix.branch}>
              <td>{seatMatrix.branch}</td>
              <td>{seatMatrix.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="branch-preference-container">
        <h3 style={{ color: "blue" }}>Preference1:</h3>
        <select onChange={handleBranchChange}>
          <option value="">Select Branch</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Science">Information Science</option>
          <option value="Artificial Intelligence and Machine Learning">
            Artificial Intelligence and Machine Learning
          </option>
          <option value="Electronics and Communication Engineering">
            Electronics and Communication Engineering
          </option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Computer and Communication Engineering">
            Computer and Communication Engineering
          </option>
          <option value="Electrical and Electronics Engineering">
            Electrical and Electronics Engineering
          </option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
        </select>
        <h3 style={{ color: "blue" }}>Preference2:</h3>
        <select onChange={handleBranchChange}>
          <option value="">Select Branch</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Science">Information Science</option>
          <option value="Artificial Intelligence and Machine Learning">
            Artificial Intelligence and Machine Learning
          </option>
          <option value="Electronics and Communication Engineering">
            Electronics and Communication Engineering
          </option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Computer and Communication Engineering">
            Computer and Communication Engineering
          </option>
          <option value="Electrical and Electronics Engineering">
            Electrical and Electronics Engineering
          </option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
        </select>
        <h3 style={{ color: "blue" }}>Preference3:</h3>
        <select onChange={handleBranchChange}>
          <option value="">Select Branch</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Science">Information Science</option>
          <option value="Artificial Intelligence and Machine Learning">
            Artificial Intelligence and Machine Learning
          </option>
          <option value="Electronics and Communication Engineering">
            Electronics and Communication Engineering
          </option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Computer and Communication Engineering">
            Computer and Communication Engineering
          </option>
          <option value="Electrical and Electronics Engineering">
            Electrical and Electronics Engineering
          </option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
        </select>
      </div>
    </div>
  );
};
export default Studentpage;
