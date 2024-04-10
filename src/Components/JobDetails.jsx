import { useLoaderData, useParams,NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const JobDetails = () => {
    const notify =()=>{
        toast("Added Successfully")
    }
    const Jdetails = useLoaderData();
    const {id} = useParams();
    const IdInt = parseInt(id)
    const job = Jdetails.find(job=>job.id === IdInt)
    console.log(job);
       return (
        <div className='gap-8 flex p-40'>
            <div className="w-2/3">
            <h3 className='text-2xl text-center'>{job.company_name}</h3>
            <h3 className='text-xl text-center mb-6'>{job.job_title}</h3> <hr />
            <h3><span className='font-bold'>Responsibility:</span> {job.job_responsibility}</h3>
            <h3><span className='font-bold'>Requirements:</span>{job.educational_requirements}</h3>
            <h3><span className='font-bold'>Experiences:</span> {job.experiences}</h3>
            <h3><span className='font-bold'>Location:</span> {job.location}</h3>
            <h3><span className='font-bold'>Salary: </span>{job.salary}</h3>
            </div>
            <div className=" border-l-4 pl-5">
            <h2 className="text-3xl my-3">Contact Information</h2>
            <h2 className=""><span className='font-bold'>Address:</span> {job.contact_information.address}</h2>
            <h2 className=""><span className='font-bold'>Email: </span>{job.contact_information.email}</h2>
            <h2 className=""><span className='font-bold'>Phone:</span> {job.contact_information.phone}</h2>
            <button onClick={notify} className='mt-4 btn btn-primary text-white w-full'><NavLink>Apply Now</NavLink></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;