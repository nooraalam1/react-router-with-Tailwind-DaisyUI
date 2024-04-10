import accounts from '../Components/images/accounts.png'
const JobCategory = () => {
    return (
        <div>
            <hr />
            <h1 className="text-4xl text-center">Job Category List</h1>
            <div className='flex justify-evenly items-center p-14'>
                <div className="">
                <img src={accounts} alt="" srcset="" />
                <h2 className='text-xl font-semibold'>Account and Finance</h2>
                <p>300+ Jobs Available</p>
                </div>
                <div className="">
                <img src={accounts} alt="" srcset="" />
                <h2 className='text-xl font-semibold'>Account and Finance</h2>
                <p>300+ Jobs Available</p>
                </div>
                <div className="">
                <img src={accounts} alt="" srcset="" />
                <h2 className='text-xl font-semibold'>Account and Finance</h2>
                <p>300+ Jobs Available</p>
                </div>
                <div className="">
                <img src={accounts} alt="" srcset="" />
                <h2 className='text-xl font-semibold'>Account and Finance</h2>
                <p>300+ Jobs Available</p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default JobCategory;