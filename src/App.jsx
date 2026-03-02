import UserProfile from "./components/UserProfile/UserProfile";
import Image from "./components/Image/Image";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <UserProfile name="Anna" age={29} email="anna@gmail.com" />
      {/* <UserProfile name="Tom" age={19} email="tom@gmail.com" />
    <UserProfile name="Alex" age={39} email="alex@gmail.com" /> */}
      <Image
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35SV0pvv63hK3KEoCrKRQ3pCGwTCbzb0bbg&s"
        alt=""
        sea
      />
      <table>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>count</th>
        </tr>
        <Product title="milk" price={32} count={3}/>
      </table>
    </>
  );
}

export default App;
