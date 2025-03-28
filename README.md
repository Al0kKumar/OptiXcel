# OptiXcel - Instant Image Compression & Conversion

OptiXcel is a premium SaaS platform designed for fast, high-performance image optimization. It enables instant image compression and conversion with minimal quality loss, making it perfect for developers, designers, and businesses looking to enhance web performance and user experience.

## Features

- **Instant Image Compression & Conversion**: Optimize images efficiently using Sharp and Cloudinary.
- **Fast & Reliable Backend**: Built with Node.js, Express, and MongoDB for scalability.
- **API Access**: Developers can integrate OptiXcel into their applications.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express, MongoDB
- **Image Processing**: Sharp, Cloudinary
- **Authentication**: JWT-based authentication
- **Hosting**: Vercel (Frontend), AWS/Heroku (Backend)

## Screenshots

![Screenshot](/client/public/a1.png)

![Screenshot](/client/public/a2.png)

![Screenshot](/client/public/a3.png)

## Installation & Setup

### Prerequisites
- Node.js (>=16.x)
- MongoDB (local or Atlas)
- Cloudinary Account (for image processing)

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Al0kKumar/optixcel.git
   cd optixcel
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server:**
   ```bash
   npm start
   ```

5. **Run Frontend (if separate repo exists):**
   ```bash
   cd client
   npm install
   npm start
   ```



## Deployment

- **Frontend**: Deployed on vercel
- **Backend**: Deployed on Render
- **Database**: Use MongoDB Atlas for cloud storage
- **Cloudinary**: Used to store images 

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

## Contact

For queries, reach out at [Email](mishraalok189381@gmail.com), [LinkedIn](https://www.linkedin.com/in/alok-kumar09/) or  [GitHub](https://github.com/Al0kKumar).