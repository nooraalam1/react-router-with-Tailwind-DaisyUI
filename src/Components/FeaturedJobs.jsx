import { useState,useEffect } from "react";

import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    const [length,setLength]=useState(4)
    useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-4xl text-center">Featured Jobs</h2>
                <p className="text-xm text-center">Explore Thousands of Jobs Opportunities you need. It's Your Future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-8">
            {
                jobs.slice(0,length).map(job=><Job job={job}></Job>)
             }
            </div>
          <div className={length===jobs.length && 'hidden'}>
          <button onClick={()=>setLength(jobs.length)} className="btn btn-primary flex mx-auto">See All</button>
          </div>
        </div>
    );
};

export default FeaturedJobs;