const Section = (props) => {
  //   console.log(props); // {section : {category: 'Reprendre avec', images: Array(27)}}
  return (
    <section>
      <h2>{props.section.category}</h2>
      console.log({props.section.category});
      <div>
        {props.section.images.map((imageLink, index) => {
          // console.log(imageLink); // https://res.cloudinary.com/lereacteur-apollo/image/upload/v1643642777/react-new-exercices/netflix2022/Tendances%20actuelles/AAAABWwuOMdMyWANxDEyu5ILwXbDDfIi8Jzar7u4ypDchJxz4WWVIw820XGShWIrhq5ufRHQQ1RgJIl8AYRoqkmhXO-X-KY_dcsybh.jpg
          return (
            <img
              key={index + imageLink}
              src={imageLink}
              alt="aperçu de la série"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section;
