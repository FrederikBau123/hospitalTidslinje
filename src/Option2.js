import React from 'react'

export default function Option2(){
  return(
    <div>
      <div className="header">
        <div className="headerFont">
          Medicin Guide
        </div>
      </div>
      <div className="medicin">
        <div className="medicinType">
        Præparater
          <div className="medicinInfo">
            Livslangt (Immunundertrykkende)
            <br/>
            Adport dosis varierer og skal skiftes, gives 2 gange dagligt
            <br/>
            Advagraf (det samme indholdsstof som ovenfor tacrolimus) dosis varierer gives 1 x dagligt
            <br/>
            Cellcept (mycofenolatmoffetil)/ Myfortic gives 2 x dgl
            <br/>
            Udtrappes 1 år
            <br/>
            Prednisolon gives 1 x dgl
          </div>
        </div>
        <div className="medicinType">
        Kost Tilskud
          <div className="medicinInfo">
          Livslangt
          <br/>
          Multivitamin
          <br/>
          Unikalk 1 tbl x2 (kalktilskud)
          <br/>
          Alendronat 1 x ugentligt
          </div>
        </div>
        <div className="medicinType">
        Forebyggende mod Infektion
          <div className="medicinInfo">
            Valcyte gives 2 x dgl i 3 måneder (kan blive givet igen senere)
            <br/>
            Bactrim gives 1 gang dgl. I 6 måneder
          </div>
        </div>

      </div>
    </div>
  )
}
