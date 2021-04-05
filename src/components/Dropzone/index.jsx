import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDropzone } from 'react-dropzone'
import { Image } from 'cloudinary-react'
// import styles from "@/assets/css/Dropzone.module.css";
import { primaryColor, secondaryColor } from '@/assets/jss/materialKitReact'

const useStyles = makeStyles(theme => ({
	root: {},
	dropzone: {
		height: '8rem',
		margin: '1rem',
		padding: '1rem',
		border: `2px dashed ${secondaryColor}`,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		cursor: 'pointer',
	},
	active: {
		border: `2px solid ${secondaryColor}`,
		backgroundColor: `${secondaryColor}`,
	},
	uploaded: {
		backgroundColor: `${secondaryColor}`,
	},
}))

export default function Dropzone() {
	const classes = useStyles()
	const [uploadedFiles, setUploadedFiles] = useState([
		// {
		//   asset_id: "7062221d47c3d1a8fe84e050962dc4a7",
		//   public_id: "dxepgviniu101ezczzwh",
		//   version: 1603137359,
		//   version_id: "ae47eae8e86d5dcd2684be0f17a37303",
		//   signature: "bdc059c525065c172476da873e330752674826c3",
		//   width: 1200,
		//   height: 630,
		//   format: "jpg",
		//   resource_type: "image",
		//   created_at: "2020-10-19T19:55:59Z",
		//   tags: [],
		//   bytes: 21555,
		//   type: "upload",
		//   etag: "86bee42b3726ca96cd64f9dfe6181a4f",
		//   placeholder: false,
		//   url:
		//     "http://res.cloudinary.com/leighhalliday/image/upload/v1603137359/dxepgviniu101ezczzwh.jpg",
		//   secure_url:
		//     "https://res.cloudinary.com/leighhalliday/image/upload/v1603137359/dxepgviniu101ezczzwh.jpg",
		//   access_mode: "public",
		//   original_filename: "hairless-dog-breeds-fb",
		// },
	])

	const [title, setTitle] = useState('Upload Avatar')
	const [isUploaded, setIsUploaded] = useState(false)

	const onDrop = useCallback(acceptedFiles => {
		const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`

		acceptedFiles.forEach(async acceptedFile => {
			// const { signature, timestamp } = await getSignature();

			const formData = new FormData()
			formData.append('file', acceptedFile)
			// formData.append(
			//   "upload_preset",
			//   process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
			// );
			// formData.append("signature", signature);
			// formData.append("timestamp", timestamp);
			formData.append('timestamp', Math.round(Date.now() / 1000))
			formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY)

			const response = await fetch(url, {
				method: 'post',
				body: formData,
			})
			setTitle('Uploaded')
			setIsUploaded(true)
			const data = await response.json()

			setUploadedFiles(old => [...old, data])
		})
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accepts: 'image/*',
		multiple: false,
	})

	return (
		<>
			<div
				{...getRootProps()}
				className={`${classes.dropzone} ${
					isDragActive ? classes.active : null
				} ${isUploaded ? classes.uploaded : null}`}>
				<input {...getInputProps()} />
				{title}
			</div>

			{/* <ul>
        {uploadedFiles.map((file) => (
          <li key={file.public_id}>
            <Image
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId={file.public_id}
              width="100"
              crop="scale"
            />
          </li>
        ))}
      </ul> */}
		</>
	)
}

// async function getSignature() {
//   const response = await fetch("/api/sign");
//   const data = await response.json();
//   const { signature, timestamp } = data;
//   return { signature, timestamp };
// }
