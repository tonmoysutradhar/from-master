import Cousin from "../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Shohana'}></Cousin>
                <Cousin name={'Biplob'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;