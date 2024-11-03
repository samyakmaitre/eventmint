const ShowsModal = require("../models/Shows");

const express = require("express");
const router = express.Router();

router.post("/Addshows", async function AddShow(req, resp) {
  try {
    const { title, description, venue, startDate, endDate, email, website } =
      req.body;
    if (
      !title ||
      !description ||
      !venue ||
      !startDate ||
      !endDate ||
      !email ||
      !website
    ) {
      return resp.status(400).send({
        message: "All fields are required",
      });
    }

    const newShow = new ShowsModal({
      title,
      description,
      venue,
      startDate,
      endDate,
      email,
      website,
    });

    const savedShow = await newShow.save();

    resp.status(201).send({
      message: "Show added successfully",
      data: savedShow,
    });
  } catch (error) {
    resp.status(500).send({
      message: "An error occurred while adding the show",
      error: error.message,
    });
  }
});

module.exports = router;
