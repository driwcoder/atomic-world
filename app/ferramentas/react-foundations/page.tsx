import Teste from "@/components/Teste";
import MyButton from "@/components/meus/myButton";
import MyCards from "@/components/meus/myCards";
import { LikeButton, MyLikeButton } from "@/components/meus/myLikeButton";

//types
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  firstName: "Jane",
  age: 20,
  email: "dridri@gmail.com",
  orders: [{ productId: "1", price: 200 }],
};

const Page = () => {
  return (
    <section>
      <div className="flex flex-col">
        <h2 className="border-b-4 border-primary pb-4">Chapter 6</h2>
        <div className="border-b-4 border-primary py-4">
          <h2>Props Component</h2>
          <ul className="list-disc list-inside">
            <li>
              Created a component and configured its interface to parameters
              used (child)
            </li>
            <li>Imported the component and setted this parameters</li>
          </ul>
          <MyButton
            title=""
            bgColor="bg-green-500"
            txtColor="text-primary-foreground"
          />
        </div>
        <div className="border-b-4 border-primary py-4">
          <h2>Data Map</h2>
          <ul className="list-disc list-inside">
            <li>
              Created a component and configured its interface to parameters
              used (child)
            </li>
            <li>
              Created an object, that have some arrays of objects to give us
              various informations
            </li>
            <li>
              Created a Map of persons array object using the method{" "}
              <code>
                {"persons.map((person) => (<div>Name: {person.name}</div>))"}
              </code>
            </li>

            <p>So we render each person in this array</p>
          </ul>
          <div className="flex justify-evenly pt-4">
            <MyCards bc="border-primary" bt="border-2" />
          </div>
        </div>
        <div className="border-b-4 border-primary py-4">
          <h2>
            useState
            <p>Number | Boolean</p>
          </h2>
          <div className="flex gap-4">
            <MyLikeButton /> |
            <LikeButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
