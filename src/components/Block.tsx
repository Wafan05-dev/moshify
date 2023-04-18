const Block = () => {
  return (
    <>
      <section className="block container">
        <h2 className="block__heading">heading</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          nobis?
        </p>
      </section>
      <section className="block block--dark block--skewed-right">
        <div className="container">
          <div className="block__header">
            <h2 className="block__heading">heading</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, nobis?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Block;
