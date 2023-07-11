import Genre from './Genre.jsx';
import style from './Container.module.css';

function Container() {
  return (
    <div className={style.container}>
    <Genre genreName="Comedy" genreDescription="These are movies that make liberal use of humor, slapstick, farce, and satire to allow the audience to laugh out loud. Good, classic comedies are watched again and again by those who love them." movieTitle1="Caddyshack" movieYear1="1980" movieTitle2="Office Space" movieYear2="1999" />
    <Genre genreName="Romance" genreDescription="These are movies that have classic romantic love as an overarching theme. They may or may not feature the 'Classic Hollywood Happy Ending.' Many epic romance movies end tragically." movieTitle1="An Officer And A Gentleman" movieYear1="1982" movieTitle2="Titanic" movieYear2="1997" />
  
    </div>
    );
};

export default Container;
