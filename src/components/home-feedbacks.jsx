import { useState } from "react";
// import User from './user'
// const users = [
//   {
//     id: 1,
//     firstname: "firstName1",
//     lastname: "lastname1"
//   },
//   {
//     id: 2,
//     firstname: "firstName2",
//     lastname: "lastname2"
//   },
//   {
//     id: 3,
//     firstname: "firstName3",
//     lastname: "lastname3"
//   },
// ]
const HomeFeedbacks = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  function Increment(){
    setCount(count + 1);
  }
  function Decrement(){
    setCount(count - 1);
  }
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => setUsers(res));
  return (
    // <div className='bg-[#F9FAFD]'>
    //   {users.map(user => (
    //     <User user={user} key={user.id}/>
    //   ))}
    // </div>
    <div>
      <div className="text-center">
        <h1 className="text-center text-3xl font-bold">{count}</h1>
        <button onClick={Decrement} className="px-7 py-2 border mx-5">-</button>
        <button onClick={Increment} className="px-7 py-2 border mx-5">+</button>
      </div>
      {users && users.map(u => (
        <div key={u.id} className="p-5">
          <h2 className="text-2xl">{u.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default HomeFeedbacks;

// ! Userlar uchun mock data yaratilsin, users va user-card nomli fayl yaratilsin. userlar usersda map bo'lib user-cardga props bo'lib borsin. data misoli: {firstName: "John", lastName: "Doe"}. user-card faqat first name ko'rinsin, ustiga bosilganda toastda lastname chiqsin!!
