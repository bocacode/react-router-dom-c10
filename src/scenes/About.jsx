import { useNavigate } from "react-router-dom";

export default function About () {
  const navigate = useNavigate();

  return (
    <>
      <h2>About</h2>
      <img src="https://picsum.photos/300/300?" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam eveniet consequuntur ratione labore illo natus odio quisquam ipsum non ex et reiciendis quidem, nam consequatur fugiat numquam eum assumenda.</p>
      
      <button onClick={ () => navigate("/") } >Go to Home</button>
    </>
  )
}