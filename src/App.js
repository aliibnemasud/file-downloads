import "./App.css";
import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
import { useState } from "react";

function App() {

  const [text, setText] = useState('');
  const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
           /*  new Paragraph({
              text: "Ali Ibne Masud",
              bullet: {
                level: 0, //How deep you want the bullet to be
              },
            }), */
            new Paragraph({
              text: text
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };
  return <div className="App">
    <h1>Download Dynamic Docx file by React</h1>
    <textarea onChange={(e) => setText(e.target.value)} id="" cols="30" rows="5">
    </textarea> <br />
    <button onClick={generate}>Download Doc</button>
  </div>;
}

export default App;
