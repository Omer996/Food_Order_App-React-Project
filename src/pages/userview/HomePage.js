import React from "react";
import { Card } from "react-bootstrap";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <h4>Try New Cuisines</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cuisines.map(cuisine => (
            <div key={cuisine.id} className="col mb-3">
              <div className="">
                <div className="card-body">
                  <Card.Img variant="top" src={cuisine.image} style={{ objectFit: 'cover', width: '60%', height: '100px', borderRadius: '20px 35px 20px 35px' }} />
                  <h6 className="mt-2">{cuisine.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <div className="container-fluid">
        <h4>Explore Categories</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {categories.slice(0,7).map(categories => (
            <div key={categories.id} className="col mb-3">
              <div className="">
                <div className="card-body">
                  <Card.Img variant="top" src={categories.image} style={{ objectFit: 'cover', width: '60%', height: '100px', borderRadius: '20px 35px 20px 35px' }} />
                  <h6 className="mt-2">{categories.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4>Explore More Categories</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {categories.slice(7).map(categories => (
            <div key={categories.id} className="col mb-3">
              <div className="">
                <div className="card-body">
                  <Card.Img variant="top" src={categories.image} style={{ objectFit: 'cover', width: '60%', height: '100px', borderRadius: '20px 35px 20px 35px' }} />
                  <h6 className="mt-2">{categories.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid">
        <h4>Discover Restaurants</h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {restaurants.map(restaurants => (
            <div key={restaurants.id} className="col mb-3">
              <div className="">
                <div className="card-body">
                  <Card.Img variant="top" src={restaurants.image} style={{ objectFit: 'cover', width: '60%', height: '100px', borderRadius: '20px 35px 20px 35px' }} />
                  <h6 className="mt-2">{restaurants.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
