'use client';
import React, { useEffect, useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { PDFDocument } from 'pdf-lib';
import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io';
import PdfViewer from '../../components/PdfViewer';

const Merge = () => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();
  const [files, setFiles] = useState(null);
  const [pdfSelected, setPdfSelected] = useState(false);

  useEffect(() => {
    if (!files) return;
  }, [files, setMergedPdfUrl]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) =>
      prevFiles ? [...prevFiles, ...newFiles] : newFiles
    );
    setPdfSelected(true);
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert('Please select at least two PDF files');
      return;
    }

    const pdfDocs = await Promise.all(
      files.map((file) => {
        return file.arrayBuffer().then((data) => PDFDocument.load(data));
      })
    );

    const mergedPdf = await PDFDocument.create();

    for (const pdfDoc of pdfDocs) {
      const copiedPages = await mergedPdf.copyPages(
        pdfDoc,
        pdfDoc.getPageIndices()
      );
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfData = await mergedPdf.save();

    const blob = new Blob([mergedPdfData], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'merged.pdf';
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
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          background: `#000`,
        }}
      >
        <CardContent>
          {pdfSelected ? (
            <Grid container>
              <Grid item xs={12} md={9}>
                {/* Display selected PDFs in a row */}
                <Grid container spacing={3}>
                  {files?.length > 0 &&
                    files?.map((file, index) => (
                      <Grid key={file.name} item xs={12} md={4}>
                        <Card
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.4)',
                            background: 'rgba(69, 90, 100, .2)',
                          }}
                        >
                          <PdfViewer
                            url={URL.createObjectURL(file)}
                            sx={{
                              border: '1px solid rgba(0, 0, 0, 0.5)',
                              width: '100%',
                              height: '165px',
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
                      </Grid>
                    ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                {/* "+" button at the right center */}

                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={(e) => handleFileChange(e)}
                    style={{ display: 'none' }}
                    id="file-input"
                  />
                  <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                    <IoIosAddCircle size="2.5em" color="#1976D2" />
                  </label>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <>
              <h2 className="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">
                Merge PDF Files
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
                  Please, select more PDF files by clicking again on `Select PDF
                  files`. Select multiple files by maintaining pressed CTRL
                </p>
              </div>
              <input
                type="file"
                accept=".pdf"
                multiple
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
                  Select PDF Files
                </Button>
              </label>
            </>
          )}
        </CardContent>
      </Card>
      {!files ||
        (files.length < 1 ? (
          ''
        ) : (
          <Grid
            container
            justifyContent="center"
            sx={{ marginTop: 5, marginBottom: 5 }}
          >
            <Button
              onClick={mergePDFs}
              variant="contained"
              color="primary"
              startIcon={<BsFillArrowDownCircleFill />}
              disabled={!files || files.length < 1}
              component="span"
              sx={{ padding: 2 }}
            >
              Download Merged PDF
            </Button>
          </Grid>
        ))}
    </Container>
  );
};

export default Merge;
