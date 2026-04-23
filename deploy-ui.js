import { exec } from "child_process";

const host = "185.207.0.50";
const user = "root";
const path = "/root/iptvlm/apps/api/dist/ui";

if (!host || !user || !path) {
  console.error("Missing env variables");
  process.exit(1);
}

const cmd = `rsync -avz ./apps/ui/dist/ ${user}@${host}:${path}`;

console.log("🚀 Running:", cmd);

exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`Done:\n${stdout}`);
});