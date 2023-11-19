import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle heading="Featured Item" subHeading="Check It Out"></SectionTitle>            
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque nemo ratione iure provident odit dicta praesentium laborum veritatis eius molestias perspiciatis consectetur, atque rem, enim esse autem voluptas blanditiis optio quasi ipsam natus in impedit? Sunt sed dolorum saepe assumenda, nisi illum accusamus placeat, ratione quos porro blanditiis harum?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;