'use client';
import React, { useEffect, useState } from 'react';
import { BsFillUnlockFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { PDFDocument } from 'pdf-lib';
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import PdfViewer from '../../components/PdfViewer';

// Unlock PDF Page Metadata
export const unlockPdfMetadata = {
  title: 'Unlock PDF - Remove Passwords and Restrictions from PDF Files',
  description:
    'Effortlessly unlock PDF files by removing passwords and restrictions. Our online PDF unlocking tool allows you to access and modify secured PDF documents with ease.',
  keywords:
    'unlock PDF, unblock PDF, remove PDF password, PDF restrictions removal, online PDF unlocking, access secured PDF',
};

const UnlockPDF = () => {
  const [unlockedPdfUrl, setUnlockedPdfUrl] = useState();
  const [file, setFile] = useState(null);
  const [pdfSelected, setPdfSelected] = useState(false);

  useEffect(() => {
    if (!file) return;
  }, [file, setUnlockedPdfUrl]);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    setPdfSelected(true);
  };

  const unlockPDF = async () => {
    if (!file) {
      alert('Please select a locked PDF file');
      return;
    }

    const pdfBytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });

    // Remove password protection (replace 'password' with the actual password)
    await pdfDoc.decrypt({ password: 'password' });

    // Save the unlocked PDF
    const unlockedPdfData = await pdfDoc.save();

    const blob = new Blob([unlockedPdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    setUnlockedPdfUrl(url);
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
                url={unlockedPdfUrl || URL.createObjectURL(file)}
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
                    color: '#fff',
                  }}
                >
                  {file.name}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <>
              <h2 className="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">
                Unlock PDF File
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
                  Please, select a locked PDF file by clicking on `Select PDF
                  file`. Remove PDF password security, giving you the freedom to
                  use your PDFs as you want.
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
                  Select Locked PDF File
                </Button>
              </label>
            </>
          )}
        </CardContent>
      </Card>

      {file && (
        <Container sx={{ textAlign: 'center', marginTop: 0 }}>
          <Button
            onClick={unlockPDF}
            variant="contained"
            color="primary"
            startIcon={<BsFillUnlockFill />}
            component="span"
            sx={{ padding: 2 }}
          >
            Unlock PDF
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default UnlockPDF;
