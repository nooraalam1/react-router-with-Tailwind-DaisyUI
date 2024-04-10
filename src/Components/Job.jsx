import { NavLink } from "react-router-dom";

const Job = ({job}) => {
    
        return (
        <div className="py-6 p-20">
           
            <img src={job.logo} alt="" srcset="" />
            <h3 className="text-2xl">{job.job_title}</h3>
            <h3>{job.job_description}</h3>
            <div className="flex gap-7">
            <h2 className="text-2xl">{job.job_type}</h2>
            <h2 className="text-2xl">{job.remote_or_onsite}</h2>
            </div>
           <button className="btn btn-warning my-4"> <NavLink to={`/jobDetails/${job.id}`}>See Details</NavLink></button>
          
        </div>
    );
};

export default Job;