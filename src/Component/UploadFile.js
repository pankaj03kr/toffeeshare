import React from "react";
import { Container } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

function UploadFile(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <Container>
        <div className="uploaditem">
          <div className="upload">
            <section className="container">
              <h5 className="p-3"> Media</h5>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>Click or drag file to upload </p>
              </div>
              <aside>
                <h4>Files Item</h4>
                <ul>{files}</ul>
              </aside>
            </section>
          </div>
          <div className="details">
            <h1 className="mb-3">
              {" "}
              Share files directly from your device to anywhere
            </h1>

            <p>
              Send files of any size directly from your device without ever
              storing anything online.
            </p>
            <div className="info-1">
              <h6>No file size limit</h6>
              <h6>Blazingly fast</h6>
            </div>
            <div className="info-2">
              <h6>Peer-to-peer</h6>
              <h6>End-to-end encrypted</h6>
            </div>
          </div>
        </div>
        <div className="column-container">

          <div className="centerd-item">
            <h1 style={{width:600,height:"auto"}}>What is ToffeeShare?</h1>
            <img
              src="https://toffeeshare.com/static/media/toffeeshare-explained.a5429480.png"
              alt=""
            />
            <p style={{width:600,height:"auto"}}>
              We are a free and independent peer-to-peer (P2P) file sharing
              service from the Netherlands that prioritizes your privacy and
              keeps your data safe. We store nothing online: simply close your
              browser to stop sending.
            </p>
          </div>
          <div className="centerd-item">
            <h1>Files are shared straight from your device</h1>
            <img
              src="https://toffeeshare.com/static/media/toffeeshare-explained.a5429480.png"
              alt=""
            />
            <p style={{width:600,height:"auto"}}>
              When you close the browser tab your files are no longer
              accessible, minimising the risk of anyone getting unwanted access.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default UploadFile;
