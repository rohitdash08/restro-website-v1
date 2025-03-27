import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { images } from "../assets/images";

const PrivateDining = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="hover-zoom">
            <img
              src={images.privateRoom}
              alt="Private Dining Room"
              className="w-full h-[550px] object-cover"
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-medium">
                Private Dining
              </h2>
              <p className="text-lg">
                Host your special occasion in our elegant private dining spaces.
              </p>
              <p>
                Whether you're planning a corporate event, family celebration,
                or intimate gathering, our private dining rooms offer a
                sophisticated setting for memorable experiences.
              </p>
              <p>
                Our experienced events team will work closely with you to
                customize every aspect of your event, from personalized menus to
                bespoke wine pairings and special touches that reflect your
                personal style.
              </p>
              <div className="pt-2">
                <p className="font-medium">Available spaces:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>The Olive Room (up to 20 guests)</li>
                  <li>The Mediterranean Suite (up to 40 guests)</li>
                  <li>Full Restaurant Buyout (up to 120 guests)</li>
                </ul>
              </div>
              <Link to="/private-dining" className="btn-primary mt-4">
                Inquire Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
