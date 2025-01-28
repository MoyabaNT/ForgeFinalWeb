import Footer from './Footer';
import Sidebar from './SideBar';
import Partners from '../Assets/Aboutusimg/Partners.png';
import v20 from '../Assets/Aboutusimg/V20.png';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import b261 from '../Assets/Aboutusimg/b261.png';
import b262 from '../Assets/Aboutusimg/b262.png';
import lilan from '../Assets/Aboutusimg/lilan.jpg';
import sudhir from '../Assets/Aboutusimg/Sudhir.jpg';
import spons from '../Assets/Aboutusimg/spons.jpg';
import vesh from '../Assets/Aboutusimg/vesh.jpg';



const About = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen">
      <div className="text-purple-700">
        <Sidebar />
      </div>

      <div className="mt-16">
        <h1 className="text-center text-3xl p-6 font-bold hover:underline text-purple-700">
          About Us
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Why Us */}
            <div className="bg-slate-00 rounded-full shadow-lg shadow-purple-700 p-6 w-80 h-80  flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 sm:animate-bounce animate-none sm:[animation-duration:6s] hover:animate-none">
  <div className="text-center ">
    <h1 className="text-2xl font-bold mb-4 text-purple-700">Why Us</h1>
    <p className="text-md">
      Business Consultants and Advisors are key—that’s why when it
      comes to client selection, we’re choosy. We want to give each
      of you the time and guidance you deserve. Whether you’re
      seeking a strategic alliance with the right partner or a
      special skillset or tool, call us today.
    </p>
  </div>
</div>
            {/* Mission */}
            <div className="bg-slate-00 rounded-full shadow-lg shadow-purple-700 p-6 w-80 h-80 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 sm:animate-bounce animate-none sm:[animation-duration:6s] hover:animate-none">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4 text-purple-700">Mission</h1>
                <p className="text-md">
                  Our service includes a comprehensive consult to help identify
                  gaps and opportunities, a comprehensive report with timelines
                  and milestones, cost analysis, and a schedule to ensure your
                  success.
                </p>
              </div>
            </div>
            {/* Vision */}
            <div className="bg-slate-00 rounded-full shadow-lg shadow-purple-700 p-6 w-80 h-80  flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 sm:animate-bounce animate-none sm:[animation-duration:6s] hover:animate-none">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-6 text-purple-700">Vision</h1>
                <p className="text-md">
                  To empower businesses with strategic guidance, innovative
                  solutions, and unwavering support for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Partner's side */}
      <div className="mt-8">
              <h3 className="font-bold text-center text-purple-700">Partners</h3>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
              <Link to="https://www.forgeacademy.co.za/" target="_blank">
                <img 
                src={Partners} 
                alt="Forge Partner 1" 
                className="w-56 md:w-72 h-auto object-cover rounded-md shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </Link>
              <Link to="https://www.va2-0.co.za/" target="_blank">
                <img 
                src={v20} 
                alt="Forge Partner 2" 
                className="w-56 md:w-72 h-auto object-cover rounded-md shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </Link>
              </div>
      </div>
      {/**The team side */}
      <div className="p-32 lg:ml-64 sm:ml-8">
  <h3 className="text-lg text-center lg:mr-48 text-purple-700 font-bold p-8">Team</h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="bg-gray-200 shadow-md p-4 rounded-2xl shadow-purple-700 w-60 mx-auto">
      <img 
        src={b262} 
        alt="Forge founder" 
        className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
      />
      <label className="text-sm text-purple-700 font-bold">Tariq Shurmah</label>
      <div className="flex gap-2 items-center">
        <Link to="https://www.linkedin.com/in/tariq-shurmah-91b1a533/" target="_blank">
          <FaLinkedin size={35} className="hover:text-blue-900" />
        </Link>
        <p className="text-xs">Co-Founder and Managing Director</p>
      </div>
    </div>
    <div className="bg-gray-200 shadow-md p-4 rounded-2xl shadow-purple-700 w-60 mx-auto">
      <img 
        src={b261} 
        alt="Forge Partner 2" 
        className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
      />
      <label className="text-sm text-purple-700 font-bold">Renoo Shurmah</label>
      <div className="flex gap-2 items-center">
        <Link to="https://www.linkedin.com/in/renoo-shurmah-619253223/" target="_blank">
          <FaLinkedin size={35} className="hover:text-blue-900" />
        </Link>
        <p className="text-xs">Co-Founder and Project Manager</p>
      </div>
    </div>
    <div className="bg-gray-200 shadow-md p-4 rounded-2xl shadow-purple-700 w-60 mx-auto">
      <img 
        src={lilan} 
        alt="Forge worker 3" 
        className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
      />
      <label className="text-sm text-purple-700 font-bold">Lilian Mathuntuta</label>
      <div className="flex gap-2 items-center">
        <Link to="https://www.linkedin.com/in/nolutho-lilian-mathuntuta-285020192/" target="_blank">
          <FaLinkedin size={35} className="hover:text-blue-900" />
        </Link>
        <p className="text-xs">Transformation & Skills Development Senior Officer</p>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mt-12">
    <div className="bg-gray-200 shadow-md p-4 rounded-2xl shadow-purple-700 w-60 mx-auto">
      <img 
        src={sudhir} 
        alt="Forge worker 4" 
        className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
      />
      <label className="text-sm text-purple-700 font-bold">Sudhir Rugber</label>
      <div className="flex gap-2 items-center">
        <Link to="https://www.linkedin.com/in/sbonile-cebekhulu-87994a207/" target="_blank">
          <FaLinkedin size={35} className="hover:text-blue-900" />
        </Link>
        <p className="text-xs">Skills Development and Project Consultant</p>
      </div>
    </div>
    <div className="bg-gray-200 shadow-md p-4 rounded-2xl shadow-purple-700 w-60 mx-auto">
      <img 
        src={vesh} 
        alt="Forge Partner 2" 
        className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
      />
      <label className="text-sm text-purple-700 font-bold">Yuvesh Harry</label>
      <div className="flex gap-2 items-center">
        <Link to="https://www.linkedin.com/in/sudhir-rugber-081285331/" target="_blank">
          <FaLinkedin size={35} className="hover:text-blue-900" />
        </Link>
        <p className="text-xs">Transformation Assistant</p>
      </div>
    </div>
    <div className="bg-gray-200 shadow-md p-4 rounded-2xl shadow-purple-700 w-60 mx-auto">
      <img 
        src={spons} 
        alt="Forge Partner 2" 
        className="w-auto md:w-60 h-auto object-cover rounded-full shadow-lg py-1 hover:bg-purple-700"
      />
      <label className="text-sm text-purple-700 font-bold">Sbonile Cebekhulu</label>
      <div className="flex gap-2 items-center">
        <Link to="https://www.linkedin.com/in/sbonile-cebekhulu-87994a207/" target="_blank">
          <FaLinkedin size={35} className="hover:text-blue-900" />
        </Link>
        <p className="text-xs">Skills Development Administrator</p>
      </div>
    </div>
  </div>
</div>
    </div>
    <Footer />
    </div>

  );
};

export default About;
