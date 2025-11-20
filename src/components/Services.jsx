import servicesData from "../data/servicesData.jsx";

function Services() {
  return (
    <div className="px-6 mt-14 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
      {servicesData.map((service) => (
        <div key={service.id} className="flex flex-col items-center gap-2">
          <div className="text-red-600 text-3xl">{service.icon}</div>

          <h4 className="font-semibold">{service.title}</h4>

          <p className="text-gray-400 text-sm">{service.info}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
