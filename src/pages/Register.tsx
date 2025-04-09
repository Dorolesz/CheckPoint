
import RegisterForm from "@/components/RegisterForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border p-8">
            <RegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
