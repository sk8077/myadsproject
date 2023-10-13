
function About() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="about-image.jpg"
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in condimentum mauris, in posuere augue. Vestibulum euismod metus
              a risus egestas, vel dapibus arcu lacinia.
            </p>
            <p className="text-gray-700 mb-4">
              Integer bibendum interdum dolor, non fermentum nunc ultricies ut.
              Nullam euismod, elit non imperdiet ultrices, libero libero
              sollicitudin tortor, ac tincidunt metus odio vel felis.
            </p>
            <p className="text-gray-700">
              Fusce eu ligula ut massa aliquet lobortis. Curabitur ut dapibus
              neque, nec consectetur odio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
