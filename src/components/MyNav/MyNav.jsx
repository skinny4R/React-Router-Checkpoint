import React, { useState } from "react";
import { Navbar, Container, Button, Modal } from "react-bootstrap";
import ReactStars from "react-stars";
import { v4 as uuidv4 } from "uuid";

const MyNav = ({ setMovies, movies, setTitleSearch, setRatingSearch, ratingSearch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    rating: 1,
    poster: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      handleClose();
    } else {
      alert("The movie rating should be between 1 and 5");
    }
  };

  const handleTitleSearch = (e) => {
    setTitleSearch(e.target.value);
  };

  const handleRatingSearch = (newRating) => {
    setRatingSearch(newRating);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie4U</Navbar.Brand>
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              placeholder="Search By Title"
              className="form-control me-2"
              onChange={handleTitleSearch}
            />
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              half={false}
              onChange={handleRatingSearch}
              value={ratingSearch}
            />
            <Button variant="warning" onClick={handleShow} className="ms-2">
              Add Movie
            </Button>
          </div>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter The Movie Title"
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="poster">Poster URL</label>
            <input
              type="text"
              className="form-control"
              id="poster"
              placeholder="Enter The Poster URL"
              onChange={handleChange}
              name="poster"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter The Description"
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              placeholder="Enter The Rating"
              onChange={handleChange}
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyNav;
