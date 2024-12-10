const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      text: "This is the content of the first card.",
      imgSrc:
        "https://raw.githubusercontent.com/R-CoderDotCom/samples/main/bird.png",
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the content of the second card.",
      imgSrc:
        "https://raw.githubusercontent.com/R-CoderDotCom/samples/main/bird.png",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the content of the third card.",
      imgSrc:
        "https://raw.githubusercontent.com/R-CoderDotCom/samples/main/bird.png",
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is the content of the fourth card.",
      imgSrc:
        "https://raw.githubusercontent.com/R-CoderDotCom/samples/main/bird.png",
    },
  ];

  return (
    <div
      className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2"
      style={{ margin: "0 auto", maxWidth: "1200px", padding: "20px" }}
    >
      {cardsData.map((card) => (
        <div className="col" key={card.id}>
          <div
            className="card"
            style={{ margin: "0", boxSizing: "border-box" }} 
          >
            <img className="card-img-top" src={card.imgSrc} alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href={card.link} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
