import CelebrityProfile from "./CelebrityProfile";
import img1 from "../assets/srk.png";
import img2 from "../assets/deepika.png";

const celebrities = [
  {
    id: 1,
    name: "Shahrukh Khan",
    price: "$100,000",
    image: img1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Deepika Padukone",
    price: "$75,000",
    image: img2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Homepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Celebrity Brand Promotion</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {celebrities.map((celebrity) => (
            <CelebrityProfile key={celebrity.id} celebrity={celebrity} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Homepage;