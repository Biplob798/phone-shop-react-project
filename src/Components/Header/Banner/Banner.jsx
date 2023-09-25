const Banner = () => {
  return (
    <div>
      <div 
        style={{
          backgroundImage: `url("https://i.ibb.co/dfXRwHj/Logo.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "50%"
        }}
        className="h-[70vh] "
      >
      
       <div  className="font-extrabold text-3xl text-black relative text-center bg-white opacity-[90%]">
       <h2>This is banner </h2>
       </div>
      </div>
    </div>
  );
};

export default Banner;
