import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Take a look at our amazing cocktails. Which one do you like the most?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Take a part in one of he most popular tour over our awesome city. Does it worth it? Definitely!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "FREE! FREE! FREE! Only Today, check it before this offer is gone!"
      },
      {
        icon: <FaBeer />,
        title: "The best beer ",
        info:
          "Did you taste the best beer in the world. Must have! Check these offer"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services " />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon} </span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
