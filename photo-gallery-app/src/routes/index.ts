import { Router } from 'express';

const router = Router();


import { deletePhoto, createPhoto, getPhotos, getPhoto, updatePhoto } from '../controllers/photo.controller'; 
import multer from '../libs/multer';


router.route('/photos')
	.post(multer.single('image'), createPhoto)
	.get(getPhotos);


router.route('/photos/:id')
	.get(getPhoto)
	.delete(deletePhoto)
	.put(updatePhoto);


export default router;