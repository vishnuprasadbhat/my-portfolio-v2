import { useTheme } from "next-themes";
import { Dialog } from "@headlessui/react";
import { Viewer, Worker, DocumentLoadEvent } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import Button from "../Button";
import packageJson from "../../package.json";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { useState } from "react";

const PDFViewer = ({ isOpen, onClose, fileUrl }) => {
  const { theme } = useTheme();
  const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];
  const getFilePluginInstance = getFilePlugin();
  const zoomPluginInstance = zoomPlugin();
  const { Download } = getFilePluginInstance;
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
  const [fileName, setFileNmae] = useState("");
  const handleDocumentLoad = (e) => {
    setFileNmae(e.file.name.split(".pdf")[0]);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      as="div"
      className="relative z-1000 focus:outline-none"
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <Dialog.Panel
          transition
          className={`w-full  ${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          } p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0`}
        >
          <Dialog.Title
            as="div"
            className={`flex items-center justify-between  font-medium pl-2  ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            {fileName}
            <div
              className={`flex items-center justify-between  font-medium  ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              <ZoomIn>
                {(props) => (
                  <Button onClick={props.onClick}>
                    <img
                      className="h-5"
                      src={`/images/${
                        theme === "dark" ? "zoom-in-white.png" : "zoom-in.png"
                      }`}
                    ></img>
                  </Button>
                )}
              </ZoomIn>
              <CurrentScale>
                {(props) => <>{`${Math.round(props.scale * 100)}%`}</>}
              </CurrentScale>
              <ZoomOut>
                {(props) => (
                  <Button onClick={props.onClick}>
                    <img
                      className="h-5"
                      src={`/images/${
                        theme === "dark" ? "zoom-out-white.png" : "zoom-out.png"
                      }`}
                    ></img>
                  </Button>
                )}
              </ZoomOut>
            </div>
            <div className="flex items-center">
              <Download>
                {(props) => (
                  <Button type="primary" onClick={props.onClick}>
                    Download
                  </Button>
                )}
              </Download>
              <Button onClick={onClose}>Close</Button>
            </div>
          </Dialog.Title>

          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={fileUrl}
              plugins={[getFilePluginInstance, zoomPluginInstance]}
              onDocumentLoad={handleDocumentLoad}
              theme={theme}
            />
          </Worker>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PDFViewer;
