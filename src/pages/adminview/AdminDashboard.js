import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./AdminDashboard.css"



const AdminDashboard = () => {
  return (
    <>
    <Container>
        <h2 className="md-auto text-center p-4">Admin Dashboard</h2>
        {/* TODO */}
        <div className="row" style={{ width: '100%', maxWidth: '70rem', display: 'flex', flexWrap: 'wrap' }}>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cuisines</h5>
                  <button type="button" className="btn btn-outline-primary my-1">View Cuisines</button>
                  <button type="button" className="btn btn-outline-primary my-1" style={{marginLeft: '10px'}}>Add Cuisines</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Categories</h5>
                  <div>
                    <button type="button" className="btn btn-outline-primary my-1">View Categories</button>
                    <button type="button" className="btn btn-outline-primary" style={{marginLeft: '10px'}}>Add Categories</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Restaurants</h5>
                  <button type="button" className="btn btn-outline-primary my-1">View Restaurants</button>
                  <button type="button" className="btn btn-outline-primary" style={{marginLeft: '10px'}}>Add Restaurants</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Food Items</h5>
                  <button type="button" className="btn btn-outline-primary my-1">View Food Items</button>
                  <button type="button" className="btn btn-outline-primary" style={{marginLeft: '10px'}}>Add Food Items</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Orders</h5>
                  <button type="button" className="btn btn-outline-primary my-1">View Orders</button>
                  <button type="button" className="btn btn-outline-primary" style={{marginLeft: '10px'}}>Update Orders</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User</h5>
                  <button type="button" className="btn btn-outline-primary my-1">View Customers</button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Restaurant Menu</h5>
                  <button type="button" className="btn btn-outline-primary my-1">View Menu</button>
                  <button type="button" className="btn btn-outline-primary mx-sm-3 my-1">Update Menu</button>
                </div>
              </div>
            </div>
          </div>



      </Container>
    </>
  );
};
export default AdminDashboard;
