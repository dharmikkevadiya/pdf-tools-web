'use client';
import React, { useEffect, useState } from 'react';
import { BsCrop, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { PDFDocument } from 'pdf-lib';
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import PdfViewer from '../../components/PdfViewer';

export const cropPdfMetadata = {
  title: 'Crop PDF - Trim and Remove Unwanted Margins Online',
  description:
    'Easily crop PDF pages online and remove unwanted margins. Our PDF cropping tool allows you to precisely trim your PDF documents for a cleaner and more professional look.',
  keywords:
    'crop PDF, trim PDF, remove margins, PDF cropping, online PDF cropper, crop PDF pages',
};

const Crop = () => {
  const [croppedPdfUrl, setCroppedPdfUrl] = useState();
  const [file, setFile] = useState(null);
  const [pdfSelected, setPdfSelected] = useState(false);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }

  useEffect(() => {
    if (!file) return;
  }, [file, setCroppedPdfUrl]);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    setPdfSelected(true);
  };

  const cropPDF = async () => {
    if (!file) {
      alert('Please select a PDF file');
      return;
    }

    const pdfDoc = await PDFDocument.load(await file.arrayBuffer());

    // Perform cropping operations as needed

    // Save the cropped PDF
    const croppedPdfData = await pdfDoc.save();

    const blob = new Blob([croppedPdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'cropped.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 8 }}>
      <Card
        sx={{
          padding: 4,
          textAlign: 'center',
          backgroundColor: '#f0f0f0',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <CardContent>
          {pdfSelected ? (
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.3)',
                background: '#000',
              }}
            >
              <PdfViewer
                url={URL.createObjectURL(file)}
                sx={{
                  border: '1px solid rgba(0, 0, 0, 0.5)',
                  width: '350px',
                  height: '400px',
                }}
              />

              <CardContent>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: '#ccc',
                  }}
                >
                  {file.name}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <>
              <h2 className="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">
                Crop PDF File
              </h2>
              <div
                style={{
                  backgroundColor: '#DEF2FF',
                  borderRadius: '10px',
                  padding: '15px',
                  margin: '20px 0',
                  background: 'rgba(69, 90, 100, .2)',
                }}
              >
                <p
                  style={{
                    fontSize: '1em',
                    color: '#455a64',
                    marginBottom: '8px',
                    marginTop: '5px',
                  }}
                >
                  Please, select more PDF files by clicking on `Select PDF
                  files`. Use our PDF manipulation capabilities which let you
                  crop from your PDF.
                </p>
              </div>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e)}
                style={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Button
                  component="span"
                  variant="contained"
                  color="primary"
                  sx={{ padding: '14px' }}
                >
                  Select PDF File
                </Button>
              </label>
            </>
          )}
        </CardContent>
      </Card>

      {file && (
        <Container sx={{ textAlign: 'center', marginTop: 0 }}>
          <Button
            onClick={cropPDF}
            variant="contained"
            color="primary"
            startIcon={<BsFillArrowDownCircleFill />}
            component="span"
            sx={{ padding: 2 }}
          >
            Download Cropped PDF
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default Crop;
