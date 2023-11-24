import Nav from "../components/nav"
import { useMoney } from "../components/money"
import Card from "../components/card";

export default function Home() {
    const items = [
        { image: './spend/book.jpg', price: 2 },
        { image: './spend/kitten.jpg', price: 699 },
        { image: './spend/horse.jpg', price: 999 },
        { image: './spend/puppy.jpg', price: 1299}
        // Add more items here
    ];
    return (

        <>
            <Nav />
            <div className="max-w-4xl mx-auto">
                <Profile />
                <DisplayMoney />
                <BentoGrid />
                <div className="flex flex-wrap -m-4">
                    {items.map((item, index) => (
                        <div className="p-4 md:w-1/2 lg:w-1/3">
                            <Card key={index} image={item.image} price={item.price} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

const DisplayMoney: React.FC = () => {
    const { money } = useMoney();

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-green-500 my-5">
            <h1 className="text-2xl text-center text-white font-bold"> $ {money} </h1>
        </div>
    );
};

function Profile() {
    return (
        <div className="flex flex-col items-center justify-center p-10  bg-white my-5">
            <img className="w-24 rounded-xl" src="musk.jpg" alt="Elon Musk" />
            <h1 className="text-2xl mt-4 text-center">Spend Elon Musk's Money</h1>
        </div>
    )
}
function BentoGrid() {
    const items = ['Expensive cars', 'Luxury Mansions', 'Countries', 'Fashion'];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4  text-white">
            {items.map((item, index) => (
                <div key={index} className="flex items-center justify-center bg-white text-accent rounded-lg shadow-md h-32 w-full">
                    <p className="text-center text-lg text-black">{item}</p>
                </div>
            ))}
        </div>
    );
}
