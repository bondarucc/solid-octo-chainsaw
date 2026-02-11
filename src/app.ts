import "./initEnv.ts"
import { app } from "./configApp.ts";

app.listen(3535, () => {
  console.log("Listening");
})