import React, { useState } from 'react'
import background from '../images/donor.jpg';
import axios from 'axios';

export const Donor = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [medical, setMedical] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [lastDate,setLastDate] = useState("");

  function onSubmit(e){
    e.preventDefault();
    if(id.length==0 || firstName.length==0 || lastName.length==0 || medical.length==0 || bloodGroup.length==0 || phone.length==0 || lastDate.length==0){
      alert("Fill Details Properly");
    }
    else{
      // Impliment Submit
      axios.post('https://blood-backend.azurewebsites.net/donors',{
        id: id,
        name: firstName + " " + lastName,
        medical_condition : medical,
        blood_group : bloodGroup,
        contact_number : phone,
        latest_donation_date : lastDate
      }).then(res=>{
        console.log(res.data);
      }).catch(err=>{
      console.log(err);
      })
    }
  }
  return (
    <>
      <div>
        <div className='flex justify-left mx-20 my-20 ' >
          <form className='px-20 py-20 border-4 border-red-500 rounded-md bg-stone-100'>
            {/* id */}
            <div className="relative z-0 mb-6 w-full group ">
              <input type="text" name="id" value={id} onChange={(e)=> setId(e.target.value)} id="idfloating_email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent  border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="true" />
              <label for="id" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID</label>
            </div>

            {/* name */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="floating_first_name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="true" />
                <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="floating_last_name" value={lastName} onChange={(e)=> setLastName(e.target.value)} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="true" />
                <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              </div>
            </div>

            {/* medical report */}
            <div className="relative z-0 mb-6 w-full group">
              <input type="url" name="medical" value={medical} onChange={(e)=> setMedical(e.target.value)} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="" />
              <label for="medical" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Medical Report</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="text" name="recent_date" value={lastDate} onChange={(e)=> setLastDate(e.target.value)} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="" />
              <label for="recent_date" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Latest Donate Date </label>
            </div>

            {/* Blood Group */}
            <div className="relative z-0 mb-6 w-full group">
              <input type="text" name="blood_group" value={bloodGroup} onChange={(e)=> setBloodGroup(e.target.value)} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="" />
              <label for="blood_group" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blood Group</label>
            </div>

            {/* Phone number  */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(e)=> setPhone(e.target.value)} name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-white dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " required="" />
                <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
              </div>
            </div>
            <button type="submit" onClick={(e)=> onSubmit(e)} className=" text-white bg-blue-700 w-full hover:bg-red-800  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Register as donor</button>
          </form>
          <img src={background} alt="background" className='w-4/6 h-auto' />

        </div>


      </div>
    </>

  )
}
