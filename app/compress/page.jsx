'use client';
import React, { useEffect, useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { PDFDocument } from 'pdf-lib';
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import PdfViewer from '../../components/PdfViewer';

export const compressPdfMetadata = {
  title: 'Compress PDF - Reduce PDF File Size Online',
  description:
    'Efficiently compress PDF files online and reduce their file size without compromising quality. Our PDF compression tool makes your documents more manageable.',
  keywords:
    'compress PDF, reduce PDF file size, PDF compression, online PDF compressor, compress large PDF',
};

const CompressPDF = () => {
  const [compressedPdfUrl, setCompressedPdfUrl] = useState();
  const [file, setFile] = useState(null);
  const [pdfSelected, setPdfSelected] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);

  useEffect(() => {
    if (!file) return;
  }, [file, setCompressedPdfUrl]);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    setPdfSelected(true);
  };

  const compressPDF = async () => {
    if (!file || isCompressing) {
      return;
    }

    setIsCompressing(true);

    const pdfDoc = await PDFDocument.load(await file.arrayBuffer());

    // Perform compression operations as needed

    // Save the compressed PDF
    const compressedPdfData = await pdfDoc.save();

    const blob = new Blob([compressedPdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    setCompressedPdfUrl(url);
    setIsCompressing(false);
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
                Compress PDF File
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
                  compress your PDF.
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

      {compressedPdfUrl && (
        <Container sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BsFillArrowDownCircleFill />}
            href={compressedPdfUrl}
            download="compressed.pdf"
            sx={{ padding: 2 }}
          >
            Download Compressed PDF
          </Button>
        </Container>
      )}

      {file && !compressedPdfUrl && (
        <Container sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button
            onClick={compressPDF}
            variant="contained"
            color="primary"
            startIcon={<BsFillArrowDownCircleFill />}
            sx={{ padding: 2 }}
            component="span"
            disabled={isCompressing}
          >
            {isCompressing ? 'Compressing...' : 'Compress PDF'}
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default CompressPDF;
