# HotelComm
## A landing page of a hotel booking system

This is a simple hotel booking landing page website built with ReactJS, React Router DOM, Tailwind CSS, React Icons, and MirageJS. It serves as a complete end-to-end frontend sample project that was assigned as a task during the Internshala Frontend Internship selection process.

## Tasks

This were the given tasks and completio status: 

~~0. City tabs should be visible (4 as shown in PDG);~~  
~~1. First City tab should be active by default;~~  
~~2. Cards representing an individual property should be 3 in a row;~~  
~~3. Show more button, on which if we click shows 3 more cards;~~  
~~4. Card Design should be not pixel perfect but Similar;~~  
~~5. On each card click it should navigate to the detail page, with the route  ```js /property/:id ```~~  

Now, each task is displayed vertically, and each one is on a new line.

## Features

- View a list of available hotels.
- Click on a hotel to view more details.

## Prerequisites

Before you begin to setup locally, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- A code editor (e.g., Visual Studio Code, Sublime Text, or any of your choice).

## Getting Started

To get a local copy of this project up and running, follow these simple steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AnmolDotX/HotelCommAssignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd HotelCommAssignment.git
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to view the hotel booking landing page.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code for the React application.
  - `components/`: React components used in the project.
  - `mirage/`: Mock data server for hotel using miragejs.
  - `pages/`: React components for different pages.
  - `context/`: contextAPI use for centralised data usage.
  - `data/` : mock data.json file for dummy data.
  - `assets/` : local media files used in the project.

## Mock Data

The project uses MirageJS to provide mock data for hotels and their details. You can customize this data in the `miragejs` folder to suit your requirements.

## Contributing

As this is not a Hobby project or some product level project. This is a task given by a company so please don't try to contribute but you can refer the source for learning purposes.

## Acknowledgments

This project was created as part of the Internshala Frontend Internship selection process. Thanks to Internshala for the opportunity!

---

[Demo](https://hotelcomm.netlify.app/) | [Source](https://github.com/yourusername/hotel-booking-landing-page/issues)