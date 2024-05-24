// import { useState } from "react";
import "./App.css";
import HotelCard from "./components/Cards/HotelCard/HotelCard";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";

function App() {
  // const [count, setCount] = useState(0);
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // const arr = []
  // for (let i = 1; i <= 10; i++) {
  //   arr.push(i);
  // }

  // const reverseArr = () => {
  //   const _arr = [...arr];
  //   const reversed = _arr.reverse();
  //   setArr(reversed);
  // };

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // destructuring objekta
  // const { name } = osoba;
  // console.log(name);
  // CEMU JE JEDNAKO name?
  // name === osoba.name

  // const osobaNiz = ["Kanita", 19];
  // destructuring niza
  // const [ime] = osobaNiz;
  // console.log(ime);

  // const a = 5
  // a++ === a = a + 1
  // a+1
  // setCount((prevValue) => prevValue++) NIJE KOREKTNO
  // setCount((prevValue) => prevValue + 3)
  return (
    // <React.Fragment>
    <>
      {/* <Greeting appName="Lyntel" fullName="Dzenan Kosuta" /> */}
      {/* <div className="card">
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          decrease count {count}
        </button>
        <button onClick={() => setCount((prevValue) => prevValue + 1)}>
          increase count {count}
        </button>
      </div> */}
      {/* <button onClick={reverseArr}>Change order</button> */}
      {/* Ipravno i sa callback */}
      {/* <button onClick={() => reverseArr()}>Change order</button>
      {arr.map((num, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <p>{num}. </p>
          <MySentence number={num} />
        </div>
      ))} */}
      <div className="hotels">
        <HotelCard
          imageUrl="https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3-1640x1312.jpg"
          title="KAYAK"
          content={
            <>
              $174 <del>$369</del>
            </>
          }
          total={450}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="Vrbak"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="Vrbak"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="Palma"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="Atlas"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="Vrbak"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
        <HotelCard
          imageUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/273076792.jpg?k=5cb683ba5db555146e2a471941e7fdecf7eb86754f97c11e45e683004d70e19a&o=&hp=1"
          title="Crown Plaza"
          content={
            <>
              $40 <del>$60</del>
            </>
          }
          total={160}
        />
      </div>
    </>
    // </React.Fragment>
  );
}

export default App;
