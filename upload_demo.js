 // demo upload endpoint (no auth)
 // This file simulates an endpoint that accepts file upload for user avatars.
 // Intentionally missing auth and file checks (for security review exercise)
 function uploadDemo(req, res) {
   // req.params.id used without auth check -> potential IDOR
   const userId = req.params.id;
   // saving file directly
   // ...
   res.send("uploaded");
 }
 module.exports = { uploadDemo };
