import { useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate();

  return(
    <>
      <h1>Home</h1>
      <img src="https://picsum.photos/300/300" alt="" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda doloremque aut eius aperiam doloribus placeat, tenetur eligendi labore, voluptatibus officia debitis voluptate cumque ea fugiat nemo dolorem ipsum molestias. Accusantium.</p>
      <button onClick={ () => navigate('/about') }>Go to About</button>
    </>
  )
}