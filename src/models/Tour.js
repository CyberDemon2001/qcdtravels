import mongoose from "mongoose";
import slugify from "slugify"; // npm install slugify

const CityPlanSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
      trim: true,
    },
    days: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false },
);

const TourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
     location: {
      type: String,
      required: true,
      trim: true,
    },
     overview: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      days: {
        type: Number,
        required: true,
      },
      nights: {
        type: Number,
        required: true,
      },
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    itinerary: {
      type: [CityPlanSchema],
      required: true,
    },

      includes: {
      type: [String],
      required: true,
      default: [],
    },
    startingPrice: {
      type: Number,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

// Pre-save hook to generate slug from title
TourSchema.pre("save", function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export default mongoose.models.Tour || mongoose.model("Tour", TourSchema);
