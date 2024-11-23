import mongoose from "mongoose"

const workingHour = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    hour: {
        type: Number,
        required: true,
        default: 0,
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    worksIn: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ],
    workingHour: [
        {
            type: [workingHour]
        }
    ]
}, { timestamps: true })


const Doctor = mongoose.model("Doctor" , doctorSchema)