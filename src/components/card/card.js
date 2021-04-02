function Card(props) {
    const { src, heading } = props;
    return (
      <div className="w-full">
          <div className="pr-4 pl-4 pt-2">
        <img src={src} alt="book" className="w-full h-full"/>
        </div>
        <div className="flex justify-center pt-2 pb-3">
        <p className="text-lg">{heading}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  