# Bharatanatyam Arangetram Samarpanam 2025 
# Final Project Submission 
- Submitted August 25 2025

## Check-Off List
- [x] video page 
- [x] quote.  added on June3
- [x] dropdown selection and using Link tag 
- [x] Nav Links updated from a tags
- [x] navigation header on all pages 
- [x] download huge files and transfer to ext HDD
- [x] download photos from google drive 37GB
- [x] sort thru photos c jenna - June3-4-5
- [x] one group photo for Home page 
- [x] in the Program page, use same from brochure
- [x] image for each dancer for their page 
- [x] biography 
- [x] andrea bio
- [x] andrea shishya
- [x] michelle bio
- [x] michelle shishya. June18
- [x] jana bio
- [x] jana shishya
- [x] jenna bio 
- [x] jenna shishya
- [x] rose bio
- [x] rose shishya - Mally chechi has attiude problem - chatGPT produced response
- [x] amarya bio
- [x] amarya shishya - John said he will get it wed nite - john said use chatGPT to formulate a response
- [x] FAQ page (dropdown and form). used June4
- [x] [FAQ souce] 
- [x] Program Page (use Jinoos agenda in Read Me)
- [x] Guru Page 
- [x] Orchestra Page
- [x] venue page 
- [x] drone footage of CLC entry (or photo montage)
- [x] calendar June2025
- [x] livestream link PENDING
- [x] guestbook (backend work)
- [x] Rendor setup after all data is put into site  June14
- [x] Footer on all the pages June11 2026
- [x] REMOVE 390px media query iPhone12 Pro
- [x] 430px media query. iPhone14Pro Max
- [x] 768px media query. iPad - Completed Oct21 2025
- [x] fix home styles and only apply styles for smaller screen in media queries
- [x] remove 1179px media screen its not iPhone15
- [x] jinoo thank you speech video  
- [x] reflection video
- [x] focus on uploading a photo to mongo DB 
- [x] how to fetch that img from mongo DB andd displaying in the frontend
- [x] making the uploads specific to the accordian 
- [x] set up schema in Mongoose for the various categories 
- [x] need to test in postman
<<<<<<< HEAD
- [x] allow multiple uploads of images and video at one time
- [x] its roating images sideways
=======
- [x] rotation of images
- [x] multiple image upload and video 
- [x] have videos compressed before uploading .. max limit is 100MB - found out Sept2025
- [x] have photo images compressed to allow pages to load faster - Completed Aug 26 2025
(https://www.w3schools.com/howtohowto_js_accordion.asp)
FAQ documentation for accordion dropdown

### Outline on all Items.. just paste into footer css file
* {
  outline: 1px dotted red;
} 

### Performers
(Pictures of dancers animation CSS)
1. Michelle Eapen - 1
2. Andrea Thomas - 2
3. Jana Scaria - 3
4. Rose Thomas - 4
5. Jenna Plamoottil - 5
6. Amarya Koola - 6


1. finish all the components (nav-links) browser router links 
2. dancer updates 

Performer's autobiography
 - COMPLETED

Shishya memoires: Parents Shishya 

Michelle’s Parents Shishya - COMPLETED

rose Shishya  - COMPLETED

Amarya’s Bharatanayam bio - COMPLETED

john and latha shishya - COMPLETED

RSVP section form to fill out per each dancer - COMPLETED

Jenna Bharatanayam bio - COMPLETED

Jennas Shishya - COMPLETED

Andreas bio - COMPLETED 

Andreas parent Shilpa and Jeril - COMPLETED

Jana’s bio - COMPLETED

Jana’s parents note - COMPLETED 

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

----------------------------------------------------
## Getting started / Startup instructions

Follow these steps to run the project locally (backend + frontend).

Prerequisites
- Node.js (v16+ recommended) and npm (or yarn)
- (Optional) MongoDB if you plan to use the server-side database
- (Optional) Cloudinary account and credentials if you use image/video uploads

1) Install dependencies

From the repository root run:

```bash
# install server deps
cd server
npm install

# install web (frontend) deps
cd ../web
npm install
```

2) Add environment variables

- Server: create `server/.env` with the following (example):

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bharatanatyam
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

- Frontend (Vite): create `web/.env` with client variables prefixed by `VITE_`:

```
VITE_API_BASE=http://localhost:5000
VITE_FALLBACK_IMAGE=/src/assets/avatar.jpg
```

3) Run in development (two terminals)

Terminal A (backend):

```bash
cd server
# If the project has a dev script (nodemon), use it; otherwise run node
npm run dev || node index.js
```

Terminal B (frontend):

```bash
cd web
npm run dev
```

4) Build for production

```bash
cd web
npm run build

# Serve the built files from web/dist using a static server or integrate with server/
```

Notes and troubleshooting
- Vite client env vars must start with `VITE_` and require restarting the dev server after changes.
- Do not expose secrets in client-side env vars (VITE_* are bundled into the client).
- If the frontend cannot reach the backend verify `VITE_API_BASE` matches the server URL and check CORS configuration on the server.
- For Cloudinary uploads, ensure credentials are present in `server/.env` and that the Cloudinary helper is configured in `server/services/cloudinary.js`.

