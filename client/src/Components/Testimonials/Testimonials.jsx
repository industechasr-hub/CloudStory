import { useState } from "react";
import {User} from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Travel Writer",
    message:
      "CloudStory gave me a place to share my adventures and connect with readers worldwide.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Tech Blogger",
    message:
      "The platform is fast, modern, and makes publishing stories effortless.",
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Content Creator",
    message:
      "I've built an amazing audience here. The engagement features are fantastic.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Photographer",
    message:
      "CloudStory helps me combine photography and storytelling beautifully.",
  },
  {
    id: 5,
    name: "Olivia Davis",
    role: "Lifestyle Author",
    message:
      "Writing on CloudStory has become a daily habit. It's inspiring and easy to use.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Authors Say
      </h2>

      <div className="flex items-center justify-center gap-6 px-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white shadow-md text-xl hover:scale-110 transition"
        >
          ←
        </button>

        <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-center">
          <User className="w-20 h-20 rounded-full mx-auto mb-4"/>

          <h3 className="text-2xl font-semibold">
            {testimonials[current].name}
          </h3>

          <p className="text-sky-700 mb-4">
            {testimonials[current].role}
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            "{testimonials[current].message}"
          </p>
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white shadow-md text-xl hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Testimonials