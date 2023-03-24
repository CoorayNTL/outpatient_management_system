import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["PATIENT", "SUPER_ADMIN", "HEALTH_PROF"],
    default: "PATIENT",
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  healthProfessional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthProfessional",
  },
  superAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SuperAdmin",
  },
  name: {
    first_name: {
      type: String,
      required: [true, "First name is required"],
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
    },
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "Email should be unique"],
    lowercase: [true, "Email should be lowercase"],
  },
  password: {
    type: String,
    required: [true, "Password is rquired"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: (v) => {
        return /\d{10}/gm.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  age: {
    type: String,
    required: [true, "Age is rquired"],
  },
  gender: {
    type: String,
    required: [true, "gender is rquired"],
  },
  nic: {
    type: String,
    required: [true, "nic is rquired"],
  },
  dob: {
    type: String,
    required: [true, "Date of  birth is required"],
  },
});

UserSchema.plugin(aggregatePaginate);

const User = mongoose.model("User", UserSchema);

export default User;
