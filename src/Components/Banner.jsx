import user from '../Components/images/user.png'
const Banner = () => {
    return (
        <div className='flex justify-evenly items-center p-16'>
            <div className="">
                <h3 className='text-4xl'>One Step <br /> Closer To Your <br /> Dream Job</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vitae similique totam nobis quaerat atque. Ullam possimus nostrum fuga eum. Necessitatibus numquam nihil iste vero nostrum est ipsum veniam ducimus!</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div>
           <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;