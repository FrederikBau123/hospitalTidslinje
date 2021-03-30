import React from 'react'
import hospitalLogo from './images/hospitalLogo.svg'

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
            <div>
              Livslangt (Immunundertrykkende)
            </div>
            <div>
              Adport dosis varierer og skal skiftes, gives 2 gange dagligt
            </div>
            <div>
              Advagraf (det samme indholdsstof som ovenfor tacrolimus) dosis varierer gives 1 x dagligt
            </div>
            <div>
              Cellcept (mycofenolatmoffetil)/ Myfortic gives 2 x dgl
            </div>
            <div>
              Udtrappes 1 år
            </div>
            <div>
              Prednisolon gives 1 x dgl
            </div>
          </div>
        </div>
        <div className="medicinType">
        Kost Tilskud
          <div className="medicinInfo">
            <div>
              Livslangt
            </div>
            <div>
              Multivitamin
            </div>
            <div>
              Unikalk 1 tbl x2 (kalktilskud)
            </div>
            <div>
              Alendronat 1 x ugentligt
            </div>
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
      <img className="hospitalLogo" src={hospitalLogo} />
    </div>
  )
}
