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
    slug: {
      type: String,
      unique: true,
      index: true,
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
TourSchema.pre("save", async function () {
  if (!this.isModified("title")) return;

  let baseSlug = slugify(this.title, { lower: true, strict: true });
  let slug = baseSlug;
  let count = 1;

  while (await mongoose.models.Tour.exists({ slug })) {
    slug = `${baseSlug}-${count++}`;
  }

  this.slug = slug;
});




export default mongoose.models.Tour || mongoose.model("Tour", TourSchema);
