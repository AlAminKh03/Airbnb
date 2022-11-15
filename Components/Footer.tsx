import React from 'react'



const Footer=()=> {
  return (
   <section>
   
<div className='grid grid-cols-1 sm:grid-cols-4 gap-5 gap-x-10 sm:pl-36 p-10 sm:m-auto bg-gray-100 rounded-lg'>
        <div className='text-xs space-y-2 text-gray-900 m-1 '>
            <h3 className=' font-bold'>Support</h3>
            <p>Help Center</p>
            <p>Air Cover</p>
            <p>Safety Information</p>
            <p>Supporting people with disabilities</p>
            <p>Cancelation option</p>
            <p>Our Covid-19 response</p>
            <p>Report a neighborhood concern</p>
        </div>
        <div className='text-xs text-gray-900 space-y-2 m-1 '>
            <h3 className=' font-bold'>Community</h3>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Combating discrimination</p>
        </div>
        <div className='text-xs text-gray-900  space-y-2 m-1 '>
            <h3 className=' font-bold'>Hosting</h3>
            <p>Try hosting</p>
            <p>AirCover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
        </div>
        <div className='text-xs text-gray-900  space-y-2 m-1 '>
            <h3 className=' font-bold'>Airbnb</h3>
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift cards</p>
        </div>
</div>
       
        </section>
  )
}
export default Footer;