import React from 'react'

export const BloodBank = () => {
  return (
    <>
      <div><h1>BloodBank</h1></div>
      <div className='flex justify-center mt-10'>
        <table class="table-fixed ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Staff Details</th>
              <th>Operating Hours</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maple</td>
              <td>10</td>
              <td>9-5</td>
              <td>Montana</td>

            </tr>
            <tr>
              <td>Oak</td>
              <td>10</td>
              <td>9-5</td>
              <td>Arizona</td>

            </tr>
            <tr>
              <td>Red Bud</td>
              <td>10</td>
              <td>9-5</td>
              <td>Texas</td>

            </tr>
          </tbody>
        </table>
      </div>

    </>

  )
}

