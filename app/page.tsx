import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Services from "@/components/Services";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Services />
      <BookingForm />
      <Footer />
    </>
  );
}