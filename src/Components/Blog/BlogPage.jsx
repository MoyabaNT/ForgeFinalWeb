import Sidebar from '../SideBar'

import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { GrDocumentVerified } from "react-icons/gr";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const BlogPage = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 min-h-screen">
      <div className='text-purple-700'>
        <Sidebar />
      </div>
      <div className='mt-16'>
      <h1 className='text-center text-3xl mb-8 font-bold hover:underline text-purple-700'>What’s New</h1>
      <div className="flex justify-center items-center min-h-full">
  <div className=" p-6 rounded-lg  max-w-3xl w-full text-center">
    <h2 className="italic font-bold text-2xl text-black-700 ">
      Leveraging Workplace Skills Plan (WSP) to Enhance BBBEE Compliance: A Strategic Approach by ThinkFriday
    </h2>
    <p className="mt-4 text-lg">
      In the dynamic landscape of South Africa’s business environment, companies are continually challenged to navigate regulatory frameworks while striving for growth and sustainability.
    </p>
  </div>
</div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='shadow-purple-700 bg-slate-00 rounded-xl p-4 w-80 transition ease-in-out delay-150 hover:shadow-lg active:shadow-lg focus:shadow-lg hover:-translate-y-1 hover:scale-110 duration-300'>
          <HiMiniClipboardDocumentCheck size={60} className='ml-24 text-purple-700'/>
  <Link to='/UnderstandingWSP'>
    <h1 className='text-3xl font-bold mb-6 mt-4 hover:text-purple-700 active:text-purple-700 focus:text-purple-700'>
      Understanding WSP/ATR and Its Significance in BBBEE Compliance
    </h1>
    <p className='hidden sm:block'>
      The Workplace Skills Plan (WSP) and Annual Training Report (ATR) are vital components of Broad-based Black Economic Empowerment (BBBEE) compliance in South Africa.
    </p>
  </Link>
</div>


      <div className='shadow-purple-700 bg-slate-00 rounded-xl p-4 w-80 transition ease-in-out delay-150 hover:shadow-lg active:shadow-lg focus:shadow-lg hover:-translate-y-1 hover:scale-110 duration-300'>
      <HiOutlineClipboardDocumentList size={60} className='ml-24 text-purple-700'/>
      <Link to='/AnnualTransforationReports'>
            <h1 className='text-3xl font-bold mb-6 mt-4 hover:text-purple-700 active:text-purple-700 focus:text-purple-700'>Annual Transformation Reports: Vital for BBBEE Compliance Success</h1>
            <p className='hidden sm:block'>Dive into the transformative power of BBBEE with THinkFriday as we explore its pivotal role in fostering sustainable growth and inclusivity</p>
          </Link>
          </div>
          <div className='shadow-purple-700 bg-slate-00 rounded-xl p-4 w-80 transition ease-in-out delay-150 hover:shadow-lg active:shadow-lg focus:shadow-lg hover:-translate-y-1 hover:scale-110 duration-300'>
          <GrDocumentVerified size={60} className='ml-24 text-purple-700'/>
          <Link to='/LeverageBlog'>
            <h1 className='text-3xl font-bold mb-6 mt-4 hover:text-purple-700 active:text-purple-700 focus:text-purple-700'>Leveraging WSP to enhance BBBEE Complience</h1>
            <p className='hidden sm:block py-6'>This blog post explores the role of technology in streamlining and enhancing BBBEE compliance process</p>
          </Link>
          </div>
        </div>
      </div>
      </div>
      

    
    </div>
    <Footer />

    </div>

  )
}

export default BlogPage;
