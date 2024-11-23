import mongoose from "mongoose"

const medicalRacordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    record: {
        type: String,
        required: true
    }

}, { timestamps: true })


const MedicalRecord = mongoose.model("MedicalRecord" , medicalRacordSchema)