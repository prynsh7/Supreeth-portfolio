import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Supreeth S Kadappanavar",
    location: "Hubli, Karnataka, India",
    email: "Supreeth.chintzz@gmail.com",
    availability: "Open for work",
    brand:
      "This portfolio showcases my passion for designing and developing innovative software products. As a student, I have always been dedicated to delivering valuable experiences for my peers. With a strong knowledge of Python, C++, C, web3, and MERN stack, I am capable of implementing and launching new projects. I possess a quick learning ability for new software and technologies and can work collaboratively in a team by providing valuable support. Through this portfolio, you will witness my skills and dedication towards creating exceptional software solution",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
