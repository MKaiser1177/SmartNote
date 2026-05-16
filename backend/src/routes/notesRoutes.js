import express from"express";
import { authRequired } from "../middlewares/auth.js";
import { getAllNotes } from "../controllers/notesController.js";
import { createNote } from "../controllers/notesController.js";
import { updateNote } from "../controllers/notesController.js";
import { deleteNote } from "../controllers/notesController.js";
import { getNoteById } from "../controllers/notesController.js";


const router= express.Router();


router.use(authRequired);

router.get("/", getAllNotes);
router.get("/:id", getNoteById); 
router.post("/", createNote);    
router.put("/:id", updateNote );
router.delete("/:id", deleteNote );    

export default router;