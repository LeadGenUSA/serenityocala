import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

const Directions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Directions to Serenity
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find us at our convenient location in Dunnellon, Florida.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.5!2d-82.4620!3d29.0490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e61a1c0e3b8a1d%3A0x1!2s20757+W+Pennsylvania+Ave%2C+Dunnellon%2C+FL+34431!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serenity Institute Location"
              />
            </div>

            <div className="flex items-start gap-3 text-foreground">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-serif text-xl mb-1">Office Address</h2>
                <p className="text-muted-foreground">
                  20757 W. Pennsylvania Ave, Ste. B1<br />
                  Dunnellon, FL 34431
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Directions;
