import React from "react";
import "./WinningTable.css";

const WinningTable = ({date, match1, match2, match3, tip1, tip2,tip3, odds1,odds2,odds3, status}) => {
  return (
    <div className="table-wrapper">
      <table className="table-data">
        <h3>{date}</h3> 
        <tr>
          <th>Match</th>
          <th>Tip</th>
          <th>Odds</th>
          <th className="won">Status</th>
        </tr>
        <tr>
          <td>{match1}</td>
          <td>{tip1}</td>
          <td>{odds1}</td>
          <td className="won">{status}</td>
        </tr>
        <tr>
          <td>{match2}</td>
          <td>{tip2}</td>
          <td>{odds2}</td>
          <td className="won">Won</td>
        </tr>
        <tr>
          <td>{match3}</td>
          <td>{tip3}</td>
          <td>{odds3}</td>
          <td className="won">Won</td>
        </tr>
      </table>
    </div>
  );
};

export default WinningTable;
