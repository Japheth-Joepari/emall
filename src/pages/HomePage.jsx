import Banner from "../components/Banner";
import Categories from "../components/categories";
import Nav from "../components/Header";

export default function HomePage() {
  return (
    <div className="banerbg">
      <Nav />
      <Banner />
      <div className="container-fluid bg-white">
        <Categories />
      </div>
    </div>
  );
}
