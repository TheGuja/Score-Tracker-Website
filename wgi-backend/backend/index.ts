import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { wgi } from './models/wgi'

const app = express();
const port = 3001;
const dbURL = 'mongodb+srv://guja:Guej1705@wgiscores.oyvytnp.mongodb.net/?retryWrites=true&w=majority&appName=WGIScores'

app.use(express.json()); // Add this line to parse JSON data

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
});

mongoose.connect(dbURL)
    .then((result) => app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    }))
    .catch((err) => console.log(err))

// curl -X POST -H "Content-Type: application/json" -d '{"group": "Group A", "division": "lorem", "score": 100, "rank": 1, "date": ex}' http://localhost:3001/add-data

app.post("/add-data", (req: Request, res: Response) => {
    const newData = new wgi({
        group: req.body.group,
        division: req.body.division,
        score: req.body.score,
        rank: req.body.rank,
        date: req.body.date
    });

    newData.save()
       .then((result) => {
            res.send("Data added successfully");
        })
       .catch((err) => {
            console.log(err);
            res.send("Error adding data");
        });
});

// New endpoint to retrieve data
// app.get("/get-data", (req: Request, res: Response) => {
//     wgi.find()
//       .then((data) => {
//           res.json(data);
//       })
//       .catch((err) => {
//           console.log(err);
//           res.send("Error fetching data");
//       });
// });

// New endpoint to retrieve data by division
app.get("/get-data", (req: Request, res: Response) => {
    const division = req.query.division;
  
    if (!division) {
      return res.status(400).send("Division is required");
    }
  
    wgi.find({ division: division })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Error fetching data");
      });
  });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });