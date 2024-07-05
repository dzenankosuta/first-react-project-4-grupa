import "./AboutUs.css";
import about from "../../common/aboutUs.json";
import { Footer } from "../../components/Footer/Footer";
import AboutUsCard from "../../components/Cards/AboutUsCard/AboutUsCard";

export function AboutUs() {
  return (
    <div className="about-us">
      <div className="naslov">
        <h2>
          SAKILEY.
          <br /> Together, We Make a Difference.
        </h2>
      </div>
      <div className="team">
        {about.map((value, index) => {
          return (
            <AboutUsCard
              key={index}
              img={value.img}
              name={value.name}
              description={value.description}
              instagramUrl={value.instagramUrl}
              linkedInUrl={value.linkedInUrl}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
