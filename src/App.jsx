import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Home/Main";
import BookPublishing from "./pages/book-publishing";
import Zendesk from "react-zendesk";

function App() {
  const ZENDESK_KEY = "2c529d5c-f333-4d08-9b30-0662a3076a28";

  const setting = {
    launcher: {
      chatLabel: {
        "en-US": "Chat",
      },
    },
    contactForm: {
      fields: [
        { id: "description", prefill: { "*": "My pre-filled description" } },
      ],
    },
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book-publishing" element={<BookPublishing />} />
      </Routes>
      <div className="m-[-10rem]">
        <Zendesk
          defer
          zendeskKey={ZENDESK_KEY}
          {...setting}
          onLoaded={() => console.log("is loaded")}
        />
      </div>
    </>
  );
}

export default App;
