import axios from "axios";
import { useEffect, useState } from "react";
import "./Advert.css";
import icon from "../img/icon.png";

let state = {
  decisions: [],
};

const Adverts = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  const getAdverts = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      try {
        const res = await axios.get("http://localhost:5000/api/adverts");
        console.log(res.data);
        setAdverts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", getAdverts);
    return () => {
      document.removeEventListener("keydown", getAdverts);
    };
  });

  const addDecision = (id, decision) => {
    const newDecision = {
      advertID: id,
      decision: decision,
    };

    if (state.decisions.length !== 0) {
      let objIndex = state.decisions.findIndex((obj) => obj.id === id);
      if (objIndex === -1) {
        state.decisions.push(newDecision);
      } else {
        state.decisions[objIndex].decision = decision;
      }
    } else {
      state.decisions.push(newDecision);
    }
  };

  const postDecisions = () => {
    try {
      state.decisions.map((item) => {
        axios.post("http://localhost:5000/api/decisions", item).then((res) => {
          console.log(res);
          console.log(res.data);
        });
      });
      setPage((prevPage) => prevPage + 1);
      window.scroll(0, 450);
    } catch (err) {
      console.log(err);
    }
  };

  const keyPress = (e, id, text) => {
    const code = e.keyCode || e.which;

    if (code === 32) {
      addDecision(id, "approve");
    }
    if (code === 46) {
      addDecision(id, "decline");
    }
    if (code === 13 && e.shiftKey) {
      e.preventDefault();
      addDecision(id, "escalate");
    }
    if (code === 118) {
      postDecisions();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {adverts.slice((page - 1) * 10, (page - 1) * 10 + 10).map((item) => (
        <div
          className="card"
          onKeyUp={(e) => keyPress(e, item._id)}
          tabIndex="0"
        >
          <div className="card-header">
            <div className="card-header_right">
              <span style={{ color: "#1764CC" }}>{item.ownerId}</span>
              <span> — </span>
              <span>{item.publishDateString}</span>
            </div>
            <div className="card-header_left">
              <img src={icon} alt="user" />
              <span>{item.ownerLogin}</span>
            </div>
          </div>

          <div className="card-body">
            <h2 className="card-body_title">{item.bulletinSubject}</h2>
            <div className="card-body_info">
              <pre className="card-body_text">{item.bulletinText}</pre>
              <div className="card-body_imgs">
                {item.bulletinImagees.map((item) => (
                  <img src={item} alt="advert" />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Adverts;
