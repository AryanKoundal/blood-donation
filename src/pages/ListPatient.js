import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function ListPatient() {
    const [patient, setPatients] = useState([]);
    const [donor, setDonors] = useState([]);
    const [bank, setBanks] = useState([]);
    useEffect(()=>{
        axios.get('https://blood-backend.azurewebsites.net/patients').then(pat=>{
            console.log(pat.data);
            setPatients(pat.data)
        })
        axios.get('https://blood-backend.azurewebsites.net/donors').then(pat=>{
            console.log(pat.data);
            setDonors(pat.data)
        })
        axios.get('https://blood-backend.azurewebsites.net/bloodBanks').then(pat=>{
            console.log(pat.data);
            setBanks(pat.data);
        })
    },[])
  return (
    <div>
        
        <p className="text-xl text-center m-4 text-bold">Patient List</p>

        <table>
            <thead>

        <tr>
    <th>Patient Id</th>
    <th>Name</th>
    <th>blood group</th>
    <th>medical Condition</th>
  </tr>
            </thead>

    {patient.map((pat)=>{
        return <tr>

<td>{pat.p_id} </td>
<td>{pat.name} </td>
<td>{pat.blood_group} </td>
<td>{pat.medical_condition} </td>
        </tr>
    })}
   


        </table>

        <p className="text-xl text-center m-4 text-bold">Blood Bank List</p>

        <table>
            <thead>

        <tr>
    <th>Name</th>
    <th>Staff Details</th>
    <th>Operating Hours</th>
    <th>Address</th>
  </tr>
            </thead>

    {bank.map((pat)=>{
        return <tr>

<td>{pat.name} </td>
<td>{pat.staff_details} </td>
<td>{pat.operating_hours} </td>
<td>{pat.address} </td>
        </tr>
    })}
   


        </table>

        <p className="text-xl text-center m-4 text-bold">Donor List</p>

        <table>
            <thead>

        <tr>
    <th>Donor Id</th>
    <th>Name</th>
    <th>blood group</th>
    <th>medical Condition</th>
    <th>Contact No.</th>
    <th>Latest Donation</th>
  </tr>
            </thead>

    {donor.map((pat)=>{
        return <tr>

<td>{pat.id} </td>
<td>{pat.name} </td>
<td>{pat.blood_group} </td>
<td>{pat.medical_condition} </td>
<td>{pat.contact_number } </td>
<td>{pat.recent_donation_date} </td>
        </tr>
    })}
   


        </table>
    </div>
  )
}
