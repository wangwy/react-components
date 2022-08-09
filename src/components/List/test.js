import { List } from "./List";
const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"]
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"]
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine"]
  }
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the props use",
    rating: 3.8
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2
  }
];

const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
};

const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

const SmallProductListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  );
};

export const ListTest = () => {
  return (
    <>
      <List
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <List
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <List
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <List
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
};
