const NetflixSeries = () =>
  {
  
  
      let age = 19;
  
  const canWatch =() =>
  {
      if(age>=18) return "Watch Now";
      return "Not Avaliable";
  }
  
  const returnGenre = () =>
  {
      const genre='Science fiction , Thriller , Drama';
      return genre;
  }
      const name ="Alice in Borderland";
      const rating = "7.7";
      const summary ="Arisu - a listless, jobless and video-game-obsessed young man - suddenly finds himself in a strange emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.Arisu is a man without much money or luck. He is unemployed currently as well.Out of the blue a blinding light engulfs him one day in whose aftermath the city of Tokyo has lost all its inhabitants save Arisu and two friends. This is a dangerous and potentially fatal game of survival now in which they are forced to take part.This series genre is";

  
      return (
          <div>
              <div>
                  <img src ="" alt= "alice.webp"  width = "40%" height="40%" />
              </div>
          <h2>Name :{name}</h2>
          <h3>Rating :{5+2.7} </h3>
          <p> Summary : {summary}</p>
          <p>Genre : {returnGenre()}</p>
          {/* <button>{age>=18?" Watch Now": "Not Available" }</button> */}
          <button >{canWatch()}</button>
          </div>
      );
  };
  
   export default NetflixSeries;
  
  
  export const Footer = () =>
  {
      return(
          <p>&lt;&lt;&copy;&gt;&gt;Rahul Rana</p>
      )
  }
  
  export const Header = () =>
  {
      return(
          <p>&lt;&lt;&copy;&gt;&gt;Rahul Rana</p>
      )
  }