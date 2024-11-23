import mongoose from "mongoose"

const medicalRacordSchema = new mongoose.Schema({
    
}, { timestamps: true })


const MedicalRecord = mongoose.model("MedicalRecord" , medicalRacordSchema)