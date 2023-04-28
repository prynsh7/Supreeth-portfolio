import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Supreeth S Kadappanavar",
    location: "Hubli, Karnataka, India",
    email: "Supreeth.chintzz@gmail.com",
    availability: "Open for work",
    brand:
      "I've always believed in delivering valuable experiences for my peers. Seeking an opportunity in the field of software engineering with a strong desire to design and develop incredible products.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
