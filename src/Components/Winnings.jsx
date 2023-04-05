import React from "react";
import "./Winnings.css";
import WinningTable from "./WinningTable";
const Winnings = () => {
  return (
    <div id="winnings" className="winnings">
      <h2>Winnings</h2>
      <div className="winnings-wrapper">
        <WinningTable
          date={"04.04.2023"}
          match1={"Nautico FC - Atl. Roraima"}
          match2={"Varnsdorf - Dukla Prague"}
          match3={"Puntarenas FC - Guadalupe"}
          tip1={"1"}
          tip2={"2"}
          tip3={"2"}
          odds1={"2.12"}
          odds2={"2.82"}
          odds3={"5.23"}
          status={"Won"}
        />
        <WinningTable
          date={"03.04.2023"}
          match1={"Atletico Atlanta - CA Mitre"}
          match2={"Yupanqui - San Martin Burzaco"}
          match3={"Social Atletico Television W - Huracan W"}
          tip1={"2"}
          tip2={"2"}
          tip3={"X"}
          odds1={"3.59"}
          odds2={"2.47"}
          odds3={"3.64"}
          status={"Won"}
          
        />
        <WinningTable
          date={"02.04.2023"}
          match1={"Oriku - Flamurtari"}
          match2={"Colegiales - Ituzaingo"}
          match3={"Midland - Justo Jose de Urquiza"}
          tip1={"2"}
          tip2={"X"}
          tip3={"2"}
          odds1={"2.09"}
          odds2={"3.11"}
          odds3={"3.37"}
          status={"Won"}
       
        />
      </div>
    </div>
  );
};

export default Winnings;
