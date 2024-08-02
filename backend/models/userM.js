import M from "mongoose";

const userSchema = new M.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
      min: 1,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
    image: {
      type: String,
    },
    uploadDate: {
      type: String,
    },
  },

  { timestamps: true }
);

const User = M.model("User", userSchema);

export default User;
