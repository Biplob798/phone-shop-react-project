/* eslint-disable react/prop-types */
import PhonesCard from "./PhonesCard";



const Phones = ({phones}) => {
 
    return (
        <div className="py-6">
            <h3 className="2xl text-center">all phones</h3>
        <div className="grid md:grid-cols-3 gap-4 py-6">
            {
                phones?.map(phone=><PhonesCard key={phone.id} phone={phone}></PhonesCard>)
            }
        </div>
        </div>
    );
};

export default Phones;