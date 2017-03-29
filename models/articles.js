var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  },
  saved: {
        type: Boolean,
    },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
    },
});

var Articles = mongoose.model("Articles", ArticlesSchema);
module.exports = Articles;
