import {view} from "primate";

const posts = [{
  id: 1,
  title: "First post",
}];

export default {
  get() {
    return view("post-index.hbs", {posts});
  },
};
