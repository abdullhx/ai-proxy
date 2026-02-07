import express from "express";

const app = express();
app.use(express.json());

/* =========================
   ROOT TEST
   ========================= */
app.get("/", (req, res) => {
  res.send("SERVER OK");
});

/* =========================
   CHAT ENDPOINT (TEST)
   ========================= */
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.json({
        reply: "❌ لم تصل رسالة"
      });
    }

    // رد تجريبي للتأكد أن POST يعمل
    res.json({
      reply: "🤖 وصلني: " + userMessage
    });

  } catch (err) {
    res.status(500).json({
      reply: "Server Error",
      error: err.message
    });
  }
});

/* =========================
   START SERVER
   ========================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
