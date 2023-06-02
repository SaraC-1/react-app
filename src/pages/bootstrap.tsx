import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";
import Player1 from "./../assets/player1";
import Player2 from "./../assets/player2";
import Grass from "./../assets/grass";
import Linea from "../assets/linea";
import Flag from "./../assets/flag";

type GenderType = "male" | "female";

type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};

const Bootstrap = () => {
  const frontendRazred: StudentType[] = [
    {
      name: "Ivan",
      lastName: "Sakoman",
      age: 29,
      gender: "male",
      height: 183,
      hobby: "Cycling",
      employed: true,
      favoriteColor: "red",
    },
    {
      name: "Goran",
      lastName: "Viljanac",
      age: 19,
      gender: "male",
      height: 185,
      hobby: "Musician",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Katharina",
      lastName: "Zlosa",
      age: 27,
      gender: "female",
      height: 180,
      hobby: "reading",
      employed: true,
      favoriteColor: "green",
    },
    {
      name: "Antun",
      lastName: "Glumac",
      age: 22,
      gender: "male",
      height: 185,
      hobby: "Football",
      employed: false,
      favoriteColor: "Red",
    },
    {
      name: "Nikolina",
      lastName: "Kirčanski",
      age: 40,
      gender: "female",
      height: 164,
      hobby: "Martial arts",
      employed: true,
      favoriteColor: "black",
    },
    {
      name: "Robert",
      lastName: "Đujić",
      age: 24,
      gender: "male",
      height: 182,
      hobby: "Books, movies, games",
      employed: false,
      favoriteColor: "silver",
    },
    {
      name: "Monika",
      lastName: "Ivankovic",
      age: 23,
      gender: "female",
      height: 164,
      hobby: "roller skating",
      employed: true,
      favoriteColor: "grey",
    },
    {
      name: "Maja",
      lastName: "Juratovac",
      age: 32,
      gender: "female",
      height: 169,
      hobby: "dancing",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivan",
      lastName: "Puljić",
      age: 25,
      gender: "male",
      height: 175,
      hobby: "running",
      employed: false,
      favoriteColor: "blue",
    },
    {
      name: "Sara",
      lastName: "Cindric",
      age: 24,
      gender: "female",
      height: 161,
      hobby: "writing",
      employed: false,
      favoriteColor: "black",
    },
    {
      name: "Kristian",
      lastName: "Radoš",
      age: 30,
      gender: "male",
      height: 188,
      hobby: "Netflix",
      employed: true,
      favoriteColor: "blue",
    },
    {
      name: "Ivana",
      lastName: "Arbutina",
      age: 42,
      gender: "female",
      height: 166,
      hobby: "slikanje",
      employed: false,
      favoriteColor: "red",
    },
  ];

  return (
    <div className="container">
      <h1>Bootstrap</h1>
      <Button variant="outline-info">Info</Button>{" "}
      {["info"].map((info) => (
        <Alert key={info} variant={info}>
          This is a {info} alert—check it out!
        </Alert>
      ))}
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="dashboard" title="Dashboard">
          <div className="barmodal">
            <div className="barmodal__flex">
              <div className="barmodal__number">
                <p>45</p>
              </div>
              <div className="barmodal__p">
                <p>Ovo je neki tekst</p>
                <p className="barmodal__p__secondary">koji nešto objašnjava</p>
              </div>
            </div>
            <ProgressBar now={45} />
          </div>
          <Table className="bootstrap__table" striped bordered hover>
            <thead>
              <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Visina</th>
                <th>Hobby</th>
              </tr>
            </thead>
            <tbody>
              {frontendRazred.map((student) => {
                return (
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.lastName}</td>
                    <td>{student.height}</td>
                    <td>{student.hobby}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="game" title="Game">
          <div>
            <div>
              <div className="player1">
                <Player1></Player1>
              </div>
              <div className="grass1">
                <Grass></Grass>
                <Grass></Grass>
              </div>
            </div>
            <div>
              <div className="flag">
                <Flag></Flag>
              </div>
              <div className="player2">
                <Player2></Player2>
              </div>
              <div className="grass2">
                <Grass></Grass>
                <Grass></Grass>
              </div>
              <div className="line">
                <Linea></Linea>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Bootstrap;
