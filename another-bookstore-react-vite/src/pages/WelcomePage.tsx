import './WelcomePage.css'; // Ensure this path is correct
import {bookImagePrefix } from "../utils";
import { NavLink } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="home-page">
      <h3 className="welcome-text"> Scriptoria was a place in the medieval times where all kinds of books were kept for the nobles; today, it provides the same services!</h3>
      <NavLink to={`/category/Fiction`}><button className="call-to-action">SHOP BOOKS</button ></NavLink>
      <section className="featured-book">
      <div className="left-arrow">
        <i className="fa-solid fa-left-long"></i>
        </div>
        <div className="book-container">
          <h3>Featured Books</h3>
          <img
                src={`${bookImagePrefix}the-ladies-home-journal.gif`}
                alt="The Ladies' Home Journal"
                width="280px"
                height="320px"
            />
        </div>
        <div className="book-description">
            <h3>The Ladies' Home Journal</h3>
            <p> A timeless publication offering inspiring stories, practical advice, and cultural reflections that have empowered women for over a century. It captures the evolving roles of women through heartwarming narratives and insightful essays. This iconic magazine continues to connect generations with its diverse and uplifting content. (This content was AI generated).</p>
            <div className="featured-buttons">
                <button className="add-to-cart"><i className="fa-solid fa-cart-plus button-icon"></i>Add to Cart</button>
                <NavLink to={`/category/Fiction`}><button className="shop-category">Shop Category</button></NavLink>
            </div>
        </div>
        <div className="left-arrow">
            <i className="fa-solid fa-right-long"></i>
        </div>
      </section>
    </div>
  );
}
