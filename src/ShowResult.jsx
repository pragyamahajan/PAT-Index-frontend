import React, { useState } from "react";

function ShowResult() {
  const [disresults, setDisResults] = useState(false)
  const [htnum, setHtnum] = useState();
  const [studata, setData] = useState();
  let total
  let avg
  const handleHTnum = () => {
    const formData = new FormData();
    formData.append("htnum", htnum);
    fetch(`http://localhost:5000/studentresults?htnum=${htnum}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
    setDisResults(true)
  };

  console.log(studata);

  if (disresults && studata) {
    total = (parseFloat(studata.cgpa.split(",")[0])
      * (parseFloat(studata.proj.split(",")[0])
        + parseFloat(studata.intern.split(",")[0])
        + parseFloat(studata.leet.split(",")[0]) / 100)).toFixed(2);
    avg = 35.47
  }

  return (
    <div className="results">
      <div className="form-input">
        <div>
          <label className="lbl" htmlFor="htmun">Registration Number: </label>
          <input type="text" className="inpt" name="" id="htnum" placeholder="20BCE10XXX" value={htnum} onChange={(e) => setHtnum(e.target.value)}
          />
        </div>
        <div className="btn">
          <button className="btn-login" onClick={handleHTnum}>Search</button>
        </div>
      </div>
      {/* {studata && <div>{JSON.stringify(studata.StudentResult.name)}</div>} */}
      {disresults ?
        <table>
          <thead>
            <tr>
              <th colSpan={4} className="Heading" >Reg. Number : {htnum}</th>
            </tr>
            <tr>
              <th colSpan={4} className="Heading" >Name: {studata && studata.name}</th>
            </tr>
            <tr>
              <th>S.no</th>
              <th>Criteria</th>
              <th>Your Score</th>
              <th>College Average</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                CGPA
              </td>
              <td>
                {studata && studata.cgpa !== undefined
                  ? studata.cgpa.split(",")[0]
                  : null}
              </td>
              <td>
                8.25
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                Projects
              </td>
              <td>
                {studata && studata.proj !== undefined
                  ? studata.proj.split(",")[0]
                  : null}
              </td>
              <td>
                2.2
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                Interships
              </td>
              <td>
                {studata && studata.intern !== undefined
                  ? studata.intern.split(",")[0]
                  : null}
              </td>
              <td>
                0.6
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                Leetcode
              </td>
              <td>
                {studata && studata.leet !== undefined
                  ? studata.leet.split(",")[0]
                  : null}
              </td>
              <td>
                150
              </td>
            </tr>
            <tr>

            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>Your PAT Index :  {isNaN(total) ? null : total}</td>
            </tr>
            <tr>
              <td colSpan={4}>
                {total > avg  ? "Congratulations! You are above average" : "Fail"}
                </td>
            </tr>
          </tfoot>
        </table> : null}

    </div>
  );
}

export default ShowResult;
