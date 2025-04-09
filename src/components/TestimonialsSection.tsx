
import { Suspense } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Kovács István",
    position: "Operációs igazgató",
    company: "Tech Solutions Kft.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    comment: "Az CheckPoint rendszerére való áttérés után jelentősen javult irodáink biztonsága. A telepítés gyors volt, a rendszer könnyen kezelhető, a support csapat pedig rendkívül segítőkész.",
    rating: 5
  },
  {
    id: 2,
    name: "Nagy Júlia",
    position: "HR vezető",
    company: "Global Industries Zrt.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    comment: "A munkaidő-nyilvántartási modul használata óta sokkal hatékonyabban tudjuk kezelni a jelenléti adatokat. A személyügyi osztály rengeteg manuális munkától mentesült.",
    rating: 5
  },
  {
    id: 3,
    name: "Szabó Péter",
    position: "Létesítmény vezető",
    company: "Building Management Kft.",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    comment: "Több telephelyet kezelünk egyidejűleg, és az CheckPoint rendszere tökéletes megoldást nyújt a központosított, mégis rugalmas hozzáférés-kezelésre.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <Suspense fallback={<div>Betöltés...</div>}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Ügyfeleink mondták</h2>
            <p className="text-lg text-gray-600">
              Több száz elégedett ügyfelünk osztotta meg tapasztalatait az CheckPoint beléptető rendszerével kapcsolatban.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg border border-gray-100 animate-fadeIn">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </section>
  );
};

export default TestimonialsSection;
