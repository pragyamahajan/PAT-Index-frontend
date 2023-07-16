import React, { useEffect, useState } from "react";


export default function Register() {

  const [name, setName] = useState()
  const [rollnum, setRollnum] = useState()
  const [cgpa, setcgpa] = useState()
  const [proj, setproj] = useState()
  const [intern, setintern] = useState()
  const [leet, setleet] = useState()


  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append("name", name)
    formData.append("rollNum", rollnum)
    formData.append("cgpa", cgpa)
    formData.append("proj", proj)
    formData.append("intern", intern)
    formData.append("leet", leet)

    // formData.forEach((v,k)=>{
    //   console.log(v,k)
    // })
    console.log(localStorage.getItem('jwt'));
    let tok = localStorage.getItem("token")
    fetch("http://localhost:5000/addresults", {
      method: 'POST',
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Authorization": tok,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    },)
  }
  useEffect(() => {
    let timeoutId;

    function resetTimeout() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        localStorage.clear();
      }, 5 * 60 * 1000); // 5 minutes
    }

    document.addEventListener("mousemove", resetTimeout);
    document.addEventListener("keydown", resetTimeout);

    resetTimeout(); // start the timeout initially
    return () => {
      document.removeEventListener("mousemove", resetTimeout);
      document.removeEventListener("keydown", resetTimeout);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div>
    <div className="form-input">
    <div>
      <label className="lbl" htmlFor="name">Student Name : </label>
      <input type="text" id="name" className="inpt" placeholder=" Name " value={name} onChange={(e) => setName(e.target.value)} />
      <br></br>

      <label className="lbl" htmlFor="rollnum">Registration No. : </label>
      <input type="text" name="" id="rollnum" className="inpt" placeholder=" 20BCE10XXX " value={rollnum} onChange={(e) => setRollnum(e.target.value)} />
      <br></br>

      <label className="lbl" htmlFor="class">CGPA: </label>
      <input type="text" name="" id="subMarks" className="inpt" placeholder=" 6.00 - 10.00 " value={cgpa} onChange={(e) => setcgpa(e.target.value)} />
      <br></br>

      <label className="lbl" htmlFor="class">No. of PAT approved projects: </label>
      <input type="text" name="" id="subMarks" className="inpt" placeholder=" 0 - 5 " value={proj} onChange={(e) => setproj(e.target.value)} />
      <br></br>

      <label className="lbl" htmlFor="class">No. of certified internships: </label>
      <input type="text" name="" id="subMarks" className="inpt" placeholder=" 0 - 3 " value={intern} onChange={(e) => setintern(e.target.value)} />
      <br></br>

      <label className="lbl" htmlFor="class">No. of Leetcode questions solved: </label>
      <input type="text" name="" id="subMarks" className="inpt" placeholder=" 0 - 2000 " value={leet} onChange={(e) => setleet(e.target.value)} />
      <br></br>

      </div>
      </div>
      <div className="btn">
      <button className="btn-login" onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
  
}
