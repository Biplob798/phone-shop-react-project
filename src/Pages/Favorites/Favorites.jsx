import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce((preValue,currentValue)=> preValue + currentValue.price,0 )
      setTotalPrice(total)
    } else {
      setNoDataFound("No Data");
    }
  }, []);

  const handleRemove = () =>{
    localStorage.clear()
    setFavorites([])
    setNoDataFound('No Data')
  }

 console.log(isSeeMore)
 

  return (
    <div>

      {noDataFound ? 
        <p className="h-[80vh] flex justify-center items-center">
          {noDataFound}
        </p>
      : 
        <div>
          {favorites.length > 0 && (
            <div>
              <button onClick={handleRemove} className="my-12 w-full py-3 px-4 bg-green-200 block mx-auto rounded-xl">Deleted All Favorites</button>

              <h2>Total Price : {totalPrice}</h2>
            </div>
          )}
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    isSeeMore ? favorites.map(phone=> <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>) : 
                    favorites.slice(0, 4).map(phone=> <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
                }
            </div>
            <div>
            {favorites.length > 4 && <button onClick={()=> setIsSeeMore(!isSeeMore)} className="my-12 w-full py-3 px-4 bg-green-200 block mx-auto rounded-xl">{isSeeMore ? 'See Less' : 'See More'}</button>}
            </div>
        </div>
      }
    </div>
  );
};

export default Favorites;
