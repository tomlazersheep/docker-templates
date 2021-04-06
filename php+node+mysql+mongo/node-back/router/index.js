const router = require('express').Router();

// FEIS ROUTES

// get all feis
router.get("/feis", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /feis"
  });
});

// get a given feis data
router.get("/feis/:feis_uri/:feis_id", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /feis"
  });
});

// get results from a given feis -> replaces /feis/:feis_uri/:feis_id  
router.get("/feis/:feis_uri/:feis_id/results", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /results"
  });
});

// get competitors participating on a given feis -> Replaces /competitors/:feis_uri/:feis_id 
router.get("/feis/:feis_uri/:feis_id/competitors", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /competitors"
  });
});



// LOG IN / SIGN IN ROUTES

// sign in
router.post("/login", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "POST on /login"
  });
});


// sign in
router.post("/sign-out", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "POST on /sign-out"
  });
});

// sign up a normal account
router.post("/sign-up", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "POST on /sign-up"
  });
});


// sign up an organizer account
router.post("/sign-up/organizer", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "POST on /sign-up"
  });
});


// CONTACT ROUTES

// receive contact leads
router.post("/contact", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "POST on /contact"
  });
});


// ACCOUNT ROUTES

// get logged account data (transaction history, update password)
router.get("/account", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /account"
  });
});

// get all dancers in a logged account
router.get("/account/dancers", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /account/dancers"
  });
});

// get a single dancer (for edits)
router.get("/account/dancers/:dancer_id", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "GET on /account/dancers"
  });
});

// create a new dancer in a logged account
router.post("/account/dancers", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "POST on /account/dancers"
  });
});

// update a dancer in a logged account
router.put("/account/dancers/:dancer_id", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "PUT on /account/dancers"
  });
});


// delete a dancer in a logged account
router.delete("/account/dancers/:dancer_id", (req,res)=>{
  const params = req.params;
  res.json({
    "params": params,
    "response": "DELETE on /account/dancers"
  });
});

module.exports = router;