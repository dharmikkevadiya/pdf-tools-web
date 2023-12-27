'use client';
import React, { useEffect, useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { IoIosAddCircle } from 'react-icons/io';
import jsPDF from 'jspdf';
import Image from 'next/image';
import { loadImage } from 'next/image';

const JpgToPdf = () => {
  const [convertedPdfUrl, setConvertedPdfUrl] = useState();
  const [imageFiles, setImageFiles] = useState([]);
  const [jpgSelected, setJpgSelected] = useState(false);

  useEffect(() => {
    if (!imageFiles) return;
  }, [imageFiles, setConvertedPdfUrl]);

  const handleImageFileChange = (e) => {
    const files = e.target.files;
    const newImageFiles = Array.from(files);

    setImageFiles((prevFiles) =>
      prevFiles ? [...prevFiles, ...newImageFiles] : newImageFiles
    );
    setJpgSelected(true);
  };

  const convertToPdf = async () => {
    if (imageFiles.length < 1) {
      alert('Please select at least one JPG file');
      return;
    }

    const pdf = new jsPDF();

    // Use a loop to handle each selected image file
    for (let i = 0; i < imageFiles.length; i++) {
      const imageFile = imageFiles[i];
      const dataUri = await readFileAsDataUri(imageFile);

      // Skip adding a new page for the first iteration
      if (i > 0) {
        pdf.addPage();
      }

      // Create an Image object for loading
      const img = new window.Image();
      img.src = dataUri;

      // Create a Promise for the image loading
      const loadImagePromise = new Promise((resolve) => {
        img.onload = () => resolve(img);
      });

      // Wait for the image to be loaded before adding it to the PDF
      const loadedImage = await loadImagePromise;
      pdf.addImage(loadedImage, 'JPEG', 0, 0, 210, 297);
    }

    pdf.save(`${Date.now()}.pdf`);
  };

  // Helper function to read File as data URI
  const readFileAsDataUri = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 8, position: 'relative' }}>
      <Card
        sx={{
          padding: 4,
          textAlign: 'center',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          position: 'relative',
          background: '#000',
        }}
      >
        <CardContent>
          {jpgSelected ? (
            <Grid container spacing={2}>
              {imageFiles?.length > 0 &&
                imageFiles?.map((file, index) => (
                  <Grid key={index} item xs={12} md={4}>
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '300px',
                        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.4)',
                        background: 'rgba(69, 90, 100, .2)',
                      }}
                    >
                      <Image
                        src={URL.createObjectURL(file)}
                        width={300}
                        height={200}
                        alt=""
                        style={{
                          objectFit: '',
                          width: '100%',
                          height: '250px',
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
                          {file?.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              <Grid
                container
                justifyContent="flex-end"
                alignItems="center"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                }}
              >
                <input
                  type="file"
                  accept=".jpg"
                  multiple
                  onChange={(e) => handleImageFileChange(e)}
                  style={{ display: 'none' }}
                  id="file-input"
                />
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                  <IoIosAddCircle size="2.5em" color="#1976D2" />
                </label>
              </Grid>
            </Grid>
          ) : (
            <>
              <h2 className="text-3xl md:text-[40px] lg:text-[60px]  font-bold mb-8 text-gray-800">
                Jpg to PDF
              </h2>
              <div
                style={{
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
                  Please, select more JPG files by clicking on `Select JPG
                  files`. Convert JPG images to PDF in seconds. Easily adjust
                  orientation and margins.
                </p>
              </div>
              <input
                type="file"
                accept=".jpg"
                multiple
                onChange={(e) => handleImageFileChange(e)}
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
                  Select JPG Files
                </Button>
              </label>
            </>
          )}
        </CardContent>
      </Card>
      {!imageFiles || imageFiles.length < 1 ? (
        ''
      ) : (
        <Grid
          container
          justifyContent="center"
          sx={{ marginTop: 5, marginBottom: 5 }}
        >
          <Button
            onClick={convertToPdf}
            variant="contained"
            color="primary"
            startIcon={<BsFillArrowDownCircleFill />}
            disabled={!imageFiles || imageFiles.length < 1}
            component="span"
            sx={{ padding: 2 }}
          >
            Download Converted PDF
          </Button>
        </Grid>
      )}
    </Container>
  );
};

export default JpgToPdf;
