const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    form: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    label: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    children: {
        type: Array,
        required: false
    }
  },
  {
    timestamps: true,
  }
);

// module.exports = productSchema;

const Form = mongoose.model("Form", formSchema);
module.exports = Form;
