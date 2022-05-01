const optionSchema = new mongoose.Schema({
    optionText: { type: String, required: true },
    isAnswer: { type: Boolean, required: true },
  });
  
  const locationSchema = new mongoose.Schema({
    locationName: { type: String, required: true },
  });
  
  const questionSchema = mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
        maxLength: 1000,
      },
      answerOptions: [optionSchema],
      author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      locations: [locationSchema],
      category: {
        type: String,
        required: true,
      },
      questionType: {
        type: String,
      },
      isFlagged: {
        type: Boolean,
        default: false,
      },
      flagReason: {
        type: String,
      },
      isPublic: {
        type: Boolean,
        default: true,
      },
      checkDate: {
        type: Date,
      },
      qualityVoteTotal: {
        type: Number,
      },
      difficultyVoteTotal: {
        type: Number,
      },
      isDeprecated: {
        type: Boolean,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const Question = mongoose.model("Question", questionSchema);